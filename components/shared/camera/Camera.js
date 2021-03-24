import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import Measure from 'react-measure';
import PropTypes from 'prop-types';

import useCardRatio from '../../../hooks/useCardRatio';
import useOffsets from '../../../hooks/useOffsets';
import useUserMedia from '../../../hooks/useUserMedia';

import styles from './camera.module.scss';

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: 'user' },
};

const analyzer = {
  width: 240,
  height: 320
};

const liveness = {
  width: 640,
  height: 480
};

const Camera = forwardRef(({ isCaptureComplete, pauseImage, facingMode }, ref) => {
  const canvasAnalyzerRef = useRef();
  const canvasLivenessRef = useRef();
  const videoRef = useRef();

  const [container, setContainer] = useState({ width: 0, height: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const mediaStream = useUserMedia(CAPTURE_OPTIONS);
  const [aspectRatio, calculateRatio] = useCardRatio(1.586);
  const offsets = useOffsets(
    videoRef.current && videoRef.current.videoWidth,
    videoRef.current && videoRef.current.videoHeight,
    container.width,
    container.height
  );

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  const pauseCamera = () => {
    videoRef.current.pause();
  };

  const resumeCamera = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  };

  function handleResize(contentRect) {
    setContainer({
      width: contentRect.bounds.width,
      height: Math.round(contentRect.bounds.width / aspectRatio),
    });
  }

  function handleCanPlay() {
    calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
    setIsVideoPlaying(true);
    videoRef.current.play();
  }

  function handleClear() {
    const contextAnalyzer = canvasAnalyzerRef.current.getContext('2d');
    const contextLiveness = canvasLivenessRef.current.getContext('2d');
    contextAnalyzer.clearRect(0, 0, canvasAnalyzerRef.current.width, canvasAnalyzerRef.current.height);
    contextLiveness.clearRect(0, 0, canvasLivenessRef.current.width, canvasLivenessRef.current.height);
  }

  function takeAnalyzerPicture() {
    const context = canvasAnalyzerRef.current.getContext('2d');
    canvasAnalyzerRef.current.width = analyzer.width;
    canvasAnalyzerRef.current.height = analyzer.height;

    context.drawImage(
      videoRef.current,
      ((videoRef.current ? videoRef.current.videoWidth : container.width) / 2) - (analyzer.width / 2),
      ((videoRef.current ? videoRef.current.videoHeight : container.height) / 2) - (analyzer.height / 2),
      analyzer.width,
      analyzer.height,
      0,
      0,
      analyzer.width,
      analyzer.height
    );
    const rawImgData = canvasAnalyzerRef.current.toDataURL('image/jpeg', 1);
    return rawImgData;
  }

  function takeLivenessPicture() {
    const context = canvasLivenessRef.current.getContext('2d');
    canvasLivenessRef.current.width = liveness.width;
    canvasLivenessRef.current.height = liveness.height;

    context.drawImage(
      videoRef.current,
      ((videoRef.current ? videoRef.current.videoWidth : container.width) / 2) - (liveness.width / 2),
      ((videoRef.current ? videoRef.current.videoHeight : container.height) / 2) - (liveness.height / 2),
      liveness.width,
      liveness.height,
      0,
      0,
      liveness.width,
      liveness.height
    );
    const rawImgData = canvasLivenessRef.current.toDataURL('image/jpeg', 1);
    return rawImgData;
  }

  function handleCapture() {
    pauseCamera();
    const analyzerPic = takeAnalyzerPicture();
    const livenessPic = takeLivenessPicture();
    const timestamp = Date.now();
    handleClear();
    resumeCamera();
    return {
      analyzer: analyzerPic,
      liveness: livenessPic,
      timestamp
    };

  }

  useImperativeHandle(ref, () => ({
    onCapture: handleCapture,
    onClear: handleClear
  }));

  useEffect(() => {
    if (isCaptureComplete) {
      pauseCamera();
    } else {
      resumeCamera();
    }
  }, [isCaptureComplete]);

  useEffect(() => {
    if (pauseImage) {
      pauseCamera();
    } else {
      resumeCamera();
    }
  }, [pauseImage]);

  if (!mediaStream) {
    return (
      <div className="text-center">
        <p className="body2">
          Se requiere el uso de la cámara para continuar con el proceso.
        </p>
      </div>
    );
  }

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <div className={styles.wrapper}>
          <div
            className={styles.container}
            ref={measureRef}
            style={{
              maxWidth: `${videoRef.current && videoRef.current.videoWidth}px`,
              maxHeight: `${videoRef.current && videoRef.current.videoHeight}px`,
              height: `${videoRef.current && videoRef.current.videoHeight}px`,
            }}
          >
            <video
              className={styles.video}
              ref={videoRef}
              hidden={!isVideoPlaying}
              onCanPlay={handleCanPlay}
              autoPlay
              playsInline
              muted
              style={{
                top: `-${offsets.y}px`,
                left: `-${offsets.x}px`,
              }}
            >
              Se requiere el uso de la cámara para continuar con el proceso
            </video>

            <div
              className={isCaptureComplete ? styles['overlay-success'] : styles.overlay}
              hidden={!isVideoPlaying}
              style={{
                bottom: `${((videoRef.current && videoRef.current.videoHeight) / 2) - (200 / 2)}px`,
                left: `${(container.width / 2) - (200 / 2)}px`,
                right: `${(container.width / 2) - (200 / 2)}px`,
                top: `${((videoRef.current && videoRef.current.videoHeight) / 2) - (320 / 2)}px`
              }}
            />

            <canvas
              className={styles.canvas}
              ref={canvasAnalyzerRef}
              width={analyzer.width}
              height={analyzer.height}
            />
            <canvas
              className={styles.canvas}
              ref={canvasLivenessRef}
              width={liveness.width}
              height={liveness.height}
            />
          </div>
        </div>
      )}
    </Measure>
  );
});

Camera.propTypes = {
  isCaptureComplete: PropTypes.bool.isRequired,
  pauseImage: PropTypes.bool,
  facingMode: PropTypes.string
};

Camera.defaultProps = {
  pauseImage: false,
  facingMode: 'user',
};

export default Camera;

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
  height: 320,
};

const liveness = {
  width: 640,
  height: 480,
};

const Camera = forwardRef(({ isCaptureComplete, pauseImage, cameraStatus, cameraMsg, children }, ref) => {
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

  const handleResize = (contentRect) => {
    setContainer({
      width: contentRect.bounds.width,
      height: Math.round(contentRect.bounds.width / aspectRatio),
    });
  };

  const handleCanPlay = () => {
    calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
    setIsVideoPlaying(true);
    videoRef.current.play();
  };

  const handleClear = () => {
    const contextAnalyzer = canvasAnalyzerRef.current.getContext('2d');
    contextAnalyzer.clearRect(0, 0, canvasAnalyzerRef.current.width, canvasAnalyzerRef.current.height);
    const contextLiveness = canvasLivenessRef.current.getContext('2d');
    contextLiveness.clearRect(0, 0, canvasLivenessRef.current.width, canvasLivenessRef.current.height);
  };

  const takePicture = (canvas, size) => {
    const context = canvas.current.getContext('2d');
    canvas.current.width = size.width;
    canvas.current.height = size.height;

    context.drawImage(
      videoRef.current,
      (videoRef.current ? videoRef.current.videoWidth : container.width) / 2 - size.width / 2,
      (videoRef.current ? videoRef.current.videoHeight : container.height) / 2 - size.height / 2,
      size.width,
      size.height,
      0,
      0,
      size.width,
      size.height
    );
    const rawImgData = canvas.current.toDataURL('image/jpeg', 1);

    return rawImgData;
  };

  const handleCapture = () => {
    pauseCamera();

    const analyzerPic = takePicture(canvasAnalyzerRef, analyzer);
    const livenessPic = takePicture(canvasLivenessRef, liveness);
    const timestamp = Date.now();

    handleClear();
    resumeCamera();

    return {
      analyzer: analyzerPic,
      // liveness: livenessPic,
      timestamp,
    };
  };

  useImperativeHandle(ref, () => ({
    onCapture: handleCapture,
    onClear: handleClear,
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

  return !mediaStream ? (
    <div className="text-center">
      <p className="body2">Se requiere el uso de la cámara para continuar con el proceso.</p>
    </div>
  ) : (
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
              className={`${styles.overlay} ${styles[`status-${cameraStatus}`]}`}
              hidden={!isVideoPlaying}
              style={{
                bottom: `${(videoRef.current && videoRef.current.videoHeight) / 2 - 200 / 2}px`,
                left: `${container.width / 2 - 200 / 2}px`,
                right: `${container.width / 2 - 200 / 2}px`,
                top: `${(videoRef.current && videoRef.current.videoHeight) / 2 - 320 / 2}px`,
              }}
            />

            {cameraMsg && (
              <div className={styles['alert-camera']}>
                <span className="card-aviso text-overflow">{cameraMsg}</span>
              </div>
            )}

            <div className={styles.children}>{children}</div>

            <canvas className={styles.canvas} ref={canvasAnalyzerRef} width={analyzer.width} height={analyzer.height} />
            <canvas className={styles.canvas} ref={canvasLivenessRef} width={liveness.width} height={liveness.height} />
          </div>
        </div>
      )}
    </Measure>
  );
});

Camera.propTypes = {
  isCaptureComplete: PropTypes.bool.isRequired,
  pauseImage: PropTypes.bool,
  cameraStatus: PropTypes.oneOf(['normal', 'error', 'captured', 'cancel']),
  cameraMsg: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Camera.defaultProps = {
  pauseImage: false,
  cameraStatus: 'normal',
  cameraMsg: '',
};

export default Camera;

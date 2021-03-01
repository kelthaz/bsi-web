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

const AIO_WIDTH = 240;
const AIO_HEIGHT = 320;

const Camera = forwardRef(({ isCaptureComplete, pauseImage, facingMode }, ref) => {
  const canvasRef = useRef();
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
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }

  function handleCapture() {
    pauseCamera();
    const context = canvasRef.current.getContext('2d');
    canvasRef.current.width = AIO_WIDTH;
    canvasRef.current.height = AIO_HEIGHT;

    context.drawImage(
      videoRef.current,
      ((videoRef.current ? videoRef.current.videoWidth : container.width) / 2) - (AIO_WIDTH / 2),
      ((videoRef.current ? videoRef.current.videoHeight : container.height) / 2) - (AIO_HEIGHT / 2),
      AIO_WIDTH,
      AIO_HEIGHT,
      0,
      0,
      AIO_WIDTH,
      AIO_HEIGHT
    );
    const rawImgData = canvasRef.current.toDataURL('image/jpeg', 1);
    const timestamp = Date.now();
      handleClear();
      resumeCamera();
    return {
      image: rawImgData,
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
                bottom: `${((videoRef.current && videoRef.current.videoHeight) / 2) - (AIO_HEIGHT / 2)}px`,
                left: `${(container.width / 2) - (AIO_WIDTH / 2)}px`,
                right: `${(container.width / 2) - (AIO_WIDTH / 2)}px`,
                top: `${((videoRef.current && videoRef.current.videoHeight) / 2) - (AIO_HEIGHT / 2)}px`
              }}
            />

            <canvas
              className={styles.canvas}
              ref={canvasRef}
              width={AIO_WIDTH}
              height={AIO_HEIGHT}
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

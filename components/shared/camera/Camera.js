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

    context.drawImage(
      videoRef.current,
      (container.width - 100) / 2,
      (container.height - 100) / 2,
      container.width,
      container.height,
      0,
      0,
      container.width,
      container.height
    );
    const rawImgData = canvasRef.current.toDataURL('image/jpeg', 1);
    const timestamp = Date.now();

      // onCapture(rawImgData);

      // canvasRef.current.toBlob((blob) => onCapture(blob), 'image/jpeg', 1);
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
    return null;
  }

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <div className={styles.wrapper}>
          <div
            className={styles.container}
            ref={measureRef}
            style={{
              maxWidth: `${videoRef.current && videoRef.current.videoHeight}px`,
              maxHeight: `${videoRef.current && videoRef.current.videoWidth}px`,
              height: `${container.height}px`,
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
            />

            <div className={isCaptureComplete ? styles['overlay-success'] : styles.overlay} hidden={!isVideoPlaying} />

            <canvas
              className={styles.canvas}
              ref={canvasRef}
              width={240}
              height={320}
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

import { useState, useEffect } from 'react';

const useUserMedia = (requestedMedia) => {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    async function enableVideoStream() {
      try {
        const stream = await window.navigator.mediaDevices.getUserMedia(
          requestedMedia
        );
        setMediaStream(stream);
      } catch (err) {
        console.error(err);
      }
    }

    if (!mediaStream) {
      enableVideoStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      };
    }
  }, [mediaStream, requestedMedia]);

  return mediaStream;
};


export default useUserMedia;
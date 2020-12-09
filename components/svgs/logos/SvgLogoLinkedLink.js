import * as React from 'react';

function SvgLogoLinkedLink(props) {
  return (
    <svg width={25} height={26} viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.055C0 1.37 1.345 0 3.002 0c1.656 0 3.001 1.369 3.002 3.055 0 1.687-1.345 3.084-3.002 3.084C1.345 6.14 0 4.742 0 3.055zm24.994 22.373v-.001H25V16.1c0-4.563-.966-8.077-6.21-8.077-2.52 0-4.212 1.407-4.902 2.74h-.073V8.45H8.843v16.977h5.177V17.02c0-2.213.412-4.353 3.107-4.353 2.655 0 2.695 2.526 2.695 4.495v8.266h5.172zM.413 8.452h5.183v16.976H.413V8.452z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgLogoLinkedLink;

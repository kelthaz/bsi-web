import * as React from 'react';

function SvgUnion(props) {
  return (
    <svg width={20} height={22} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.57 3.226a.806.806 0 011.197 0c.331.355.331.931 0 1.287l-8.478 9.11-1.997.777.784-2.048 8.493-9.126zm2.56-1.464c-1.083-1.164-2.84-1.164-3.923 0l-8.63 9.272-.137.147-.073.192-1.685 4.404c-.145.379-.069.814.195 1.11a.917.917 0 001.024.257L2.27 17h11.787a1 1 0 100-2H6.732l8.398-9.023c1.083-1.164 1.083-3.051 0-4.215z"
        fill="#AAA"
      />
    </svg>
  );
}

export default SvgUnion;

import * as React from 'react';

function SvgCheckText(props) {
  return (
    <svg width={100} height={100} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle opacity={0.5} cx={50} cy={50} r={50} fill="url(#prefix__paint0_linear)" />
      <path
        d="M37.863 39.032H61.63M37.952 50.458h16.25M37.952 61.395h11.375"
        stroke="#225AA7"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <path
        d="M49.746 77.118H28.904c-2.71 0-4.904-2.03-4.904-4.538V28.336c0-2.507 2.195-4.538 4.904-4.538h20.842"
        stroke="#81C1EA"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <path
        d="M35.883 23.798h34.734c2.694 0 4.875 2.03 4.875 4.538V72.58c0 2.508-2.181 4.538-4.875 4.538H49.898"
        stroke="#225AA7"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <path
        d="M58.125 59.638l9.242 8.203 18.485-19.043M17.152 7.5v13.419M13.158 14.209h7.99M13.158 14.209h7.99M85.192 77.644v13.42M81.198 84.355h7.99"
        stroke="#FFBE12"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={97.892}
          y1={-36.207}
          x2={64.924}
          y2={103.715}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#B5C8E9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgCheckText;

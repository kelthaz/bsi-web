const SvgAvatar = (props) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="#3A99E5" />
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="36" height="36">
      <circle cx="20.0001" cy="20" r="17.7778" fill="#2155A0" />
    </mask>
    <g mask="url(#mask0)">
      <circle cx="20.0001" cy="20" r="17.7778" fill="#2155A0" />
      <path
        d="M22.0558 23.5362C11.3891 24.8695 7.24098 32.6103 6.50024 36.314C59.278 67.4251 57.0558 7.42509 48.1669 15.2029C39.278 22.9806 35.3891 21.8695 22.0558 23.5362Z"
        fill="#FFC46B"
      />
      <path
        d="M24.2951 13.0711C31.2818 4.63377 29.0816 -3.83793 27.1081 -7.01911C-33.136 7.62772 9.36047 49.1907 10.6437 37.3684C11.9269 25.546 15.5616 23.6178 24.2951 13.0711Z"
        fill="#80C1EA"
      />
    </g>
  </svg>
);

export default SvgAvatar;

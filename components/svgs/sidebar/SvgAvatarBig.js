const SvgAvatarBig = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
    <circle cx="32" cy="32" r="32" fill="#3A99E5" />
    <mask id="maskAvatarBig" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="58" height="58">
      <circle cx="32.0004" cy="32.0001" r="28.4444" fill="#2155A0" />
    </mask>
    <g mask="url(#maskAvatarBig)">
      <circle cx="32.0004" cy="32.0001" r="28.4444" fill="#2155A0" />
      <path
        d="M44.8889 46.458C27.8222 48.5913 21.1852 60.9765 20 66.9025C104.444 116.68 100.889 20.6802 86.6667 33.1247C72.4444 45.5691 66.2222 43.7913 44.8889 46.458Z"
        fill="#FFC46B"
      />
      <path
        d="M38.8719 20.9137C50.0507 7.41398 46.5303 -6.14074 43.3727 -11.2306C-53.0179 12.2043 14.9765 78.7051 17.0296 59.7893C19.0828 40.8736 24.8984 37.7884 38.8719 20.9137Z"
        fill="#2155A0"
      />
    </g>
  </svg>
);

export default SvgAvatarBig;

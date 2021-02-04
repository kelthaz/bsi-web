const Avatar = (props) => (
  <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={20} cy={20} r={20} fill="#3A99E5" />
    <mask id="prefix__avatar" maskUnits="userSpaceOnUse" x={2} y={2} width={36} height={36}>
      <circle cx={20} cy={20} r={17.778} fill="#2155A0" />
    </mask>
    <g mask="url(#prefix__avatar)">
      <circle cx={20} cy={20} r={17.778} fill="#2155A0" />
      <path
        d="M22.056 23.536C11.389 24.87 7.24 32.61 6.5 36.314 59.278 67.425 57.056 7.425 48.167 15.203c-8.89 7.778-12.778 6.666-26.111 8.333z"
        fill="#FFC46B"
      />
      <path
        d="M24.295 13.071c6.987-8.437 4.787-16.909 2.813-20.09C-33.136 7.628 9.36 49.19 10.644 37.368c1.283-11.822 4.918-13.75 13.651-24.297z"
        fill="#80C1EA"
      />
    </g>
    <path
      d="M15.491 21.661l-1.32-3.765-1.32 3.765h2.64zm.78 2.235h-4.2l-.675 1.965H8.261l4.305-11.31h3.21l4.305 11.31h-3.135l-.675-1.965zm8.037-4.98h4.245v-4.365h2.94v11.31h-2.94v-4.665h-4.245v4.665h-2.94v-11.31h2.94v4.365z"
      fill="#fff"
    />
  </svg>
);

export default Avatar;

const SvgExpand = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M15 3H21V9" stroke="#F4F6F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 21H3L3 15" stroke="#F4F6F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    <path d="M9 15L3 21" stroke="#F4F6F9" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M9 15L3 21"
      stroke="#F4F6F9"
      strokeWidth="2"
      strokeLinecap="round"
      style={{ transform: 'translate(12px, -12px)' }}
    />
  </svg>
);

export default SvgExpand;

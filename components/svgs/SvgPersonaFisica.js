import * as React from 'react';

function SvgPersonaFisica(props) {
  return (
    <svg width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g opacity={0.8} strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M37.558 18.815a13.1 13.1 0 011.964 6.948c0 6.866-5.15 12.43-11.504 12.43-4.5 0-8.398-2.795-10.288-6.863"
          stroke="#225AA7"
        />
        <path
          d="M17.73 31.33a13.188 13.188 0 01-1.216-5.567c0-6.866 5.15-12.43 11.504-12.43 3.973 0 7.474 2.173 9.54 5.482"
          stroke="#81C1EA"
        />
        <path
          d="M19.037 66.336h19.735c14.916 1.024 14.026-6.284 14.026-6.284-.199-5.593-5.057-9.104-10.34-11.273"
          stroke="#225AA7"
        />
        <path
          d="M42.457 48.78c-8.637-3.545-18.465-3.545-27.106 0-5.283 2.168-10.142 5.679-10.34 11.272 0 0-.89 7.312 14.026 6.284M48.815 22.763H74.92M48.815 32.835H60.76"
          stroke="#81C1EA"
        />
        <path d="M48.815 42.908H73.11" stroke="#FFBE12" />
      </g>
    </svg>
  );
}

export default SvgPersonaFisica;

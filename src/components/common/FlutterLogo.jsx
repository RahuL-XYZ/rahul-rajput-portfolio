import React from 'react';

export default function FlutterLogo({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 166 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flutter-logo ${className}`}
      aria-label="Flutter Logo"
    >
      <defs>
        <linearGradient id="flutter-top" x1="166" y1="0" x2="0" y2="166" gradientUnits="userSpaceOnUse">
          <stop stopColor="#40C4FF" />
          <stop offset="1" stopColor="#0175C2" />
        </linearGradient>
        <linearGradient id="flutter-mid" x1="166" y1="99" x2="67" y2="198" gradientUnits="userSpaceOnUse">
          <stop stopColor="#40C4FF" />
          <stop offset="1" stopColor="#02569B" />
        </linearGradient>
        <linearGradient id="flutter-lower" x1="100" y1="135" x2="166" y2="201" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0175C2" />
          <stop offset="1" stopColor="#02569B" />
        </linearGradient>
      </defs>
      {/* Top Wing */}
      <path
        d="M166 0H103.7L0 103.7L38.9 142.6L166 15.5V0Z"
        fill="url(#flutter-top)"
      />
      {/* Lower Wing Inner */}
      <path
        d="M103.7 101.4L44.8 160.3L83.7 199.2L166 117.3V101.4H103.7Z"
        fill="url(#flutter-mid)"
      />
      {/* Lower Wing Outer Triangle */}
      <path
        d="M83.7 199.2L124.9 201.5L166 160.4L137.4 145.4L83.7 199.2Z"
        fill="url(#flutter-lower)"
      />
      {/* Highlight Corner */}
      <path
        d="M103.7 101.4L83.7 121.4L105.8 143.5L125.8 123.5L103.7 101.4Z"
        fill="#02569B"
        opacity="0.4"
      />
    </svg>
  );
}

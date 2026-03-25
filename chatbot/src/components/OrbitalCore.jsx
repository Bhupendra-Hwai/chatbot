export default function OrbitalCore() {
  const spokes = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <>
      <svg className="core-svg" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 55 10 A 45 45 0 0 1 95 38" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M 90 70 A 45 45 0 0 1 25 85" stroke="#9B59B6" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M 18 40 A 45 45 0 0 1 55 10" stroke="#00D4FF" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
      </svg>

      <svg className="spokes-svg" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="55" cy="55" r="20" fill="none" stroke="#00D4FF" strokeWidth="1" opacity="0.25" />
        {spokes.map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 55 + 22 * Math.cos(rad);
          const y1 = 55 + 22 * Math.sin(rad);
          const x2 = 55 + 38 * Math.cos(rad);
          const y2 = 55 + 38 * Math.sin(rad);

          return (
            <g key={angle}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00D4FF" strokeWidth="1.2" opacity="0.65" />
              <circle cx={x2} cy={y2} r="3" fill="#00D4FF" opacity="0.9" />
              <circle cx={x2} cy={y2} r="5.5" fill="none" stroke="#00D4FF" strokeWidth="0.8" opacity="0.35" />
            </g>
          );
        })}
      </svg>
    </>
  );
}

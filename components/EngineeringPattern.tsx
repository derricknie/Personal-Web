export function EngineeringPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 760"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="digital-grid" width="72" height="72" patternUnits="userSpaceOnUse">
          <path d="M72 0H0V72" stroke="#0071E3" strokeOpacity="0.07" strokeWidth="1" />
          <circle cx="0" cy="0" r="2" fill="#0071E3" fillOpacity="0.12" />
        </pattern>
        <linearGradient id="trace-fade" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#0071E3" stopOpacity="0" />
          <stop offset="0.48" stopColor="#0071E3" stopOpacity="0.16" />
          <stop offset="1" stopColor="#0071E3" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="760" fill="url(#digital-grid)" />
      <path d="M90 520H270V420H420V260H620" stroke="url(#trace-fade)" strokeWidth="2" />
      <path d="M820 110V230H1030V380H1140" stroke="url(#trace-fade)" strokeWidth="2" />
      <path d="M710 610H890V520H1010" stroke="url(#trace-fade)" strokeWidth="2" />
      {[270, 420, 620, 820, 1030, 890, 1010].map((cx, index) => (
        <circle key={cx} cx={cx} cy={[520, 420, 260, 110, 230, 610, 520][index]} r="4" fill="#0071E3" fillOpacity="0.12" />
      ))}
    </svg>
  );
}

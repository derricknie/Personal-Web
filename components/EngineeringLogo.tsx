type EngineeringLogoProps = {
  label: string;
  className?: string;
};

export function EngineeringLogo({ label, className = "" }: EngineeringLogoProps) {
  return (
    <svg
      aria-label={label}
      role="img"
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="42" height="42" rx="10" fill="#111827" />
      <path d="M15 14H26" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M15 24H24" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M15 34H27" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M15 14V34" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M30 34V14L38 34V14" stroke="#DCEBFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 24H31.5" stroke="#0071E3" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="31.5" cy="24" r="2" fill="#0071E3" />
      <circle cx="38" cy="14" r="1.8" fill="#69B7FF" />
      <circle cx="38" cy="34" r="1.8" fill="#69B7FF" />
    </svg>
  );
}

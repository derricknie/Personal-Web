import type { ProjectCategory } from "@/data/projects";

type CategoryIconProps = {
  category: ProjectCategory;
  className?: string;
};

const iconClass = "stroke-current";

export function CategoryIcon({ category, className = "h-5 w-5" }: CategoryIconProps) {
  const common = {
    "aria-hidden": true,
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (category) {
    case "IC & Analog Circuits":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="2" className={iconClass} strokeWidth="1.8" />
          <path d="M4 9H7M4 12H7M4 15H7M17 9H20M17 12H20M17 15H20M9 4V7M12 4V7M15 4V7M9 17V20M12 17V20M15 17V20" className={iconClass} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10 12H14" className={iconClass} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "Power Systems & Control":
      return (
        <svg {...common}>
          <path d="M5 17L12 5L19 17" className={iconClass} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 12H16M7 15H17M12 5V20" className={iconClass} strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="5" cy="17" r="1.6" fill="currentColor" />
          <circle cx="19" cy="17" r="1.6" fill="currentColor" />
        </svg>
      );
    case "AI & Software":
      return (
        <svg {...common}>
          <path d="M8 8L16 6M8 8L7 16M8 8L17 16M16 6L17 16M7 16L17 16" className={iconClass} strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="8" cy="8" r="2.2" className={iconClass} strokeWidth="1.8" />
          <circle cx="16" cy="6" r="2.2" className={iconClass} strokeWidth="1.8" />
          <circle cx="7" cy="16" r="2.2" className={iconClass} strokeWidth="1.8" />
          <circle cx="17" cy="16" r="2.2" className={iconClass} strokeWidth="1.8" />
        </svg>
      );
    case "Hardware Prototyping":
      return (
        <svg {...common}>
          <rect x="5" y="6" width="14" height="12" rx="2.5" className={iconClass} strokeWidth="1.8" />
          <path d="M8 10H12M8 14H10M14 14H16M14 10H16M12 10V14" className={iconClass} strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="8" cy="10" r="1" fill="currentColor" />
          <circle cx="16" cy="14" r="1" fill="currentColor" />
        </svg>
      );
    case "Engineering Design":
      return (
        <svg {...common}>
          <path d="M12 4L20 18H4L12 4Z" className={iconClass} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M12 8V18M8.5 18L12 12L15.5 18" className={iconClass} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.7" fill="currentColor" />
        </svg>
      );
  }
}

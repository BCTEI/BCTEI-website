interface GearIconProps {
  className?: string
}

export function GearIcon({ className }: GearIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M50 10 L55 10 L58 18 L65 15 L70 8 L75 12 L72 22 L80 28 L88 25 L90 32 L82 38 L85 48 L95 50 L95 56 L85 58 L82 68 L90 75 L85 82 L75 78 L68 85 L70 95 L62 95 L58 85 L48 88 L45 98 L38 95 L38 85 L28 80 L18 88 L12 82 L22 72 L15 62 L5 62 L5 55 L15 52 L12 42 L2 38 L5 30 L18 35 L25 25 L22 15 L30 12 L38 22 L48 18 L50 10Z" />
      <circle cx="50" cy="50" r="20" fill="white" />
    </svg>
  )
}

interface CircuitLinesProps {
  className?: string
}

export function CircuitLines({ className }: CircuitLinesProps) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main horizontal lines */}
      <path d="M0 30 L80 30 L100 50 L180 50" />
      <path d="M0 50 L60 50 L80 70 L180 70" />
      <path d="M0 70 L40 70 L60 90 L180 90" />
      
      {/* Connection nodes */}
      <circle cx="180" cy="50" r="8" fill="currentColor" />
      <circle cx="180" cy="70" r="6" fill="currentColor" />
      <circle cx="180" cy="90" r="5" fill="currentColor" />
      
      {/* Inner circles */}
      <circle cx="180" cy="50" r="4" fill="white" />
      <circle cx="180" cy="70" r="3" fill="white" />
      <circle cx="180" cy="90" r="2.5" fill="white" />
    </svg>
  )
}

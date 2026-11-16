type ArtProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Fuji({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 220 280" aria-hidden="true">
      <path d="M18 214c28-18 48-62 92-176 44 114 64 158 92 176" {...stroke} strokeWidth="1.6" />
      <path d="M78 118c14-24 50-24 64 0-14 2-24 16-32 16s-18-14-32-16Z" fill="currentColor" opacity="0.16" />
      <path d="M86 118c10-16 38-16 48 0" {...stroke} strokeWidth="1.2" />
      <path d="M24 196h172M18 228h184" {...stroke} strokeWidth="0.7" opacity="0.45" />
      <path d="M46 228c8-18 10-18 16 0M158 228c8-16 12-16 18 0" {...stroke} strokeWidth="1.1" />
      <path d="M34 150c18 4 22 4 34-2M150 146c16 6 24 4 36-4" {...stroke} strokeWidth="0.8" opacity="0.55" />
    </svg>
  );
}

export function Wave({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 240 200" aria-hidden="true">
      <path d="M6 126c28-42 52-42 78 0s52 42 80 0 46-28 70-8" {...stroke} strokeWidth="1.7" />
      <path d="M10 148c24-28 46-26 68 2s48 28 74 0 40-18 72 2" {...stroke} strokeWidth="1.2" />
      <path d="M18 168c22-16 40-14 58 4s40 16 62-2 34-10 58 6" {...stroke} strokeWidth="0.9" opacity="0.7" />
      <circle cx="62" cy="112" r="2.2" fill="currentColor" />
      <circle cx="148" cy="108" r="2.2" fill="currentColor" />
      <circle cx="196" cy="124" r="1.7" fill="currentColor" />
      <path d="M92 118c8 10 8 16 0 24M176 116c7 8 7 14 0 20" {...stroke} strokeWidth="1" />
    </svg>
  );
}

export function Cherry({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 220 280" aria-hidden="true">
      <path d="M28 262c18-70 8-120 48-156 34-30 62-18 86-58" {...stroke} strokeWidth="1.5" />
      <path d="M76 168c-24-8-28-28-8-36M118 132c20-18 38-8 42 12M150 92c22-6 34 8 28 24" {...stroke} strokeWidth="1.1" />
      {[
        [64, 150],
        [108, 118],
        [156, 78],
        [92, 196],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`} transform={`translate(${cx} ${cy})`}>
          <circle r="7" fill="currentColor" opacity="0.12" />
          <circle r="2" fill="currentColor" />
          <path d="M-6 -2c4-6 8-6 12 0M-5 4c4 5 8 5 12 0" {...stroke} strokeWidth="0.8" />
        </g>
      ))}
    </svg>
  );
}

export function Crane({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 200 250" aria-hidden="true">
      <path d="M78 150c-8 18-6 36 8 48 18 8 34-2 40-20" {...stroke} strokeWidth="1.5" />
      <path d="M86 78c2 24 8 46 18 62" {...stroke} strokeWidth="1.5" />
      <path d="M84 76c8-18 24-22 34-8" {...stroke} strokeWidth="1.4" />
      <path d="M116 70l14-6-8 10" {...stroke} strokeWidth="1.2" />
      <circle cx="96" cy="72" r="1.3" fill="currentColor" />
      <path d="M70 146c-28 10-46 4-58-16 20 2 34 10 46 24" {...stroke} strokeWidth="1.3" />
      <path d="M118 160c22 6 48 28 62 58" {...stroke} strokeWidth="1.3" />
      <path d="M92 198v28M108 196v30" {...stroke} strokeWidth="1.2" />
      <path d="M84 226h16M100 226h16" {...stroke} strokeWidth="1.2" />
    </svg>
  );
}

export function Bamboo({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 160 280" aria-hidden="true">
      {[48, 86, 122].map((x, index) => (
        <g key={x}>
          <path d={`M${x} 262 V${36 + index * 14}`} {...stroke} strokeWidth={index === 1 ? 1.7 : 1.25} />
          {[80, 130, 180, 228].map((y) => (
            <path key={y} d={`M${x - 7} ${y}h14`} {...stroke} strokeWidth="1" />
          ))}
        </g>
      ))}
      <path d="M86 78c18-16 34-14 48-2M86 92c-20-10-34-2-42 12M122 110c16-12 30-8 40 4" {...stroke} strokeWidth="1.15" />
    </svg>
  );
}

export function Pagoda({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 180 260" aria-hidden="true">
      <path d="M90 28v206" {...stroke} strokeWidth="1.1" />
      {[
        [70, 58, 110],
        [58, 98, 122],
        [46, 142, 134],
        [34, 188, 146],
      ].map(([left, y, right]) => (
        <path
          key={y}
          d={`M${left} ${y + 10} L90 ${y - 12} L${right} ${y + 10}`}
          {...stroke}
          strokeWidth="1.35"
        />
      ))}
      <path d="M72 234h36" {...stroke} strokeWidth="1.3" />
      <circle cx="90" cy="22" r="3" fill="currentColor" />
    </svg>
  );
}

export function Cloud({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 220 110" aria-hidden="true">
      <path
        d="M18 70c8-22 28-28 40-12 6-18 28-24 42-8 8-16 32-18 44 0 14-14 36-8 42 10 16 2 22 22 6 30H28c-12-4-16-12-10-20Z"
        {...stroke}
        strokeWidth="1.4"
      />
      <path d="M48 66c6 8 16 8 22-2M104 58c7 9 18 8 24-3" {...stroke} strokeWidth="1" />
    </svg>
  );
}

export function Plum({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 140 140" aria-hidden="true">
      <g transform="translate(70 70)">
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-26"
            rx="9"
            ry="16"
            transform={`rotate(${angle})`}
            fill="currentColor"
            opacity="0.12"
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
        <circle r="4" fill="currentColor" />
      </g>
    </svg>
  );
}

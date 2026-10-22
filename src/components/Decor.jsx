export const Kayak = () => (
  <svg viewBox="0 0 120 50" width="110">
    <path d="M4 30 Q60 -4 116 22 Q60 44 4 30Z" fill="#f5c518" />
    <ellipse cx="60" cy="25" rx="12" ry="6" fill="#3b2a00" />
    <path d="M30 8 L90 40" stroke="#333" strokeWidth="3" />
  </svg>
)

export const Splash = () => (
  <svg viewBox="0 0 100 100" width="80">
    <defs>
      <linearGradient id="sp" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" stopColor="#bfefff" stopOpacity=".25" />
        <stop offset=".5" stopColor="#eaf9ff" stopOpacity=".9" />
        <stop offset="1" stopColor="#fff" />
      </linearGradient>
    </defs>
    <path
      d="M8 96 C10 70 4 52 16 30 C20 46 26 56 28 70 C30 46 34 26 48 6 C50 30 50 48 44 72 C54 54 64 40 82 32 C72 50 64 64 60 90Z"
      fill="url(#sp)"
    />
    <path d="M28 90 C30 66 38 44 56 24 C52 48 48 68 46 90Z" fill="#fff" opacity=".45" />
    <g fill="#fff">
      <circle cx="70" cy="14" r="3" />
      <circle cx="84" cy="22" r="2.2" />
      <circle cx="60" cy="6" r="1.8" />
      <circle cx="92" cy="40" r="2.6" />
      <circle cx="34" cy="8" r="2" />
      <circle cx="14" cy="14" r="1.6" />
      <circle cx="78" cy="52" r="1.8" />
    </g>
  </svg>
)

export const Rock = ({ light = '#8a8f74', dark = '#6b6f5a' }) => (
  <svg viewBox="0 0 50 40" width="44">
    <path d="M3 34 L10 12 L26 4 L42 14 L47 34Z" fill={dark} />
    <path d="M10 12 L26 4 L24 20Z" fill={light} />
  </svg>
)

export const MossRock = () => <Rock dark="#4d5a3a" light="#6d7d4e" />

export const Tent = () => (
  <svg viewBox="0 0 100 80" width="100">
    <path d="M5 72 L50 6 L95 72Z" fill="#cfd3da" />
    <path d="M50 6 L95 72 L62 72Z" fill="#9aa0ab" />
    <path d="M50 6 L38 72 L62 72Z" fill="#2a2f45" />
    <path d="M5 72 L50 6 L95 72" stroke="#f97316" strokeWidth="5" fill="none" />
  </svg>
)

export const Tree = () => (
  <svg viewBox="0 0 70 90" width="64">
    <rect x="31" y="66" width="8" height="22" fill="#5b3a1e" />
    <path d="M35 4 L58 36 H12Z" fill="#1f5a2a" />
    <path d="M35 22 L63 56 H7Z" fill="#26743a" />
    <path d="M35 40 L67 74 H3Z" fill="#2f8d47" />
  </svg>
)

// p1, p2, p3 slots for each destination
export const DECOR = {
  kayaking: [Kayak, Splash, Rock],
  camping: [Tent, Tree, MossRock],
}
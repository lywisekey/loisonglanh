/**
 * Khiên xanh với chiếc lá trắng — dấu nhận diện của trang.
 *
 * Lá gồm hai thùy tách nhau một khe hẹp; khe đó để lộ nền khiên và thành ra
 * gân chính. Thùy phải vươn cao chạm mép trên của khiên, đúng như bản gốc.
 *
 * `id` phải khác nhau giữa các lần dùng trên cùng một trang, vì gradient
 * được tham chiếu qua id.
 */
export function Logo({ height = 42, id = "lg" }: { height?: number; id?: string }) {
  const grad = `${id}-grad`;

  return (
    <svg
      width={(height * 56) / 64}
      height={height}
      viewBox="0 0 56 64"
      fill="none"
      role="img"
      aria-label="Lối sống lành — khiên và lá"
      style={{ flex: "none" }}
    >
      <defs>
        <linearGradient id={grad} x1="12" y1="4" x2="44" y2="61" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8cc63f" />
          <stop offset="0.5" stopColor="#56ac3d" />
          <stop offset="1" stopColor="#2b8b3d" />
        </linearGradient>
      </defs>

      {/* Khiên */}
      <path d="M7.2 5.8C7.25 4.55 8.35 3.85 9.65 3.8C21.8 3.35 34.2 3.35 46.35 3.8C47.65 3.85 48.75 4.55 48.8 5.8C49.7 12 51.65 22 51.65 32.5C51.65 41 48 46.5 43 50.5C37.5 54.9 33.5 58.6 28.4 61.2C28.25 61.3 27.75 61.3 27.6 61.2C22.5 58.6 18.5 54.9 13 50.5C8 46.5 4.35 41 4.35 32.5C4.35 22 6.3 12 7.2 5.8Z" fill={`url(#${grad})`} />

      {/* Thùy trái của lá */}
      <path d="M27.4 54.5C22.2 50 19.4 43.2 19 35C18.6 26.6 21.8 19.8 27.4 15.4Z" fill="#ffffff" />

      {/* Thùy phải — vươn lên chạm mép trên của khiên */}
      <path d="M28.6 54.5C33.8 50 36.6 43.4 37 35.2C37.4 26 36.6 13 34.9 3.48C32.6 3.37 30.6 3.35 28.6 3.37Z" fill="#ffffff" />

      {/* Gân phụ — ngắn, nghiêng lên và ra ngoài, không chạm mép lá */}
      <g stroke={`url(#${grad})`} strokeWidth="1.7" strokeLinecap="round">
        <path d="M26.5 47.5L21.6 43.6" />
        <path d="M26.5 41L21 36.6" />
        <path d="M26.5 34.5L20.7 30.1" />
        <path d="M26.5 28L21.2 23.8" />
        <path d="M26.5 21.5L22.8 18.2" />
        <path d="M29.5 47.5L34.4 43.6" />
        <path d="M29.5 41L35 36.6" />
        <path d="M29.5 34.5L35.3 30.1" />
        <path d="M29.5 28L34.8 23.8" />
        <path d="M29.5 21.5L33.2 17.8" />
        <path d="M29.5 15L32.8 11" />
      </g>
    </svg>
  );
}

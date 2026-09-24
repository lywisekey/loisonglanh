/** Icon nét 24×24 — nhận thẳng đường `d` từ lib/icons. */
export function Icon({
  d,
  size = 24,
  stroke = "currentColor",
  ...rest
}: {
  d: string | string[];
  size?: number;
  stroke?: string;
} & Omit<React.SVGProps<SVGSVGElement>, "d" | "stroke">) {
  const paths = Array.isArray(d) ? d : [d];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

export const ICON_SEARCH = ["M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z", "M16.5 16.5L21 21"];
export const ICON_MENU = ["M4 7h16", "M4 12h16", "M4 17h16"];
export const ICON_CLOSE = ["M6 6l12 12", "M18 6L6 18"];
export const ICON_CHEVRON = "M9 6l6 6-6 6";
export const ICON_WARN = ["M12 4l9 16H3L12 4Z", "M12 10v4", "M12 17h.01"];
export const ICON_PLAY = [
  "M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8Z",
  "M11 9l4 3-4 3V9Z",
];
export const ICON_SPROUT = [
  "M12 21V11",
  "M12 11C7 11 5 8 5 5c3 0 7 2 7 6 0-4 4-6 7-6 0 3-2 6-7 6Z",
];
export const ICON_PHONE_OFF = ["M9 3h6v18H9V3Z", "M4 4l16 16"];
export const ICON_BED = ["M3 18v-8h12a5 5 0 0 1 5 5v3", "M3 14h17", "M3 18V6"];

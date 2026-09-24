/** Đường path SVG 24×24 dùng chung cho toàn trang (stroke, không fill). */
export const IC = {
  leaf: "M4 20c0-8 6-14 16-15 1 10-5 16-13 16H4Z",
  sprout: "M12 21V11M12 11C7 11 5 8 5 5c3 0 7 2 7 6 0-4 4-6 7-6 0 3-2 6-7 6Z",
  pulse: "M3 12h4l3-8 4 16 3-8h4",
  bed: "M3 18v-8h12a5 5 0 0 1 5 5v3M3 14h17M3 18V6",
  moon: "M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z",
  bowl: "M4 11h16a8 8 0 0 1-16 0ZM8 7c0-1.5 1-2 1-3M12 7c0-1.5 1-2 1-3M16 7c0-1.5 1-2 1-3",
  droplet: "M12 3c4 5 6 7.5 6 10a6 6 0 0 1-12 0c0-2.5 2-5 6-10Z",
  cup: "M5 8h11v5a5 5 0 0 1-10 0V8ZM16 9h2a2 2 0 0 1 0 4h-2M4 21h14",
  citrus: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM12 4v16M4 12h16",
  jar: "M8 4h8M7 8h10v10a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V8ZM7 12h10",
  fish: "M3 12c4-5 10-6 14-3 2 1.5 3 3 4 3-1 0-2 1.5-4 3-4 3-10 2-14-3ZM20 9l-3 3 3 3",
  plate: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  banana: "M4 15c6 6 15 3 16-6-3 4-6 4-9 2-2 4-4 5-7 4Z",
  sugarOff: "M6 7h11v11H6ZM4 4l16 16",
  salt: "M12 3v18M3 12h18M6 6l12 12M18 6L6 18",
  tooth:
    "M8 3c2 0 2 1 4 1s2-1 4-1c2 0 3 2 3 5 0 4-2 5-2 9 0 2-1 4-2 4s-2-2-2-5-1-3-1-3-1 0-1 3-1 5-2 5-2-2-2-4c0-4-2-5-2-9 0-3 1-5 3-5Z",
  phoneOff: "M9 3h6v18H9ZM4 4l16 16",
  foot: "M9 4a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3ZM6 17h6v2a3 3 0 0 1-6 0Z",
} as const;

/** Biểu tượng cho các tiêu đề mục — mỗi phần của bài có một dấu hiệu riêng. */
export const IC_UI = {
  summary: ["M7 3h8l5 5v13H7V3Z", "M15 3v5h5", "M10 13h7", "M10 17h5"],
  steps: ["M4 6h2", "M4 12h2", "M4 18h2", "M10 6h10", "M10 12h10", "M10 18h10"],
  usage: ["M5 8h11v5a5 5 0 0 1-10 0V8Z", "M16 9h2a2 2 0 0 1 0 4h-2", "M4 21h14"],
  related: ["M4 5h7v6H4V5Z", "M13 5h7v6h-7V5Z", "M4 13h7v6H4v-6Z", "M13 13h7v6h-7v-6Z"],
  check: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z", "M8 12.4l2.8 2.8L16.2 9.8"],
  clock: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z", "M12 7v5.2l3.6 2.1"],
  tag: ["M11 3H4v7l10 10 7-7L11 3Z", "M7.5 7.5h.01"],
} as const;

export type UiIconName = keyof typeof IC_UI;

export type IconName = keyof typeof IC;

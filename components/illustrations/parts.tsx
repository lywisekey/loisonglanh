/**
 * Bộ dựng hình cho tranh minh hoạ.
 *
 * Mọi tranh vẽ trên khung 400×300 và dùng chung một ít "đạo cụ" ở đây, nên
 * 22 cảnh giữ được cùng một nét. Màu lấy từ biến CSS của hệ thiết kế, đổi
 * bảng màu là tranh đổi theo.
 */

export const C = {
  wallGreen: "var(--color-accent-100)",
  wallWarm: "var(--lg-clay-100)",
  wallNight: "var(--color-neutral-800)",
  cream: "var(--color-surface)",
  wood: "var(--lg-clay-300)",
  woodDark: "var(--lg-clay-700)",
  clay: "var(--lg-clay-200)",
  clayMid: "#d99a6c",
  green1: "var(--color-accent-200)",
  green2: "var(--color-accent-400)",
  green3: "var(--color-accent-600)",
  green4: "var(--color-accent-800)",
  honey: "#e3b558",
  honeyPale: "var(--lg-honey-100)",
  honeyMid: "var(--lg-honey-300)",
  ink: "var(--color-neutral-800)",
  night: "var(--color-neutral-900)",
  white: "#fffdf8",
} as const;

type P = { x?: number; y?: number; s?: number };
const at = ({ x = 0, y = 0, s = 1 }: P) => `translate(${x} ${y}) scale(${s})`;

/* ── Nền ──────────────────────────────────────────────────────────────── */

export function Backdrop({ tone = "green" }: { tone?: "green" | "warm" | "night" }) {
  const wall = tone === "night" ? C.wallNight : tone === "warm" ? C.wallWarm : C.wallGreen;
  return (
    <>
      <rect width="400" height="300" fill={wall} />
      <circle cx="322" cy="66" r="52" fill={C.white} opacity={tone === "night" ? 0.12 : 0.55} />
    </>
  );
}

/** Mặt bàn gỗ chạy hết chiều ngang. */
export function Table({ y = 214 }: { y?: number }) {
  return (
    <>
      <rect x="0" y={y} width="400" height={300 - y} fill={C.wood} />
      <rect x="0" y={y} width="400" height="7" fill={C.woodDark} opacity="0.35" />
    </>
  );
}

/* ── Đạo cụ ───────────────────────────────────────────────────────────── */

/** Lọ thuỷ tinh có nắp; `fill` là phần ngâm bên trong. */
export function Jar({ x = 0, y = 0, s = 1, fill = C.honey, contents }: P & { fill?: string; contents?: React.ReactNode }) {
  return (
    <g transform={at({ x, y, s })}>
      <rect x="-26" y="-74" width="52" height="12" rx="4" fill={C.woodDark} />
      <rect x="-31" y="-64" width="62" height="64" rx="12" fill={C.white} />
      <path d="M-31 -34h62v22a12 12 0 0 1-12 12h-38a12 12 0 0 1-12-12v-22Z" fill={fill} />
      <rect x="-31" y="-64" width="62" height="64" rx="12" fill="none" stroke={C.ink} strokeWidth="2.5" opacity="0.35" />
      {contents}
    </g>
  );
}

/** Bát/tô. */
export function Bowl({ x = 0, y = 0, s = 1, fill = C.cream, food }: P & { fill?: string; food?: string }) {
  return (
    <g transform={at({ x, y, s })}>
      {food && <ellipse cx="0" cy="-16" rx="30" ry="9" fill={food} />}
      <path d="M-36 -16h72a36 36 0 0 1-72 0Z" fill={fill} />
      <path d="M-36 -16h72" stroke={C.ink} strokeWidth="2.5" opacity="0.28" />
    </g>
  );
}

/** Chén có quai và đĩa lót. */
export function Cup({ x = 0, y = 0, s = 1, fill = C.green2 }: P & { fill?: string }) {
  return (
    <g transform={at({ x, y, s })}>
      <ellipse cx="0" cy="2" rx="30" ry="6" fill={C.white} />
      <path d="M-20 -30h40v16a20 20 0 0 1-40 0v-16Z" fill={C.white} />
      <ellipse cx="0" cy="-30" rx="20" ry="6" fill={fill} />
      <path d="M20 -24h6a9 9 0 0 1 0 18h-6" fill="none" stroke={C.white} strokeWidth="6" />
    </g>
  );
}

/** Ấm trà. */
export function Teapot({ x = 0, y = 0, s = 1 }: P) {
  return (
    <g transform={at({ x, y, s })}>
      <path d="M-34 -34h68v14c0 20-15 34-34 34s-34-14-34-34v-14Z" fill={C.green3} />
      <path d="M34 -28h8a14 14 0 0 1 0 28h-8" fill="none" stroke={C.green3} strokeWidth="8" />
      <path d="M-34 -30c-12-2-20-9-23-18" fill="none" stroke={C.green3} strokeWidth="8" strokeLinecap="round" />
      <rect x="-40" y="-40" width="80" height="9" rx="4.5" fill={C.green4} />
      <circle cx="0" cy="-46" r="6" fill={C.green4} />
    </g>
  );
}

/** Chậu rộng (tắm, rửa mặt, ngâm chân). */
export function Basin({ x = 0, y = 0, s = 1, water = C.green1 }: P & { water?: string }) {
  return (
    <g transform={at({ x, y, s })}>
      <path d="M-56 -24h112l-10 38a10 10 0 0 1-10 8h-72a10 10 0 0 1-10-8l-10-38Z" fill={C.clayMid} />
      <ellipse cx="0" cy="-24" rx="56" ry="13" fill={water} />
      <ellipse cx="0" cy="-24" rx="56" ry="13" fill="none" stroke={C.ink} strokeWidth="2.5" opacity="0.25" />
    </g>
  );
}

/** Rổ tre. */
export function Basket({ x = 0, y = 0, s = 1, contents, overlay }: P & { contents?: React.ReactNode; overlay?: React.ReactNode }) {
  return (
    <g transform={at({ x, y, s })}>
      {contents}
      <ellipse cx="0" cy="-18" rx="52" ry="11" fill={C.woodDark} opacity="0.25" />
      <path d="M-52 -18h104l-9 34a10 10 0 0 1-10 8h-66a10 10 0 0 1-10-8l-9-34Z" fill={C.honeyMid} />
      <path d="M-46 0h92M-49 -9h98" stroke={C.woodDark} strokeWidth="3" opacity="0.4" />
      <path d="M-52 -18h104" stroke={C.woodDark} strokeWidth="4" opacity="0.5" />
      {/* đồ nằm gác lên miệng rổ, vẽ sau thân rổ nên không bị che */}
      {overlay}
    </g>
  );
}

/** Đĩa nhìn nghiêng. */
export function Plate({ x = 0, y = 0, s = 1, food }: P & { food?: React.ReactNode }) {
  return (
    <g transform={at({ x, y, s })}>
      <ellipse cx="0" cy="0" rx="50" ry="15" fill={C.white} />
      <ellipse cx="0" cy="-3" rx="38" ry="11" fill={C.cream} />
      {food}
    </g>
  );
}

/** Quả tròn (chanh, mơ…). */
export function Fruit({ x = 0, y = 0, s = 1, fill = C.green2, half = false }: P & { fill?: string; half?: boolean }) {
  return (
    <g transform={at({ x, y, s })}>
      <circle cx="0" cy="0" r="17" fill={fill} />
      {half && (
        <>
          <circle cx="0" cy="0" r="12" fill={C.white} opacity="0.75" />
          <path d="M0 -12v24M-12 0h24M-8.5 -8.5l17 17M8.5 -8.5l-17 17" stroke={fill} strokeWidth="2.2" />
        </>
      )}
    </g>
  );
}

/** Lá đơn. */
export function Leaf({ x = 0, y = 0, s = 1, fill = C.green3, rot = 0 }: P & { fill?: string; rot?: number }) {
  return (
    <g transform={`${at({ x, y, s })} rotate(${rot})`}>
      <path d="M0 0c0-16 12-28 30-30 2 20-10 30-26 30H0Z" fill={fill} />
      <path d="M2 -1c8-8 18-16 26-20" stroke={C.white} strokeWidth="2" opacity="0.55" fill="none" />
    </g>
  );
}

/** Củ gừng. */
export function Ginger({ x = 0, y = 0, s = 1 }: P) {
  return (
    <g transform={at({ x, y, s })}>
      <path d="M-20 0c-8-6-6-16 3-17 4-10 16-10 20-2 10-1 15 8 9 15-3 7-13 9-19 5-5 3-11 2-13-1Z" fill={C.honeyMid} />
      <path d="M-6 -12c3 3 8 4 12 2" stroke={C.woodDark} strokeWidth="2" opacity="0.45" fill="none" />
    </g>
  );
}

/** Thìa gỗ. */
export function Spoon({ x = 0, y = 0, s = 1, rot = 0 }: P & { rot?: number }) {
  return (
    <g transform={`${at({ x, y, s })} rotate(${rot})`}>
      <rect x="-3" y="-4" width="46" height="7" rx="3.5" fill={C.wood} />
      <ellipse cx="-12" cy="0" rx="14" ry="10" fill={C.woodDark} />
    </g>
  );
}

/** Hơi nước bốc lên. */
export function Steam({ x = 0, y = 0, s = 1 }: P) {
  return (
    <g transform={at({ x, y, s })} fill="none" stroke={C.white} strokeWidth="5" strokeLinecap="round" opacity="0.8">
      <path d="M-14 0c0-8 6-9 6-17s-6-9-6-17" />
      <path d="M0 4c0-9 6-10 6-19s-6-10-6-19" />
      <path d="M14 0c0-8 6-9 6-17s-6-9-6-17" />
    </g>
  );
}

/** Mặt trời / vầng sáng sớm. */
export function Sun({ x = 0, y = 0, s = 1, fill = C.honey }: P & { fill?: string }) {
  return (
    <g transform={at({ x, y, s })}>
      <circle cx="0" cy="0" r="26" fill={fill} />
      <g stroke={fill} strokeWidth="5" strokeLinecap="round">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <line key={a} x1="0" y1="-38" x2="0" y2="-46" transform={`rotate(${a})`} />
        ))}
      </g>
    </g>
  );
}

/** Cốc thuỷ tinh có nước. */
export function Glass({ x = 0, y = 0, s = 1, fill = C.honeyMid }: P & { fill?: string }) {
  return (
    <g transform={at({ x, y, s })}>
      <path d="M-18 -52h36l-4 48a8 8 0 0 1-8 7h-12a8 8 0 0 1-8-7l-4-48Z" fill={C.white} />
      <path d="M-15.5 -32h31l-2.5 28a8 8 0 0 1-8 7h-10a8 8 0 0 1-8-7l-2.5-28Z" fill={fill} />
      <path d="M-18 -52h36" stroke={C.ink} strokeWidth="2.5" opacity="0.3" />
    </g>
  );
}

/** Giường nhìn nghiêng. */
export function Bed({ x = 0, y = 0, s = 1 }: P) {
  return (
    <g transform={at({ x, y, s })}>
      <rect x="-118" y="-78" width="30" height="78" rx="9" fill={C.woodDark} />
      <rect x="96" y="-40" width="24" height="40" rx="7" fill={C.woodDark} />
      <rect x="-110" y="-34" width="220" height="32" rx="10" fill={C.white} />
      <path d="M-16 -34h126v18a12 12 0 0 1-12 12H-16V-34Z" fill={C.green2} />
      <path d="M-16 -34h126v9H-16z" fill={C.green3} opacity="0.5" />
      <rect x="-98" y="-54" width="70" height="24" rx="11" fill={C.cream} />
      <rect x="-92" y="-62" width="58" height="20" rx="9" fill={C.white} />
    </g>
  );
}

/** Khung cửa sổ; `sky` là mảng trời nhìn qua ô. */
export function Window({ x = 0, y = 0, s = 1, sky = C.honeyPale, children }: P & { sky?: string; children?: React.ReactNode }) {
  return (
    <g transform={at({ x, y, s })}>
      <rect x="-74" y="-100" width="148" height="140" rx="10" fill={C.woodDark} />
      <rect x="-64" y="-90" width="128" height="120" rx="5" fill={sky} />
      {children}
      <rect x="-5" y="-90" width="10" height="120" fill={C.woodDark} />
      <rect x="-64" y="-35" width="128" height="9" fill={C.woodDark} />
    </g>
  );
}

/** Khăn bông vắt trên móc. */
export function Towel({ x = 0, y = 0, s = 1, fill = C.cream }: P & { fill?: string }) {
  return (
    <g transform={at({ x, y, s })}>
      <rect x="-44" y="-8" width="88" height="8" rx="4" fill={C.woodDark} />
      <rect x="-40" y="-20" width="7" height="14" rx="3" fill={C.woodDark} />
      <rect x="33" y="-20" width="7" height="14" rx="3" fill={C.woodDark} />
      <path d="M-26 0h52v58a7 7 0 0 1-7 7h-38a7 7 0 0 1-7-7V0Z" fill={fill} />
      <path d="M-26 18h52M-26 30h52" stroke={C.woodDark} strokeWidth="2.5" opacity="0.28" />
    </g>
  );
}

/** Đèn bàn ánh vàng ấm. */
export function Lamp({ x = 0, y = 0, s = 1 }: P) {
  return (
    <g transform={at({ x, y, s })}>
      <ellipse cx="0" cy="24" rx="46" ry="26" fill={C.honey} opacity="0.3" />
      <rect x="-3" y="-30" width="6" height="54" fill={C.woodDark} />
      <ellipse cx="0" cy="24" rx="20" ry="6" fill={C.woodDark} />
      <path d="M-26 -30h52l-10-26h-32l-10 26Z" fill={C.honey} />
    </g>
  );
}

/** Màn hình đã tắt (điện thoại hoặc tivi). */
export function Screen({ x = 0, y = 0, s = 1, w = 50, h = 84 }: P & { w?: number; h?: number }) {
  return (
    <g transform={at({ x, y, s })}>
      <rect x={-w / 2} y={-h} width={w} height={h} rx="8" fill={C.night} />
      <rect x={-w / 2 + 5} y={-h + 7} width={w - 10} height={h - 16} rx="3" fill={C.wallNight} />
    </g>
  );
}

/** Cá. */
export function Fish({ x = 0, y = 0, s = 1, rot = 0 }: P & { rot?: number }) {
  return (
    <g transform={`${at({ x, y, s })} rotate(${rot})`}>
      <path d="M-34 0c12-15 32-18 46-9 6 4 9 9 12 9-3 0-6 5-12 9-14 9-34 6-46-9Z" fill={C.green1} />
      <path d="M24 -9l-9 9 9 9" fill="none" stroke={C.green3} strokeWidth="3" />
      <circle cx="-20" cy="-3" r="2.6" fill={C.ink} />
    </g>
  );
}

/** Tôm / tép. */
export function Shrimp({ x = 0, y = 0, s = 1, rot = 0 }: P & { rot?: number }) {
  return (
    <g transform={`${at({ x, y, s })} rotate(${rot})`}>
      <path d="M-16 4c-6-12 2-22 14-22 10 0 16 6 16 14 0 6-4 10-9 10" fill="none" stroke={C.clayMid} strokeWidth="9" strokeLinecap="round" />
      <path d="M-16 4l-8 6" stroke={C.clayMid} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
}

/** Nải chuối. */
export function Bananas({ x = 0, y = 0, s = 1 }: P) {
  return (
    <g transform={at({ x, y, s })}>
      {[-14, 0, 14].map((dx, i) => (
        <g key={dx} transform={`translate(${dx} ${-Math.abs(i - 1) * 5}) rotate(${dx * 0.7})`}>
          <path
            d="M-22 -14c-3 16 6 30 20 32 5 1 8-3 6-7-9-3-15-12-16-24-1-4-9-5-10-1Z"
            fill={i === 1 ? C.honey : C.honeyMid}
          />
          <path d="M-22 -14c-1-5 3-8 7-6" stroke={C.woodDark} strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
      ))}
    </g>
  );
}

/** Bông hoa nhỏ. */
export function Flower({ x = 0, y = 0, s = 1, fill = C.honeyPale }: P & { fill?: string }) {
  return (
    <g transform={at({ x, y, s })}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy="-8" rx="4.5" ry="8" fill={fill} transform={`rotate(${a})`} />
      ))}
      <circle cx="0" cy="0" r="4" fill={C.honey} />
    </g>
  );
}

/** Đôi đũa. */
export function Chopsticks({ x = 0, y = 0, s = 1, rot = -18 }: P & { rot?: number }) {
  return (
    <g transform={`${at({ x, y, s })} rotate(${rot})`}>
      <rect x="-34" y="-3" width="68" height="4" rx="2" fill={C.woodDark} />
      <rect x="-34" y="4" width="68" height="4" rx="2" fill={C.woodDark} />
    </g>
  );
}

/** Tấm vải mộc trải dưới đồ vật. */
export function Cloth({ x = 0, y = 0, s = 1, fill = C.cream }: P & { fill?: string }) {
  return (
    <g transform={at({ x, y, s })}>
      <path d="M-96 -7q96 -9 192 0l-8 13q-88 -7 -176 0L-96 -7Z" fill={fill} />
      <path d="M-84 0q84 -7 168 0" stroke={C.woodDark} strokeWidth="2" opacity="0.18" fill="none" />
    </g>
  );
}

import { C } from "./parts";

/**
 * Biểu tượng nội dung vẽ dạng tranh phẳng, cùng nét với tranh minh hoạ.
 *
 * Khung 48×48, nền trong suốt — vòng tròn màu phía sau do lớp .icon-badge lo.
 * Vì vậy màu ở đây phải đọc được trên cả nền đất nung nhạt lẫn nền xanh nhạt,
 * nên tránh dùng màu quá sáng.
 */
const SPOTS: Record<string, React.ReactNode> = {

  /* Vận động — người dang tay, dễ hiểu hơn đường nhịp tim */
  pulse: (
    <>
      <circle cx="24" cy="11" r="6" fill={C.green4} />
      <g stroke={C.green3} strokeWidth="5.5" strokeLinecap="round" fill="none">
        <path d="M24 19v11" />
        <path d="M10 17l14 6 14-6" />
        <path d="M24 30l-8 12M24 30l8 12" />
      </g>
    </>
  ),

  bed: (
    <>
      <rect x="5" y="13" width="6" height="25" rx="2.5" fill={C.woodDark} />
      <rect x="39" y="24" width="5" height="14" rx="2.5" fill={C.woodDark} />
      <rect x="5" y="26" width="39" height="8" rx="3.5" fill={C.white} stroke={C.ink} strokeWidth="1.8" strokeOpacity="0.25" />
      <path d="M23 26h21v4.5a3.5 3.5 0 0 1-3.5 3.5H23V26Z" fill={C.green3} />
      <rect x="10" y="19" width="13" height="8" rx="3.5" fill={C.cream} />
    </>
  ),

  leaf: (
    <>
      <path d="M11 37c-2-16 8-27 26-28 2 18-9 28-23 28h-3Z" fill={C.green3} />
      <path d="M14 35c6-8 14-15 21-19" stroke={C.white} strokeWidth="3" strokeLinecap="round" fill="none" />
    </>
  ),

  sprout: (
    <>
      <path d="M24 42V22" stroke={C.green4} strokeWidth="4.5" strokeLinecap="round" />
      <path d="M24 24c-10 0-14-6-14-12 7 0 14 5 14 12Z" fill={C.green3} />
      <path d="M24 24c10 0 14-6 14-12-7 0-14 5-14 12Z" fill={C.green2} />
    </>
  ),

  moon: (
    <>
      <path d="M33 7a17 17 0 1 0 7 28 14 14 0 0 1-7-28Z" fill={C.green4} />
      <path d="M13 12l1.6 4.4L19 18l-4.4 1.6L13 24l-1.6-4.4L7 18l4.4-1.6L13 12Z" fill={C.honey} />
    </>
  ),

  bowl: (
    <>
      <g stroke={C.white} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.9">
        <path d="M19 14c0-3 2-4 2-6" />
        <path d="M27 14c0-3 2-4 2-6" />
      </g>
      <ellipse cx="24" cy="26" rx="13" ry="5" fill={C.cream} />
      <path d="M8 26h32a16 16 0 0 1-32 0Z" fill={C.green3} />
    </>
  ),

  droplet: (
    <>
      <path d="M24 6c8 11 13 16 13 21a13 13 0 0 1-26 0c0-5 5-10 13-21Z" fill={C.green3} />
      <path d="M18 28a6 6 0 0 0 4 6" stroke={C.white} strokeWidth="3" strokeLinecap="round" fill="none" />
    </>
  ),

  cup: (
    <>
      <path d="M19 6c0 3-2 4-2 6M27 6c0 3-2 4-2 6" stroke={C.white} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.9" />
      <ellipse cx="23" cy="39" rx="17" ry="4" fill={C.white} stroke={C.ink} strokeWidth="1.8" strokeOpacity="0.28" />
      <path d="M11 16h24v10a12 12 0 0 1-24 0V16Z" fill={C.green3} />
      <path d="M35 19h3a6 6 0 0 1 0 12h-3" fill="none" stroke={C.green3} strokeWidth="4.5" />
    </>
  ),

  citrus: (
    <>
      <circle cx="24" cy="24" r="17" fill={C.green3} />
      <circle cx="24" cy="24" r="12.5" fill={C.white} />
      <g stroke={C.green3} strokeWidth="2.6">
        <path d="M24 11.5v25M11.5 24h25M15 15l18 18M33 15L15 33" />
      </g>
    </>
  ),

  jar: (
    <>
      <rect x="15" y="6" width="18" height="6" rx="2.5" fill={C.woodDark} />
      <rect x="11" y="11" width="26" height="31" rx="7" fill={C.white} />
      <path d="M11 26h26v9a7 7 0 0 1-7 7H18a7 7 0 0 1-7-7v-9Z" fill={C.honey} />
      <rect x="11" y="11" width="26" height="31" rx="7" fill="none" stroke={C.ink} strokeWidth="2.2" opacity="0.35" />
    </>
  ),

  fish: (
    <>
      <path d="M6 24c8-11 22-13 32-6 4 3 6 6 8 6-2 0-4 3-8 6-10 7-24 5-32-6Z" fill={C.green2} />
      <path d="M35 18l-6 6 6 6" fill="none" stroke={C.green4} strokeWidth="3" />
      <circle cx="14" cy="21" r="2.6" fill={C.green4} />
    </>
  ),

  plate: (
    <>
      <ellipse cx="24" cy="28" rx="19" ry="9" fill={C.white} stroke={C.ink} strokeWidth="2" strokeOpacity="0.3" />
      <ellipse cx="24" cy="26" rx="14" ry="6.5" fill={C.cream} />
      <ellipse cx="18" cy="24" rx="6" ry="3.4" fill={C.white} stroke={C.honeyMid} strokeWidth="1.8" />
      <ellipse cx="29" cy="26" rx="6" ry="3.4" fill={C.white} stroke={C.honeyMid} strokeWidth="1.8" />
    </>
  ),

  banana: (
    <>
      {[-6, 5].map((dx, i) => (
        <g key={dx} transform={`translate(${24 + dx} ${26 + i * 3}) rotate(${dx * 1.6})`}>
          <path d="M-11-9c-2 11 4 19 13 21 3 1 5-2 3-5-6-2-9-8-10-16-1-3-6-3-6 0Z" fill={i ? C.honeyMid : C.honey} />
          <path d="M-11-9c-1-3 2-5 5-4" stroke={C.woodDark} strokeWidth="2.6" strokeLinecap="round" fill="none" />
        </g>
      ))}
    </>
  ),

  sugarOff: (
    <>
      <rect x="12" y="10" width="24" height="6" rx="2.5" fill={C.woodDark} />
      <path d="M12 16h24v17a7 7 0 0 1-7 7H19a7 7 0 0 1-7-7V16Z" fill={C.white} stroke={C.ink} strokeWidth="2" strokeOpacity="0.3" />
      <rect x="18" y="22" width="6" height="6" rx="1.5" fill={C.honeyMid} />
      <rect x="25" y="29" width="6" height="6" rx="1.5" fill={C.honeyMid} />
      <path d="M8 40L40 8" stroke={C.woodDark} strokeWidth="5" strokeLinecap="round" />
    </>
  ),

  tooth: (
    <>
      <path
        d="M13 8c4 0 4 2 8 2s4-2 8-2c4 0 6 4 6 10 0 8-4 10-4 18 0 4-2 8-4 8s-4-4-4-10-2-6-2-6-2 0-2 6-2 10-4 10-4-4-4-8c0-8-4-10-4-18 0-6 2-10 6-10Z"
        fill={C.white}
        stroke={C.green4}
        strokeWidth="2.4"
        opacity="0.95"
      />
      <path d="M17 15c3-1 8-1 11 1" stroke={C.green3} strokeWidth="2.6" strokeLinecap="round" fill="none" />
    </>
  ),

  phoneOff: (
    <>
      <rect x="15" y="6" width="18" height="36" rx="4" fill={C.night} />
      <rect x="18" y="10" width="12" height="25" rx="2" fill={C.wallNight} />
      <path d="M8 40L40 8" stroke={C.woodDark} strokeWidth="5" strokeLinecap="round" />
    </>
  ),

  foot: (
    <>
      <path d="M16 20c-3-6 0-12 6-12s9 5 8 11c-1 6-5 8-5 13 0 4-2 7-5 7s-5-3-5-7c0-4 2-8 1-12Z" fill={C.clayMid} />
      <circle cx="31" cy="13" r="3.2" fill={C.clayMid} />
      <circle cx="35" cy="19" r="2.8" fill={C.clayMid} />
      <circle cx="36" cy="26" r="2.4" fill={C.clayMid} />
      <path d="M9 39q7-4 14 0t14 0" stroke={C.green3} strokeWidth="4" strokeLinecap="round" fill="none" />
    </>
  ),
};

export const hasSpot = (name: string) => name in SPOTS;

/** Biểu tượng nội dung dạng tranh. Quay về null nếu chưa vẽ cho tên đó. */
export function Spot({ name, size = 28 }: { name: string; size?: number }) {
  const art = SPOTS[name];
  if (!art) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" style={{ display: "block" }}>
      {art}
    </svg>
  );
}

import Image from "next/image";
import { hasScene, Illustration } from "./illustrations/scenes";

const SPROUT = "M12 21V11M12 11C7 11 5 8 5 5c3 0 7 2 7 6 0-4 4-6 7-6 0 3-2 6-7 6Z";

/**
 * Khung ảnh của trang. Chưa có ảnh thật thì hiển thị khối trang trí kèm gợi ý
 * bố cục; thả file vào /public/images và khai báo `image` trong lib/content.ts
 * là chỗ này tự chuyển sang ảnh thật.
 */
export function PhotoSlot({
  src,
  hint,
  id,
  icon,
  ratio = "4 / 3",
  radius = 32,
  priority = false,
}: {
  src?: string;
  hint: string;
  /** Mã bài; nếu có tranh minh hoạ tương ứng thì dùng tranh đó. */
  id?: string;
  /** Biểu tượng hiện trong khung khi chưa có ảnh thật; mặc định là mầm cây. */
  icon?: string | string[];
  ratio?: string;
  radius?: number;
  priority?: boolean;
}) {
  const alt = hint.replace(/^Ảnh:\s*/i, "");
  const drawn = !src && !!id && hasScene(id);

  return (
    <div
      /* .washed làm nhạt màu, chỉ hợp với ảnh chụp — tranh vẽ giữ nguyên màu. */
      className={drawn ? undefined : "washed"}
      style={{
        position: "relative",
        borderRadius: radius,
        overflow: "hidden",
        aspectRatio: ratio,
        background: "var(--color-accent-2-200)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 860px) 100vw, 560px"
          style={{ objectFit: "cover" }}
        />
      ) : drawn ? (
        <Illustration id={id!} alt={alt} />
      ) : (
        <Placeholder hint={hint} icon={icon} />
      )}
    </div>
  );
}

function Placeholder({ hint, icon }: { hint: string; icon?: string | string[] }) {
  const paths = icon ? (Array.isArray(icon) ? icon : [icon]) : [SPROUT];
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "grid",
        placeItems: "center",
        padding: "24px 28px",
        textAlign: "center",
        background:
          "radial-gradient(120% 90% at 20% 10%, var(--color-accent-2-100), transparent 60%), radial-gradient(100% 80% at 90% 90%, var(--lg-clay-100), transparent 55%), var(--color-accent-200)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 12,
          borderRadius: "inherit",
          border: "1px dashed color-mix(in srgb, var(--color-accent-2-700) 35%, transparent)",
        }}
      />
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          maxWidth: "34ch",
          color: "var(--color-accent-2-800)",
        }}
      >
        <span
          style={{
            width: 132,
            height: 132,
            borderRadius: 999,
            display: "grid",
            placeItems: "center",
            background: "color-mix(in srgb, #fff 55%, transparent)",
            boxShadow: "0 2px 10px color-mix(in srgb, #2a2721 8%, transparent)",
          }}
        >
        <svg width="76" height="76" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>
        </span>
        <span style={{ fontSize: 15.5, lineHeight: 1.6 }}>{hint}</span>
      </span>
    </div>
  );
}

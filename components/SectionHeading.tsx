import { Icon } from "./Icon";
import { Spot } from "./illustrations/spots";

/**
 * Tiêu đề mục kèm biểu tượng. Mỗi phần nội dung có một dấu hiệu hình ảnh
 * riêng để người đọc nhận ra phần đó mà không cần đọc hết chữ.
 */
export function SectionHeading({
  icon,
  spot,
  title,
  lead,
  tone = "clay",
  size = "lg",
  id,
}: {
  /** Đường nét, dùng cho biểu tượng giao diện. */
  icon?: string | readonly string[];
  /** Tên biểu tượng nội dung dạng tranh; ưu tiên hơn `icon`. */
  spot?: string;
  title: string;
  lead?: string;
  tone?: "clay" | "green";
  size?: "lg" | "md";
  id?: string;
}) {
  const big = size === "lg";
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: big ? 16 : 12,
          marginBottom: lead ? 12 : big ? 24 : 14,
        }}
      >
        <span
          className={tone === "green" ? "icon-badge icon-badge-green" : "icon-badge"}
          style={{ width: big ? 58 : 44, height: big ? 58 : 44 }}
        >
          {spot ? (
            <Spot name={spot} size={big ? 36 : 27} />
          ) : (
            <Icon d={icon as string | string[]} size={big ? 30 : 23} />
          )}
        </span>
        <h2
          id={id}
          style={{
            fontSize: big ? "clamp(27px,3.8vw,40px)" : "clamp(21px,2.6vw,27px)",
            margin: 0,
            scrollMarginTop: 100,
          }}
        >
          {title}
        </h2>
      </div>
      {lead && <p className="section-lead">{lead}</p>}
    </>
  );
}

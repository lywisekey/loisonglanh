import Link from "next/link";
import { Icon, ICON_WARN } from "./Icon";
import { Spot } from "./illustrations/spots";
import { articleHref, catName, type Article } from "@/lib/content";

/** Thẻ bài viết chuẩn: huy hiệu icon, tên, trích dẫn, nhãn phụ tùy nội dung. */
export function ArticleCard({
  a,
  variant = "plain",
}: {
  a: Article;
  /** "group" là biến thể dùng trong lưới “Ăn uống”: icon nhỏ + tên nhóm. */
  variant?: "plain" | "group";
}) {
  const hasSteps = !!a.steps?.length;

  return (
    <Link
      href={articleHref(a.id)}
      className="card card-link elev-sm"
      style={{
        padding: variant === "group" ? 22 : 24,
        gap: 12,
        borderRadius: variant === "group" ? 28 : undefined,
      }}
    >
      {variant === "group" ? (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="icon-badge icon-badge-green" style={{ width: 52, height: 52 }}>
            <Spot name={a.icon} size={32} />
          </span>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-accent-700)",
            }}
          >
            {a.group || catName(a.cat)}
          </span>
        </span>
      ) : (
        <span className="icon-badge">
          <Spot name={a.icon} size={31} />
        </span>
      )}

      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          fontSize: 20,
          lineHeight: 1.25,
        }}
      >
        {a.title}
      </span>
      <span style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--color-neutral-800)" }}>
        {a.excerpt}
      </span>

      {a.shortNote && (
        <span
          style={{
            display: "flex",
            gap: 8,
            alignItems: "flex-start",
            fontSize: 13.5,
            lineHeight: 1.55,
            color: "var(--color-accent-900)",
            background: "var(--lg-honey-100)",
            border: "1px solid var(--lg-honey-300)",
            borderRadius: 18,
            padding: "10px 14px",
            marginTop: "auto",
          }}
        >
          <Icon d={ICON_WARN} size={17} style={{ flex: "none", marginTop: 2 }} />
          <span>{a.shortNote}</span>
        </span>
      )}

      {hasSteps && variant !== "group" && (
        <span className="tag tag-accent-2" style={{ fontSize: 12.5 }}>
          Có hướng dẫn từng bước
        </span>
      )}
    </Link>
  );
}

/** Thẻ rút gọn dùng cho khối “Các bài viết liên quan”. */
export function RelatedCard({ a }: { a: Article }) {
  return (
    <Link
      href={articleHref(a.id)}
      className="card-link"
      style={{
        background: "var(--color-surface)",
        borderRadius: 26,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <span
        style={{
          fontSize: 12,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-accent-700)",
        }}
      >
        {catName(a.cat)}
      </span>
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          fontSize: 18.5,
          lineHeight: 1.3,
        }}
      >
        {a.title}
      </span>
      <span style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-neutral-800)" }}>
        {a.excerpt}
      </span>
    </Link>
  );
}

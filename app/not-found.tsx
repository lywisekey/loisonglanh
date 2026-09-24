import Link from "next/link";
import { CATS, catHref } from "@/lib/content";

export default function NotFound() {
  return (
    <main
      className="fade-in"
      style={{
        width: "100%",
        maxWidth: 720,
        margin: "0 auto",
        padding: "clamp(48px,8vw,96px) 20px",
        textAlign: "center",
      }}
    >
      <span className="tag tag-accent-2" style={{ fontSize: 13, padding: "6px 14px" }}>
        Không tìm thấy trang
      </span>
      <h1 style={{ fontSize: "clamp(32px,5vw,48px)", margin: "18px 0 12px" }}>
        Nội dung này không còn ở đây
      </h1>
      <p style={{ fontSize: 17.5, lineHeight: 1.75, margin: "0 0 28px" }}>
        Có thể đường dẫn đã thay đổi. Bạn thử quay về trang chủ hoặc chọn một chủ đề bên dưới.
      </p>
      <Link href="/" className="btn btn-primary btn-lg">
        Về trang chủ
      </Link>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
          marginTop: 28,
        }}
      >
        {CATS.map((c) => (
          <Link key={c.id} href={catHref(c.id)} className="tag tag-neutral" style={{ fontSize: 14, padding: "8px 16px" }}>
            {c.name}
          </Link>
        ))}
      </div>
    </main>
  );
}

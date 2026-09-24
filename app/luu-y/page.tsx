import type { Metadata } from "next";
import Link from "next/link";
import { DISCLAIMER, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lưu ý sức khỏe",
  description:
    "Nội dung trên trang là kinh nghiệm cá nhân và kinh nghiệm dân gian được chia sẻ để tham khảo, không thay thế cho chẩn đoán, điều trị hoặc tư vấn của bác sĩ.",
  alternates: { canonical: "/luu-y" },
  openGraph: {
    title: `Lưu ý sức khỏe — ${SITE.name}`,
    description: "Đọc kỹ trước khi áp dụng bất kỳ kinh nghiệm nào trên trang.",
    url: "/luu-y",
  },
};

export default function NoticePage() {
  return (
    <main
      className="fade-in"
      style={{
        width: "100%",
        maxWidth: 820,
        margin: "0 auto",
        padding: "clamp(24px,4vw,48px) 20px clamp(40px,6vw,80px)",
      }}
    >
      <nav aria-label="Breadcrumb" className="crumbs">
        <Link href="/">Trang chủ</Link>
        <span>›</span>
        <span>Lưu ý sức khỏe</span>
      </nav>

      <h1 style={{ fontSize: "clamp(32px,5vw,48px)", margin: "0 0 20px" }}>
        Lưu ý trước khi áp dụng
      </h1>

      <div
        style={{
          background: "var(--lg-honey-100)",
          border: "1px solid var(--lg-honey-300)",
          borderRadius: 32,
          padding: "clamp(24px,3.5vw,38px)",
          color: "var(--color-accent-900)",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {DISCLAIMER.map((t) => (
          <p key={t} style={{ fontSize: 17, lineHeight: 1.75, margin: 0, textWrap: "pretty" }}>
            {t}
          </p>
        ))}
      </div>

      <h2 style={{ fontSize: "clamp(23px,3vw,30px)", margin: "34px 0 12px" }}>
        Cách đọc nội dung của trang
      </h2>
      <p style={{ fontSize: 17, lineHeight: 1.75, margin: 0 }}>
        Mỗi bài trên trang được viết dưới dạng “kinh nghiệm được chia sẻ”: có nguyên liệu, cách
        thực hiện, cách sử dụng theo kinh nghiệm và phần lưu ý. Trang không bán thuốc, không giới
        thiệu thực phẩm chức năng và không khẳng định một cách làm nào chắc chắn chữa khỏi một
        bệnh cụ thể.
      </p>
    </main>
  );
}

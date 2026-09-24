import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RelatedCard } from "@/components/ArticleCard";
import { Icon, ICON_PLAY, ICON_SPROUT, ICON_WARN } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { IC_UI } from "@/lib/icons";
import { PhotoSlot } from "@/components/PhotoSlot";
import {
  ARTICLES,
  articleHref,
  catHref,
  catName,
  getArticle,
  iconPath,
  NOTE_GENERIC,
  relatedArticles,
  SITE,
  YOUTUBE_SEARCH,
} from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    keywords: a.tags,
    alternates: { canonical: articleHref(a.id) },
    openGraph: {
      type: "article",
      title: `${a.title} — ${SITE.name}`,
      description: a.summary,
      url: articleHref(a.id),
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const notes = a.notes.length ? a.notes : [NOTE_GENERIC];
  const related = relatedArticles(a);
  const showYoutube = !!a.youtube && SITE.showYoutubeLink;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.summary,
    inLanguage: "vi-VN",
    articleSection: catName(a.cat),
    keywords: a.tags.join(", "),
    isAccessibleForFree: true,
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}${articleHref(a.id)}`,
  };

  return (
    <main
      className="fade-in"
      style={{
        width: "100%",
        maxWidth: 860,
        margin: "0 auto",
        padding: "clamp(20px,3vw,40px) 20px clamp(40px,6vw,80px)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="crumbs" style={{ marginBottom: 16 }}>
        <Link href="/">Trang chủ</Link>
        <span>›</span>
        <Link href={catHref(a.cat)}>{catName(a.cat)}</Link>
        <span>›</span>
        <span>{a.title}</span>
      </nav>

      <span className="tag tag-accent-2" style={{ fontSize: 13, padding: "6px 14px" }}>
        Đây là kinh nghiệm được chia sẻ
      </span>
      <h1 style={{ fontSize: "clamp(30px,5vw,48px)", margin: "16px 0 0", lineHeight: 1.15 }}>
        {a.title}
      </h1>
      <p
        style={{
          fontSize: "clamp(18px,2.2vw,21px)",
          lineHeight: 1.6,
          margin: "14px 0 24px",
          color: "var(--color-accent-2-800)",
          fontFamily: "var(--font-heading)",
        }}
      >
        {a.excerpt}
      </p>

      <PhotoSlot id={a.id} hint={a.photoHint} icon={iconPath(a.icon)} ratio="16 / 9" radius={28} priority />

      <div style={{ marginTop: 34 }}>
        <SectionHeading icon={IC_UI.summary} title="Tóm tắt" size="md" tone="green" />
      </div>
      <p style={{ fontSize: 17.5, lineHeight: 1.8, margin: 0, textWrap: "pretty" }}>{a.summary}</p>

      {a.highlight && (
        <p
          style={{
            margin: "24px 0 0",
            padding: "22px 24px",
            borderRadius: 28,
            background: "var(--color-accent-2-700)",
            color: "var(--color-neutral-100)",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "clamp(20px,2.6vw,26px)",
            lineHeight: 1.35,
          }}
        >
          {a.highlight}
        </p>
      )}

      {!!a.ingredients?.length && (
        <div style={{ marginTop: 32 }}>
          <SectionHeading icon={ICON_SPROUT} title="Nguyên liệu" size="md" tone="green" />
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {a.ingredients.map((ing) => (
              <li
                key={ing}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  background: "var(--color-surface)",
                  borderRadius: 999,
                  padding: "10px 18px",
                  fontSize: 16,
                }}
              >
                <Icon
                  d={ICON_SPROUT}
                  size={17}
                  stroke="var(--color-accent-2-700)"
                  style={{ flex: "none" }}
                />
                <span>{ing}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!!a.steps?.length && (
        <div style={{ marginTop: 32 }}>
          <SectionHeading icon={IC_UI.steps} title="Cách thực hiện" size="md" />
          <ol
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {a.steps.map((st, i) => (
              <li
                key={st}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  background: "var(--color-band-sand)",
                  borderRadius: 24,
                  padding: "16px 20px",
                }}
              >
                <span
                  style={{
                    width: 34,
                    height: 34,
                    flex: "none",
                    borderRadius: 999,
                    background: "var(--color-accent)",
                    color: "var(--color-bg)",
                    display: "grid",
                    placeItems: "center",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 17, lineHeight: 1.7 }}>{st}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {a.usage && (
        <div style={{ marginTop: 32 }}>
          <SectionHeading icon={IC_UI.usage} title="Cách sử dụng theo kinh nghiệm" size="md" tone="green" />
          <p
            style={{
              fontSize: 17.5,
              lineHeight: 1.8,
              margin: 0,
              padding: "20px 22px",
              borderRadius: 26,
              background: "var(--color-accent-2-100)",
              textWrap: "pretty",
            }}
          >
            {a.usage}
          </p>
        </div>
      )}

      {showYoutube && (
        <div style={{ marginTop: 28 }}>
          <a
            href={YOUTUBE_SEARCH}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ padding: "14px 24px" }}
          >
            <Icon d={ICON_PLAY} size={20} />
            Xem hướng dẫn trên YouTube
          </a>
          <p style={{ fontSize: 14.5, color: "var(--color-neutral-700)", margin: "10px 0 0" }}>
            Liên kết mở trang tìm kiếm YouTube; trang không gắn sẵn một video cụ thể nào.
          </p>
        </div>
      )}

      <div style={{ marginTop: 34 }}>
        <SectionHeading icon={ICON_WARN} title="Lưu ý" size="md" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {notes.map((n) => (
            <div key={n} className="note-box">
              <Icon d={ICON_WARN} size={20} style={{ flex: "none", marginTop: 3 }} />
              <span style={{ fontSize: 16.5, lineHeight: 1.7 }}>{n}</span>
            </div>
          ))}
          <div
            style={{
              fontSize: 15.5,
              lineHeight: 1.7,
              color: "var(--color-neutral-800)",
              padding: "2px 4px",
            }}
          >
            Nội dung mang tính chia sẻ và tham khảo, không thay thế cho chẩn đoán, điều trị hoặc
            tư vấn của bác sĩ.{" "}
            <Link href="/luu-y" style={{ fontWeight: 600, textDecoration: "underline" }}>
              Đọc lưu ý đầy đủ
            </Link>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}>
        {a.tags.map((t) => (
          <span key={t} className="tag tag-neutral" style={{ fontSize: 13 }}>
            #{t}
          </span>
        ))}
      </div>

      <div style={{ marginTop: 40 }}>
        <SectionHeading icon={IC_UI.related} title="Các bài viết liên quan" size="md" tone="green" />
        <div className="grid-auto" style={{ ["--min" as string]: "230px", ["--gap" as string]: "14px" }}>
          {related.map((r) => (
            <RelatedCard key={r.id} a={r} />
          ))}
        </div>
      </div>

      <Link
        href={catHref(a.cat)}
        className="btn btn-secondary"
        style={{
          marginTop: 36,
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: 16,
          padding: "13px 24px",
          minHeight: 48,
        }}
      >
        ← Quay lại {catName(a.cat)}
      </Link>
    </main>
  );
}

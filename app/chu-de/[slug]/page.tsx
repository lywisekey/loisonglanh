import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { Icon } from "@/components/Icon";
import { byCat, CATS, catHref, getCat, iconPath, SITE } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CATS.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCat(slug);
  if (!cat) return {};
  return {
    title: cat.name,
    description: cat.intro,
    alternates: { canonical: catHref(cat.id) },
    openGraph: {
      title: `${cat.name} — ${SITE.name}`,
      description: cat.intro,
      url: catHref(cat.id),
    },
  };
}

export default async function CategoryPage({ params }: Params) {
  const { slug } = await params;
  const cat = getCat(slug);
  if (!cat) notFound();

  const articles = byCat(cat.id);

  return (
    <main
      className="wrap fade-in"
      style={{ padding: "clamp(24px,4vw,48px) 20px clamp(40px,6vw,80px)" }}
    >
      <nav aria-label="Breadcrumb" className="crumbs">
        <Link href="/">Trang chủ</Link>
        <span>›</span>
        <span>{cat.name}</span>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
        <span className="icon-badge icon-badge-green" style={{ width: 74, height: 74 }}>
          <Icon d={iconPath(cat.icon)} size={38} />
        </span>
        <h1 style={{ fontSize: "clamp(32px,5vw,50px)", margin: 0 }}>{cat.name}</h1>
      </div>
      <p style={{ fontSize: 17.5, maxWidth: "64ch", margin: "14px 0 30px", textWrap: "pretty" }}>
        {cat.intro}
      </p>

      <div className="grid-auto">
        {articles.map((a) => (
          <ArticleCard key={a.id} a={a} />
        ))}
      </div>

      <p
        style={{
          marginTop: 34,
          padding: "20px 22px",
          borderRadius: 24,
          background: "var(--lg-honey-100)",
          color: "var(--color-accent-900)",
          fontSize: 16,
          lineHeight: 1.7,
        }}
      >
        Nội dung trong chủ đề này là kinh nghiệm được chia sẻ để tham khảo, không thay thế cho
        chẩn đoán, điều trị hoặc tư vấn của bác sĩ.
      </p>
    </main>
  );
}

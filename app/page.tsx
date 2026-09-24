import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon, ICON_BED, ICON_PHONE_OFF, ICON_PLAY, ICON_WARN } from "@/components/Icon";
import { PhotoSlot } from "@/components/PhotoSlot";
import { IC, IC_UI } from "@/lib/icons";
import {
  articleHref,
  byCat,
  catHref,
  DISCLAIMER,
  getArticle,
  getCat,
  iconPath,
  pickArticles,
  PRINCIPLES,
  SITE,
  YOUTUBE_SEARCH,
} from "@/lib/content";

const HERO_HINT =
  "Ảnh: bàn gỗ mộc với chén chè xanh, chanh, gừng, mật ong, các loại đậu và rau củ";

export default function HomePage() {
  const catCards = ["van-dong", "ve-sinh", "an-uong", "giac-ngu"].map((id) => getCat(id)!);
  const vayTay = getArticle("vay-tay")!;
  const bedMoves = getArticle("van-dong-tren-giuong")!;
  const sleep = getArticle("ngu-som")!;
  const screens = getArticle("han-che-man-hinh")!;
  const hygiene = byCat("ve-sinh");
  const food = byCat("an-uong");
  const drinks = pickArticles(["che-tuoi", "nuoc-chanh-mat-ong", "tam-that", "san-day"]);
  const soaks = pickArticles(["hoa-du-du-ngam-mat-ong", "mo-muoi-ngam-mat-ong"]);

  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section
        className="wrap"
        style={{
          padding: "clamp(34px,6vw,76px) 20px clamp(20px,3vw,34px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(26px,4vw,56px)",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 1 340px", minWidth: 0 }}>
          <span className="tag tag-accent" style={{ fontSize: 13, padding: "6px 14px" }}>
            Kinh nghiệm chia sẻ · không phải tư vấn y tế
          </span>
          <h1
            style={{
              fontSize: "clamp(38px,7vw,64px)",
              lineHeight: 1.1,
              margin: "18px 0 0",
              letterSpacing: "-0.01em",
            }}
          >
            Lối sống lành
          </h1>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(19px,2.4vw,24px)",
              lineHeight: 1.45,
              margin: "14px 0 0",
              color: "var(--color-accent-2-800)",
            }}
          >
            Những kinh nghiệm giản dị về ăn uống, vận động, giấc ngủ và chăm sóc cơ thể.
          </p>
          <p
            style={{
              fontSize: 17.5,
              lineHeight: 1.75,
              margin: "18px 0 0",
              maxWidth: "56ch",
              textWrap: "pretty",
            }}
          >
            Trang này được tạo ra với mong muốn chia sẻ những kinh nghiệm và thói quen sống mà
            tôi biết, để mọi người có thêm một nguồn tham khảo trong quá trình chăm sóc sức khỏe
            của bản thân và gia đình.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
            <a href="#kinh-nghiem" className="btn btn-primary btn-lg">
              Xem các kinh nghiệm
            </a>
            <a href="#nguyen-tac" className="btn btn-secondary btn-lg">
              Bắt đầu từ hôm nay
            </a>
          </div>
        </div>

        <div style={{ flex: "1 1 320px", minWidth: 0 }}>
          <PhotoSlot hint={HERO_HINT} ratio="4 / 3" radius={32} priority />
          <p style={{ fontSize: 13.5, color: "var(--color-neutral-700)", margin: "10px 4px 0" }}>
            Một bàn gỗ mộc: chén chè xanh, chanh, gừng, mật ong, các loại đậu và rau củ.
          </p>
        </div>
      </section>

      {/* ── Bốn chủ đề chính ───────────────────────────────────────────── */}
      <section id="kinh-nghiem" className="wrap" style={{ padding: "clamp(28px,4vw,52px) 20px" }}>
        <div className="grid-auto" style={{ ["--min" as string]: "230px" }}>
          {catCards.map((c) => (
            <Link key={c.id} href={catHref(c.id)} className="card card-link elev-sm" style={{ padding: 24, gap: 12 }}>
              <span className="icon-badge" style={{ width: 48, height: 48 }}>
                <Icon d={iconPath(c.icon)} size={24} />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 21,
                  lineHeight: 1.25,
                }}
              >
                {c.name}
              </span>
              <span style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--color-neutral-800)" }}>
                {c.desc}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Vận động ───────────────────────────────────────────────────── */}
      <section className="wrap" style={{ padding: "clamp(30px,5vw,64px) 20px" }}>
        <SectionHeading
          icon={IC.pulse}
          title="Vận động mỗi ngày"
          lead="Không nhất thiết phải tập luyện quá nặng. Điều quan trọng là duy trì vận động đều đặn và tạo thành thói quen."
        />
        <div
          className="grid-auto"
          style={{ ["--min" as string]: "280px", ["--gap" as string]: "18px", alignItems: "start" }}
        >
          <article
            style={{
              background: "var(--color-accent-2-700)",
              color: "var(--color-neutral-100)",
              borderRadius: 32,
              padding: "clamp(24px,3vw,36px)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <span
              style={{
                fontSize: 12.5,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-accent-2-200)",
              }}
            >
              Kinh nghiệm nổi bật
            </span>
            <h3
              style={{
                fontSize: "clamp(23px,3vw,30px)",
                margin: "10px 0 12px",
                color: "var(--color-neutral-100)",
              }}
            >
              {vayTay.title}
            </h3>
            <p style={{ fontSize: 17, lineHeight: 1.7, margin: "0 0 20px" }}>{vayTay.summary}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {SITE.showYoutubeLink && (
                <a
                  href={YOUTUBE_SEARCH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    background: "var(--color-neutral-100)",
                    color: "var(--color-accent-2-800)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: 15.5,
                    padding: "13px 22px",
                    minHeight: 48,
                  }}
                >
                  <Icon d={ICON_PLAY} size={19} />
                  Xem hướng dẫn trên YouTube
                </a>
              )}
              <Link
                href={articleHref(vayTay.id)}
                className="btn"
                style={{
                  border: "1px solid color-mix(in srgb, var(--color-neutral-100) 45%, transparent)",
                  color: "var(--color-neutral-100)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 15.5,
                  padding: "13px 22px",
                  minHeight: 48,
                }}
              >
                Đọc chi tiết
              </Link>
            </div>
          </article>

          <Link
            href={articleHref(bedMoves.id)}
            className="card card-link elev-sm"
            style={{ padding: "clamp(22px,3vw,32px)", gap: 12 }}
          >
            <span className="tag tag-accent-2" style={{ fontSize: 12.5 }}>
              Kinh nghiệm tham khảo
            </span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "clamp(21px,2.6vw,26px)",
                lineHeight: 1.25,
              }}
            >
              {bedMoves.title}
            </span>
            <span style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--color-neutral-800)" }}>
              {bedMoves.summary}
            </span>
            <span style={{ color: "var(--color-accent-700)", fontSize: 15, fontWeight: 600 }}>
              Đọc kinh nghiệm →
            </span>
          </Link>
        </div>
      </section>

      {/* ── Vệ sinh cá nhân ────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-band-warm)", padding: "clamp(34px,5vw,72px) 0" }}>
        <div className="wrap">
          <SectionHeading
            icon={IC.droplet}
            tone="green"
            title="Vệ sinh cá nhân – đơn giản và tự nhiên"
            lead="Những thói quen chăm sóc cơ thể theo hướng đơn giản, tự nhiên — được chia sẻ để tham khảo."
          />
          <div className="grid-auto">
            {hygiene.map((a) => (
              <ArticleCard key={a.id} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Giấc ngủ ───────────────────────────────────────────────────── */}
      <section className="wrap" style={{ padding: "clamp(34px,5vw,68px) 20px" }}>
        <SectionHeading icon={IC.moon} tone="green" title="Ngủ sớm – thức dậy sớm" />
        <div
          className="grid-auto"
          style={{ ["--min" as string]: "280px", ["--gap" as string]: "18px", alignItems: "start" }}
        >
          <Link
            href={articleHref(sleep.id)}
            style={{
              color: "var(--color-neutral-100)",
              background: "var(--color-neutral-900)",
              borderRadius: 32,
              padding: "clamp(26px,3vw,38px)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              boxShadow: "var(--shadow-md)",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                width: 48,
                height: 48,
                borderRadius: 999,
                background: "color-mix(in srgb, var(--color-neutral-100) 16%, transparent)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Icon d={iconPath(sleep.icon)} size={24} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(26px,3.6vw,36px)",
                lineHeight: 1.2,
              }}
            >
              9 giờ tối đi ngủ
              <br />4 giờ sáng thức dậy
            </span>
            <span style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--color-neutral-300)" }}>
              {sleep.summary}
            </span>
            <span style={{ fontSize: 15, fontWeight: 600, color: "var(--lg-honey-300)" }}>
              Đọc kinh nghiệm →
            </span>
          </Link>

          <Link
            href={articleHref(screens.id)}
            className="card card-link elev-sm"
            style={{ padding: "clamp(24px,3vw,34px)", gap: 14 }}
          >
            <span style={{ display: "flex", gap: 10 }}>
              <span className="icon-badge" style={{ width: 44, height: 44 }}>
                <Icon d={ICON_PHONE_OFF} size={22} />
              </span>
              <span className="icon-badge icon-badge-green" style={{ width: 44, height: 44 }}>
                <Icon d={ICON_BED} size={22} />
              </span>
            </span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "clamp(21px,2.6vw,26px)",
                lineHeight: 1.25,
              }}
            >
              {screens.title}
            </span>
            <span style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--color-neutral-800)" }}>
              {screens.summary}
            </span>
            <span style={{ color: "var(--color-accent-700)", fontSize: 15, fontWeight: 600 }}>
              Đọc kinh nghiệm →
            </span>
          </Link>
        </div>
      </section>

      {/* ── Ăn uống ────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-band-sand)", padding: "clamp(34px,5vw,72px) 0" }}>
        <div className="wrap">
          <SectionHeading
            icon={IC.bowl}
            title="Ăn uống – lựa chọn thực phẩm đơn giản"
            lead="Những nguyên tắc dưới đây là kinh nghiệm ăn uống được chia sẻ. Không phải chế độ ăn bắt buộc cho tất cả mọi người."
          />
          <div className="grid-auto" style={{ ["--min" as string]: "245px" }}>
            {food.map((a) => (
              <ArticleCard key={a.id} a={a} variant="group" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Thức uống ──────────────────────────────────────────────────── */}
      <section className="wrap" style={{ padding: "clamp(34px,5vw,68px) 20px" }}>
        <SectionHeading
          icon={IC.cup}
          tone="green"
          title="Những thức uống được chia sẻ"
          lead="Các thức uống quen thuộc, dễ chuẩn bị tại nhà."
        />
        <div className="grid-auto">
          {drinks.map((a) => (
            <ArticleCard key={a.id} a={a} />
          ))}
        </div>
      </section>

      {/* ── Ngâm uống ──────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-accent-2-100)", padding: "clamp(34px,5vw,72px) 0" }}>
        <div className="wrap">
          <SectionHeading
            icon={IC.jar}
            title="Ngâm uống lâu dài"
            lead="Một số cách ngâm nguyên liệu được chia sẻ dưới đây. Đây là phần kinh nghiệm tham khảo, không phải hướng dẫn điều trị bệnh."
          />
          <div
            className="grid-auto"
            style={{ ["--min" as string]: "300px", ["--gap" as string]: "18px" }}
          >
            {soaks.map((a) => (
              <article
                key={a.id}
                style={{
                  background: "var(--color-bg)",
                  borderRadius: 32,
                  padding: "clamp(24px,3vw,34px)",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <h3 style={{ fontSize: "clamp(22px,2.8vw,28px)", margin: 0 }}>{a.title}</h3>
                <div>
                  <p className="kicker">Nguyên liệu</p>
                  <ul style={{ margin: 0, paddingLeft: 20, fontSize: 16.5, lineHeight: 1.7 }}>
                    {a.ingredients?.map((ing) => (
                      <li key={ing}>{ing}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="kicker">Cách làm</p>
                  <ol
                    style={{
                      margin: 0,
                      paddingLeft: 22,
                      fontSize: 16.5,
                      lineHeight: 1.7,
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    {a.steps?.map((st) => (
                      <li key={st}>{st}</li>
                    ))}
                  </ol>
                </div>
                <Link
                  href={articleHref(a.id)}
                  className="btn btn-secondary"
                  style={{
                    alignSelf: "flex-start",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: 15.5,
                    padding: "12px 22px",
                    minHeight: 46,
                  }}
                >
                  Xem đầy đủ cách dùng và lưu ý
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nguyên tắc ─────────────────────────────────────────────────── */}
      <section id="nguyen-tac" className="wrap" style={{ padding: "clamp(34px,5vw,72px) 20px" }}>
        <SectionHeading icon={IC.sprout} title="Không cần quá phức tạp" />
        <div className="grid-auto" style={{ ["--min" as string]: "200px" }}>
          {PRINCIPLES.map((p) => (
            <div
              key={p.no}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                padding: "24px 22px",
                borderRadius: 28,
                border: "1px solid var(--color-divider)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span className="icon-badge icon-badge-green" style={{ width: 52, height: 52 }}>
                  <Icon d={iconPath(p.icon)} size={27} />
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "var(--color-accent-700)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {p.no}
                </span>
              </span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 19.5,
                  lineHeight: 1.3,
                }}
              >
                {p.text}
              </span>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: "clamp(18px,2.2vw,22px)",
            lineHeight: 1.6,
            maxWidth: "60ch",
            margin: "28px 0 0",
            fontFamily: "var(--font-heading)",
            color: "var(--color-accent-2-800)",
            textWrap: "pretty",
          }}
        >
          Điều quan trọng không phải làm thật nhiều thứ cùng lúc, mà là hình thành những thói
          quen phù hợp và duy trì lâu dài.
        </p>
      </section>

      {/* ── Lưu ý ──────────────────────────────────────────────────────── */}
      <section className="wrap" style={{ padding: "0 20px clamp(40px,6vw,80px)" }}>
        <div
          style={{
            background: "var(--lg-honey-100)",
            border: "1px solid var(--lg-honey-300)",
            borderRadius: 32,
            padding: "clamp(26px,3.5vw,40px)",
            color: "var(--color-accent-900)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span className="icon-badge icon-badge-honey" style={{ width: 58, height: 58 }}>
              <Icon d={ICON_WARN} size={30} />
            </span>
            <h2 style={{ fontSize: "clamp(25px,3.2vw,34px)", margin: 0, color: "inherit" }}>
              Lưu ý trước khi áp dụng
            </h2>
          </div>

          <div className="notice-grid">
            {DISCLAIMER.map((t) => (
              <div key={t} className="notice-card">
                <p>{t}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "12px 20px",
              marginTop: 24,
              paddingTop: 22,
              borderTop: "1px solid color-mix(in srgb, var(--lg-honey-300) 75%, transparent)",
            }}
          >
            <Link
              href="/luu-y"
              className="btn btn-secondary"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: 15.5,
                padding: "12px 24px",
                minHeight: 46,
                color: "inherit",
                borderColor: "color-mix(in srgb, var(--lg-honey-300) 90%, transparent)",
                background: "color-mix(in srgb, #fff 55%, transparent)",
              }}
            >
              Đọc lưu ý đầy đủ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Icon,
  ICON_CHEVRON,
  ICON_CLOSE,
  ICON_MENU,
  ICON_SEARCH,
  ICON_WARN,
} from "./Icon";
import { Logo } from "./Logo";
import {
  articleHref,
  catName,
  CATS,
  iconPath,
  KEYWORDS,
  NAV,
  searchArticles,
  SITE,
} from "@/lib/content";

const catHrefOf = (id: string) => `/chu-de/${id}`;

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  // Đổi trang thì đóng hết các lớp mở tạm.
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => searchArticles(q), [q]);
  const hasQuery = q.trim().length > 0;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "color-mix(in srgb, var(--color-bg) 92%, transparent)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <div
        className="wrap"
        style={{
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >
        <Link
          href="/"
          aria-label="Về trang chủ"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "inherit",
            textDecoration: "none",
            marginRight: "auto",
          }}
        >
          <Logo height={42} id="hd" />
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 19,
              letterSpacing: "0.01em",
            }}
          >
            {SITE.brand}
          </span>
        </Link>

        <nav aria-label="Điều hướng chính" className="lg-nav-desktop">
          {NAV.map((n) => {
            const current = pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={current ? "page" : undefined}
                style={{
                  padding: "4px 0",
                  fontSize: 15.5,
                  fontWeight: current ? 700 : 500,
                  color: current ? "var(--color-accent-700)" : "inherit",
                  textDecoration: "none",
                  borderBottom: current
                    ? "2px solid var(--color-accent)"
                    : "2px solid transparent",
                }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => {
            setSearchOpen((v) => !v);
            setMenuOpen(false);
          }}
          aria-label={searchOpen ? "Đóng tìm kiếm" : "Tìm kiếm"}
          aria-expanded={searchOpen}
          className="btn btn-secondary btn-icon"
          style={{ width: 40, height: 40 }}
        >
          <Icon d={searchOpen ? ICON_CLOSE : ICON_SEARCH} size={19} />
        </button>

        <button
          type="button"
          onClick={() => {
            setMenuOpen((v) => !v);
            setSearchOpen(false);
          }}
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={menuOpen}
          className="btn btn-secondary btn-icon lg-nav-burger"
          style={{ width: 40, height: 40 }}
        >
          <Icon d={menuOpen ? ICON_CLOSE : ICON_MENU} size={20} />
        </button>
      </div>

      {searchOpen && (
        <div
          style={{
            borderTop: "1px solid var(--color-divider)",
            background: "var(--color-bg)",
          }}
        >
          <div className="wrap" style={{ padding: "18px 20px 22px" }}>
            <label
              htmlFor="lg-search"
              style={{ display: "block", fontSize: 14, marginBottom: 8, fontWeight: 600 }}
            >
              Tìm trong các kinh nghiệm
            </label>
            <input
              id="lg-search"
              ref={searchRef}
              className="input"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="ví dụ: sắn dây, tam thất, ngâm chân…"
              style={{ fontSize: 16, minHeight: 48 }}
            />

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
              {KEYWORDS.map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setQ(k)}
                  className="tag tag-accent-2"
                  style={{
                    border: 0,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 13.5,
                    padding: "6px 14px",
                  }}
                >
                  {k}
                </button>
              ))}
            </div>

            {hasQuery && (
              <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
                <p style={{ fontSize: 14.5, color: "var(--color-neutral-700)", margin: 0 }}>
                  {results.length
                    ? `Tìm thấy ${results.length} kinh nghiệm`
                    : "Chưa tìm thấy nội dung phù hợp. Thử một trong các từ khóa gợi ý ở trên."}
                </p>
                {results.map((r) => (
                  <Link
                    key={r.id}
                    href={articleHref(r.id)}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "center",
                      textAlign: "left",
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-divider)",
                      borderRadius: 24,
                      padding: "14px 18px",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <span className="icon-badge icon-badge-green">
                      <Icon d={iconPath(r.icon)} size={24} />
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                      <span
                        style={{
                          fontSize: 12,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--color-accent-700)",
                        }}
                      >
                        {catName(r.cat)}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 600,
                          fontSize: 17.5,
                          lineHeight: 1.3,
                        }}
                      >
                        {r.title}
                      </span>
                      <span
                        style={{
                          fontSize: 14.5,
                          lineHeight: 1.5,
                          color: "var(--color-neutral-700)",
                        }}
                      >
                        {r.excerpt}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {menuOpen && (
        <nav
          aria-label="Menu"
          style={{
            borderTop: "1px solid var(--color-divider)",
            background: "var(--color-bg)",
            padding: "12px 20px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {NAV.map((n) => {
            const cat = CATS.find((c) => catHrefOf(c.id) === n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  borderBottom: "1px solid var(--color-divider)",
                  padding: "12px 2px",
                  fontSize: 18,
                  color: "inherit",
                  textDecoration: "none",
                  minHeight: 60,
                }}
              >
                <span className="icon-badge icon-badge-green" style={{ width: 44, height: 44 }}>
                  <Icon d={cat ? iconPath(cat.icon) : ICON_WARN} size={23} />
                </span>
                <span style={{ marginRight: "auto" }}>{n.label}</span>
                <Icon d={ICON_CHEVRON} size={20} stroke="var(--color-accent)" />
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

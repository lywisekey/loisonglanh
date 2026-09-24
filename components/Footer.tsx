import Link from "next/link";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer-grid">
        <div>
          {/* Logo và tên đứng cùng hàng, và cả khối cũng là đường về trang chủ. */}
          <Link href="/" className="site-footer-brand">
            <Logo height={40} id="ft" />
            <span>{SITE.brand}</span>
          </Link>
          <p className="site-footer-tagline">{SITE.tagline}</p>
          <p className="site-footer-motto">{SITE.motto}</p>
        </div>

        <nav aria-label="Điều hướng cuối trang" className="site-footer-nav">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label === "Lưu ý" ? "Lưu ý sức khỏe" : n.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="wrap site-footer-bottom">
        <span>
          © {new Date().getFullYear()} {SITE.name}
        </span>
        <span>Nội dung mang tính chia sẻ và tham khảo.</span>
      </div>
    </footer>
  );
}

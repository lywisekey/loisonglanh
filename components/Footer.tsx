import Link from "next/link";
import { Icon, ICON_CHAT, ICON_MAIL, ICON_PHONE, ICON_PIN } from "./Icon";
import { Logo } from "./Logo";
import { CONTACT, NAV, SITE, type ContactItem } from "@/lib/content";

const CONTACT_ICON = {
  phone: ICON_PHONE,
  chat: ICON_CHAT,
  mail: ICON_MAIL,
  pin: ICON_PIN,
} as const;

function ContactCell({ item }: { item: ContactItem }) {
  const body = (
    <>
      <span className="site-contact-icon">
        <Icon d={CONTACT_ICON[item.icon] as string | string[]} size={24} />
      </span>
      <span>
        <span className="site-contact-label">{item.label}</span>
        <span className="site-contact-value">{item.value}</span>
      </span>
    </>
  );
  return item.href ? (
    <a className="site-contact-item" href={item.href}>
      {body}
    </a>
  ) : (
    <div className="site-contact-item">{body}</div>
  );
}

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
          <p className="site-footer-location">
            <Icon d={ICON_PIN} size={19} />
            <span>{SITE.location}</span>
          </p>
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

      {/* Khối liên hệ, trải hết chiều ngang để dòng địa chỉ không bị ngắt vụn */}
      <div className="wrap site-contact">
        {CONTACT.map((c) => (
          <ContactCell key={c.label} item={c} />
        ))}
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

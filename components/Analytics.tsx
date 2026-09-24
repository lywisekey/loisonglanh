"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_ID } from "@/lib/content";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const enabled = () => !!GA_ID && process.env.NODE_ENV === "production";

/**
 * Google Analytics 4.
 *
 * Chỉ nạp ở bản dựng production — chạy `npm run dev` sẽ không gửi gì, để số
 * liệu không bị lẫn lượt truy cập lúc phát triển.
 *
 * Tự bắn page_view mỗi khi đổi đường dẫn thay vì trông vào mục "Enhanced
 * measurement" của GA4: App Router điều hướng bằng history.pushState, và đã
 * kiểm thực tế thấy GA4 không ghi nhận lượt xem thứ hai. Vì vậy `config` tắt
 * page_view mặc định, mọi lượt xem đều do effect dưới đây gửi — đúng một lần.
 *
 * Chỉ dùng usePathname, không dùng useSearchParams: hook đó buộc trang rơi
 * khỏi chế độ dựng tĩnh, mà trang này cũng không có tham số truy vấn nào.
 */
export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!enabled() || typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: pathname + window.location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  if (!enabled()) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { send_page_view: false });`}
      </Script>
    </>
  );
}

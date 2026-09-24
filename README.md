# Lối sống lành

Website tĩnh (Next.js App Router) chia sẻ kinh nghiệm sống lành: ăn uống, vận động,
giấc ngủ, vệ sinh cá nhân và thảo mộc. Toàn bộ nội dung được render sẵn thành HTML
tĩnh nên tải nhanh và Google index được từng bài.

## Chạy tại máy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Cấu trúc

```
app/
  page.tsx                  Trang chủ
  chu-de/[slug]/page.tsx    Trang chủ đề (5 chủ đề)
  kinh-nghiem/[slug]/page.tsx  Trang bài chi tiết (21 bài)
  luu-y/page.tsx            Lưu ý sức khỏe
  sitemap.ts, robots.ts     SEO
  globals.css               Design tokens + component classes
components/                 Header (tìm kiếm + menu), Footer, thẻ bài, icon, khung ảnh
lib/content.ts              TOÀN BỘ nội dung của trang
lib/icons.ts                Đường path SVG
```

## Sửa nội dung

Mọi chữ nghĩa nằm trong `lib/content.ts`:

- `SITE` — tên thương hiệu, slogan, domain, bật/tắt link YouTube.
- `CATS` — 5 chủ đề. Thêm chủ đề là tự có trang `/chu-de/<id>` và mục trong menu.
- `ARTICLES` — từng bài. Thêm một object là tự có trang `/kinh-nghiem/<id>`,
  có mặt trong chủ đề tương ứng, trong tìm kiếm và trong sitemap.
- `DISCLAIMER`, `PRINCIPLES`, `KEYWORDS` — khối lưu ý, 5 nguyên tắc, từ khóa gợi ý.

## Thêm ảnh thật

Hiện mỗi bài dùng khung ảnh gợi ý bố cục (`photoHint`). Để dùng ảnh thật:

1. Bỏ ảnh vào `public/images/`, ví dụ `public/images/san-day.jpg`.
2. Truyền `src` cho `<PhotoSlot>` tại `app/kinh-nghiem/[slug]/page.tsx`
   (hoặc thêm trường `image` vào `Article` rồi truyền `src={a.image}`).

## Deploy lên Vercel

1. Đẩy thư mục này lên một repo Git (GitHub/GitLab/Bitbucket).
2. Vercel → **New Project** → chọn repo. Vercel tự nhận Next.js, không cần chỉnh
   build command hay output directory.
3. Thêm biến môi trường `NEXT_PUBLIC_SITE_URL` = domain thật
   (ví dụ `https://loisonglanh.vn`) để sitemap, canonical và thẻ OG dùng URL đúng.
4. Deploy.

Hoặc dùng CLI:

```bash
npx vercel          # deploy preview
npx vercel --prod   # deploy production
```

## Lưu ý về nội dung

Trang là kênh chia sẻ kinh nghiệm cá nhân và kinh nghiệm dân gian, không phải tư vấn
y tế. Phần `DISCLAIMER` xuất hiện ở trang chủ, trang `/luu-y` và cuối mỗi bài — nên
giữ nguyên khi thêm nội dung mới.

## Kiểm tra

```bash
npm run typecheck   # kiểm kiểu TypeScript
npm run build       # dựng bản production
```

> Next 16 đã gỡ lệnh `next lint`, nên dự án dùng `tsc --noEmit` thay cho script `lint` cũ.

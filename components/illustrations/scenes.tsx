import {
  Backdrop, Bananas, Basin, Basket, Bed, Bowl, C, Chopsticks, Cloth, Cup, Fish,
  Flower, Fruit, Ginger, Glass, Jar, Lamp, Leaf, Plate, Screen, Shrimp, Spoon,
  Steam, Sun, Table, Teapot, Towel, Window,
} from "./parts";

/**
 * Mỗi bài một cảnh, dựng theo đúng mô tả `photoHint` trong lib/content.ts.
 *
 * Khung vẽ 400×300 nhưng trang bài cắt về 16:9, tức chỉ còn dải y từ 37 đến
 * 262. Vì vậy mặt bàn đặt ở y=196 và mọi đồ vật nằm gọn phía trên — cắt kiểu
 * nào cũng không mất đồ.
 */
const TABLE = 196;

const S: Record<string, React.ReactNode> = {

  hero: (
    <>
      <Backdrop />
      <Table y={TABLE} />
      <Teapot x={74} y={TABLE} s={1.1} />
      <Steam x={74} y={TABLE - 78} s={1} />
      <Cup x={158} y={TABLE + 2} s={0.95} />
      <Jar x={240} y={TABLE} s={0.92} fill={C.honey} />
      <Bowl x={324} y={TABLE + 2} s={0.95} food={C.woodDark} />
      <Fruit x={196} y={TABLE - 14} s={0.95} fill={C.green2} />
      <Ginger x={284} y={TABLE - 8} s={1.3} />
      <Leaf x={352} y={TABLE - 42} s={1} rot={-18} />
      <Leaf x={20} y={TABLE - 16} s={0.95} rot={12} fill={C.green2} />
    </>
  ),

  "vay-tay": (
    <>
      <Backdrop />
      <Sun x={314} y={70} s={1.25} />
      <rect x="0" y={TABLE} width="400" height={300 - TABLE} fill={C.green2} />
      <rect x="0" y={TABLE} width="400" height="12" fill={C.green3} opacity="0.45" />
      <rect x="0" y="132" width="400" height="11" rx="5.5" fill={C.woodDark} />
      <rect x="38" y="132" width="13" height={TABLE - 132} fill={C.woodDark} />
      <rect x="349" y="132" width="13" height={TABLE - 132} fill={C.woodDark} />
      <Leaf x={96} y={TABLE + 30} s={1.6} rot={-32} fill={C.green3} />
      <Leaf x={286} y={TABLE + 34} s={1.4} rot={26} fill={C.green4} />
    </>
  ),

  "van-dong-tren-giuong": (
    <>
      <Backdrop tone="warm" />
      <Window x={344} y={88} s={0.58} />
      <Table y={TABLE + 18} />
      <Bed x={188} y={TABLE + 18} s={1.22} />
    </>
  ),

  "tam-goi": (
    <>
      <Backdrop />
      <Table y={TABLE} />
      <Basin x={158} y={TABLE} s={1.35} water={C.green1} />
      <Fruit x={306} y={TABLE - 18} s={1.2} fill={C.green2} />
      <Fruit x={352} y={TABLE - 6} s={1} fill={C.green2} half />
      <Leaf x={36} y={TABLE - 32} s={1.35} rot={-14} fill={C.green3} />
      <Leaf x={66} y={TABLE - 14} s={1.1} rot={18} fill={C.green4} />
    </>
  ),

  "rua-mat": (
    <>
      <Backdrop tone="warm" />
      <Towel x={324} y={60} s={1.2} />
      <Table y={TABLE} />
      <Basin x={166} y={TABLE} s={1.35} water={C.wallGreen} />
      <rect x="248" y={TABLE - 20} width="42" height="20" rx="7" fill={C.cream} />
    </>
  ),

  "rang-mieng": (
    <>
      <Backdrop tone="warm" />
      <Table y={TABLE} />
      <Cloth x={196} y={TABLE} s={1} />
      <Jar x={136} y={TABLE - 4} s={1.05} fill={C.white} />
      <Fruit x={246} y={TABLE - 22} s={1.3} fill={C.green3} />
      <Fruit x={296} y={TABLE - 12} s={1.05} fill={C.green2} />
      <Spoon x={338} y={TABLE - 6} s={0.95} rot={-12} />
    </>
  ),

  "ngam-chan": (
    <>
      <Backdrop tone="warm" />
      <Table y={TABLE} />
      <Basin x={182} y={TABLE} s={1.5} water={C.honeyPale} />
      <Steam x={182} y={TABLE - 78} s={1.35} />
      <Ginger x={330} y={TABLE - 10} s={1.6} />
      <Ginger x={48} y={TABLE - 6} s={1.25} />
    </>
  ),

  "ngu-som": (
    <>
      <Backdrop tone="warm" />
      <Window x={200} y={118} s={1.3} sky={C.honeyPale}>
        <Sun x={26} y={-44} s={0.72} />
      </Window>
      <Table y={TABLE + 40} />
    </>
  ),

  "han-che-man-hinh": (
    <>
      <Backdrop tone="night" />
      <Table y={TABLE} />
      <Lamp x={306} y={TABLE - 26} s={1.2} />
      <Screen x={118} y={TABLE} s={1.25} w={54} h={92} />
      <Cup x={214} y={TABLE + 2} s={0.85} fill={C.honeyMid} />
    </>
  ),

  chuoi: (
    <>
      <Backdrop />
      <Table y={TABLE} />
      <Basket x={196} y={TABLE} s={1.35} overlay={<Bananas x={0} y={-22} s={1.35} />} />
    </>
  ),

  "han-che-duong": (
    <>
      <Backdrop tone="warm" />
      <Table y={TABLE} />
      <Cloth x={196} y={TABLE} s={1.05} fill={C.cream} />
      <Jar x={172} y={TABLE - 4} s={1.25} fill={C.white} />
      <Spoon x={296} y={TABLE - 8} s={1.15} rot={-14} />
    </>
  ),

  "ca-tom-tep": (
    <>
      <Backdrop />
      <Table y={TABLE} />
      <Basket
        x={196}
        y={TABLE}
        s={1.4}
        overlay={
          <>
            <Fish x={-12} y={-22} s={0.85} rot={-8} />
            <Shrimp x={30} y={-28} s={0.95} rot={16} />
            <Shrimp x={-44} y={-24} s={0.8} rot={-22} />
          </>
        }
      />
    </>
  ),

  "thit-ga": (
    <>
      <Backdrop tone="warm" />
      <Table y={TABLE} />
      <Plate
        x={196}
        y={TABLE - 4}
        s={1.5}
        food={
          <>
            {[-26, -9, 8, 25].map((dx, i) => (
              <ellipse key={dx} cx={dx} cy={-7 - (i % 2) * 4} rx="13" ry="7.5" fill={C.cream} stroke={C.honeyMid} strokeWidth="2" />
            ))}
          </>
        }
      />
    </>
  ),

  "thit-do": (
    <>
      <Backdrop tone="warm" />
      <Table y={TABLE} />
      <Plate x={264} y={TABLE - 4} s={1.15} food={<ellipse cx="0" cy="-7" rx="26" ry="10" fill={C.clayMid} />} />
      <Bowl x={122} y={TABLE} s={1.2} food={C.white} />
      <Chopsticks x={196} y={TABLE + 26} s={1.25} />
    </>
  ),

  "rau-xanh": (
    <>
      <Backdrop />
      <Table y={TABLE} />
      <Basket
        x={196}
        y={TABLE}
        s={1.4}
        overlay={
          <>
            <Leaf x={-32} y={-20} s={1.1} rot={-38} fill={C.green3} />
            <Leaf x={2} y={-30} s={1.2} rot={-8} fill={C.green2} />
            <Leaf x={34} y={-18} s={1.05} rot={24} fill={C.green4} />
          </>
        }
      />
    </>
  ),

  "dau-ngu-coc": (
    <>
      <Backdrop tone="warm" />
      <Table y={TABLE} />
      <Bowl x={98} y={TABLE} s={1.05} food={C.night} />
      <Bowl x={198} y={TABLE + 4} s={1.2} food={C.green3} />
      <Bowl x={300} y={TABLE} s={1.05} food={C.clayMid} />
      <Spoon x={362} y={TABLE - 10} s={0.9} rot={-18} />
    </>
  ),

  "che-tuoi": (
    <>
      <Backdrop />
      <Table y={TABLE} />
      <Teapot x={134} y={TABLE} s={1.25} />
      <Steam x={134} y={TABLE - 86} s={1.15} />
      <Cup x={256} y={TABLE + 2} s={1.1} />
      <Cup x={334} y={TABLE + 4} s={0.88} />
      <Leaf x={28} y={TABLE - 24} s={1.15} rot={-16} fill={C.green3} />
    </>
  ),

  "nuoc-chanh-mat-ong": (
    <>
      <Backdrop tone="warm" />
      <Table y={TABLE} />
      <Glass x={150} y={TABLE} s={1.35} fill={C.honeyMid} />
      <Steam x={150} y={TABLE - 84} s={0.85} />
      <Fruit x={242} y={TABLE - 18} s={1.15} fill={C.green2} half />
      <Jar x={318} y={TABLE} s={0.92} fill={C.honey} />
    </>
  ),

  "tam-that": (
    <>
      <Backdrop tone="warm" />
      <Table y={TABLE} />
      <Cloth x={196} y={TABLE} s={1.05} />
      <Jar x={168} y={TABLE - 4} s={1.3} fill={C.clayMid} />
      <Spoon x={296} y={TABLE - 8} s={1} rot={-16} />
    </>
  ),

  "san-day": (
    <>
      <Backdrop />
      <Table y={TABLE} />
      <Glass x={140} y={TABLE} s={1.35} fill={C.white} />
      <Jar x={256} y={TABLE} s={1.15} fill={C.cream} />
      <Spoon x={352} y={TABLE - 8} s={0.9} rot={-14} />
    </>
  ),

  "hoa-du-du-ngam-mat-ong": (
    <>
      <Backdrop />
      <Table y={TABLE} />
      <Jar
        x={190}
        y={TABLE}
        s={1.65}
        fill={C.honey}
        contents={
          <>
            <Flower x={-12} y={-17} s={0.85} />
            <Flower x={12} y={-9} s={0.75} />
            <Flower x={-2} y={-28} s={0.65} />
          </>
        }
      />
      <Flower x={330} y={TABLE - 22} s={1.5} />
      <Flower x={62} y={TABLE - 14} s={1.1} />
    </>
  ),

  "mo-muoi-ngam-mat-ong": (
    <>
      <Backdrop tone="warm" />
      <Table y={TABLE} />
      <Cloth x={196} y={TABLE} s={1.1} fill={C.wood} />
      <Jar
        x={178}
        y={TABLE - 4}
        s={1.55}
        fill={C.honey}
        contents={
          <>
            <Fruit x={-11} y={-17} s={0.5} fill={C.honeyMid} />
            <Fruit x={11} y={-10} s={0.46} fill={C.honeyMid} />
            <Fruit x={-1} y={-28} s={0.42} fill={C.honeyMid} />
          </>
        }
      />
      <Fruit x={318} y={TABLE - 18} s={1.2} fill={C.honeyMid} />
    </>
  ),
};

export const hasScene = (id: string) => id in S;

/** Tranh minh hoạ của một bài; trả về null nếu bài đó chưa có cảnh. */
export function Illustration({ id, alt }: { id: string; alt: string }) {
  const scene = S[id];
  if (!scene) return null;
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={alt}
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      {scene}
    </svg>
  );
}

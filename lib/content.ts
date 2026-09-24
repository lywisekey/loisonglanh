import { IC, type IconName } from "./icons";

export const SITE = {
  brand: "Lối sống lành",
  name: "Lối sống lành",
  tagline: "Chia sẻ những điều giản dị để sống lành mỗi ngày.",
  description:
    "Những kinh nghiệm giản dị về ăn uống, vận động, giấc ngủ và chăm sóc cơ thể. Nội dung mang tính chia sẻ và tham khảo, không thay thế tư vấn của bác sĩ.",
  motto: "Ăn lành · Sống lành · Tập lành · Ngủ lành",
  /** Đổi thành domain thật sau khi deploy để sitemap/OG dùng URL tuyệt đối. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://loi-song-lanh.vercel.app",
  showYoutubeLink: true,
};

export const YOUTUBE_SEARCH =
  "https://www.youtube.com/results?search_query=v%E1%BA%A9y+tay+d%E1%BB%8Bch+c%C3%A2n+kinh+h%C6%B0%E1%BB%9Bng+d%E1%BA%ABn";

export type Category = {
  id: string;
  name: string;
  desc: string;
  intro: string;
  icon: IconName;
};

export const CATS: Category[] = [
  {
    id: "van-dong",
    name: "Vận động",
    desc: "Những bài tập và vận động đơn giản có thể thực hiện hàng ngày.",
    intro:
      "Không nhất thiết phải tập luyện quá nặng. Điều quan trọng là duy trì vận động đều đặn và tạo thành thói quen.",
    icon: "pulse",
  },
  {
    id: "ve-sinh",
    name: "Vệ sinh cá nhân",
    desc: "Những thói quen chăm sóc cơ thể theo hướng đơn giản, tự nhiên.",
    intro:
      "Những thói quen chăm sóc cơ thể theo hướng đơn giản, tự nhiên — được chia sẻ để tham khảo. Mỗi người có tình trạng da, tóc và răng miệng khác nhau.",
    icon: "droplet",
  },
  {
    id: "giac-ngu",
    name: "Giấc ngủ",
    desc: "Xây dựng thói quen ngủ nghỉ điều độ.",
    intro:
      "Ngủ đủ và đúng giờ là thói quen dễ duy trì nhất trong ngày. Dưới đây là nếp sinh hoạt được chia sẻ trong trang.",
    icon: "moon",
  },
  {
    id: "an-uong",
    name: "Ăn uống",
    desc: "Những nguyên tắc ăn uống và các loại thực phẩm thường được lựa chọn.",
    intro:
      "Những nguyên tắc dưới đây là kinh nghiệm ăn uống được chia sẻ. Không phải chế độ ăn bắt buộc cho tất cả mọi người.",
    icon: "bowl",
  },
  {
    id: "thao-moc",
    name: "Thảo mộc & Ngâm uống",
    desc: "Các thức uống và cách ngâm nguyên liệu được chia sẻ.",
    intro:
      "Một số thức uống quen thuộc và cách ngâm nguyên liệu được chia sẻ. Đây là phần kinh nghiệm tham khảo, không phải hướng dẫn điều trị bệnh.",
    icon: "jar",
  },
];

export const NOTE_GENERIC =
  "Đây là kinh nghiệm được chia sẻ để tham khảo, không phải phương pháp điều trị. Người đang điều trị bệnh, phụ nữ mang thai, trẻ nhỏ và người cao tuổi nên hỏi bác sĩ/dược sĩ trước khi áp dụng thường xuyên.";

export type Article = {
  id: string;
  cat: string;
  icon: IconName;
  title: string;
  group?: string;
  excerpt: string;
  summary: string;
  highlight?: string;
  ingredients?: string[];
  steps?: string[];
  usage?: string;
  youtube?: boolean;
  photoHint: string;
  shortNote?: string;
  notes: string[];
  tags: string[];
};

export const ARTICLES: Article[] = [
  {
    id: "vay-tay",
    cat: "van-dong",
    icon: "pulse",
    title: "Vẩy tay Dịch Cân Kinh – 15 phút",
    excerpt: "Một bài tập đơn giản, khoảng 15 phút mỗi ngày.",
    summary:
      "Đây là một bài tập đơn giản mà bạn có thể dành khoảng 15 phút mỗi ngày để thực hiện. Nếu chưa biết cách tập, có thể tìm video hướng dẫn trên YouTube và tập theo.",
    youtube: true,
    photoHint: "Ảnh: khoảng sân hoặc hiên nhà buổi sáng sớm",
    notes: [
      "Chỉ tập trong giới hạn thoải mái của cơ thể. Nếu có bệnh xương khớp, tim mạch hoặc đang trong quá trình điều trị, hãy hỏi bác sĩ về mức vận động phù hợp.",
      NOTE_GENERIC,
    ],
    tags: ["vẩy tay", "vận động", "thói quen"],
  },
  {
    id: "van-dong-tren-giuong",
    cat: "van-dong",
    icon: "bed",
    title: "Vận động nhẹ khi nằm trên giường",
    excerpt: "Vài động tác nhẹ nhàng khi nằm nghỉ.",
    summary:
      "Khi nằm nghỉ trên giường, có thể thực hiện một số động tác nhẹ nhàng như vuốt tóc, xoa tai và đưa hai tay chạm xuống đất/sàn theo cách phù hợp với tư thế của mình.",
    steps: [
      "Vuốt tóc nhẹ nhàng.",
      "Xoa hai vành tai.",
      "Đưa hai tay chạm xuống đất/sàn theo cách phù hợp với tư thế của mình.",
    ],
    photoHint: "Ảnh: căn phòng sáng nhẹ, giường gọn gàng",
    notes: [
      "Hiển thị ở đây như kinh nghiệm tham khảo, không phải phương pháp điều trị. Dừng lại nếu thấy khó chịu.",
      NOTE_GENERIC,
    ],
    tags: ["vận động", "nghỉ ngơi"],
  },

  {
    id: "tam-goi",
    cat: "ve-sinh",
    icon: "citrus",
    title: "Tắm gội",
    excerpt: "Hạn chế hóa chất, dùng chanh tươi hoặc nước chè tươi.",
    summary:
      "Kinh nghiệm được chia sẻ ở đây là hạn chế sử dụng các sản phẩm có nhiều hóa chất, xà phòng hoặc dầu gội; thay vào đó sử dụng chanh tươi hoặc nước chè tươi để tắm/gội.",
    ingredients: ["Chanh tươi", "Nước chè tươi"],
    photoHint: "Ảnh: chanh tươi và lá chè xanh bên chậu nước",
    shortNote: "Kinh nghiệm cá nhân — da và tóc mỗi người mỗi khác.",
    notes: [
      "Đây là kinh nghiệm cá nhân được chia sẻ để tham khảo. Mỗi người có tình trạng da và tóc khác nhau.",
      NOTE_GENERIC,
    ],
    tags: ["vệ sinh cá nhân", "chè tươi", "chanh"],
  },
  {
    id: "rua-mat",
    cat: "ve-sinh",
    icon: "droplet",
    title: "Rửa mặt",
    excerpt: "Rửa mặt bằng nước muối loãng.",
    summary: "Rửa mặt bằng nước muối loãng.",
    photoHint: "Ảnh: chậu nước và khăn bông sáng màu",
    notes: [
      "Chỉ pha loãng và dùng nhẹ nhàng. Nếu thấy khô, rát hoặc kích ứng thì nên dừng lại; da mỗi người mỗi khác.",
      NOTE_GENERIC,
    ],
    tags: ["vệ sinh cá nhân", "nước muối"],
  },
  {
    id: "rang-mieng",
    cat: "ve-sinh",
    icon: "tooth",
    title: "Chăm sóc răng miệng",
    excerpt: "Muối tinh, rượu cau và nạo lưỡi thường xuyên.",
    summary:
      "Đánh răng bằng muối tinh, súc miệng bằng rượu cau và nạo lưỡi thường xuyên.",
    ingredients: ["Muối tinh", "Rượu cau"],
    photoHint: "Ảnh: hũ muối tinh và quả cau trên mặt gỗ",
    shortNote: "Không thay thế việc khám và chăm sóc răng miệng chuyên nghiệp.",
    notes: [
      "Việc sử dụng muối hoặc rượu cau trực tiếp trong chăm sóc răng miệng có thể không phù hợp với tất cả mọi người. Không thay thế việc khám và chăm sóc răng miệng chuyên nghiệp.",
      NOTE_GENERIC,
    ],
    tags: ["răng miệng", "muối", "rượu cau"],
  },
  {
    id: "ngam-chan",
    cat: "ve-sinh",
    icon: "foot",
    title: "Ngâm chân trước khi ngủ",
    excerpt: "Ngâm chân với nước gừng trước khi đi ngủ.",
    summary: "Ngâm chân với nước gừng trước khi đi ngủ.",
    ingredients: ["Gừng tươi", "Nước ấm"],
    photoHint: "Ảnh: chậu gỗ, gừng tươi, hơi nước ấm",
    notes: [
      "Nước chỉ nên ấm vừa phải. Người có bệnh lý về tuần hoàn, tiểu đường hoặc có vết thương ở chân nên hỏi bác sĩ trước khi ngâm chân thường xuyên.",
      NOTE_GENERIC,
    ],
    tags: ["ngâm chân", "gừng", "giấc ngủ"],
  },

  {
    id: "ngu-som",
    cat: "giac-ngu",
    icon: "moon",
    title: "Ngủ sớm – thức dậy sớm",
    excerpt: "Nếp sinh hoạt 9 giờ tối – 4 giờ sáng.",
    highlight: "9 giờ tối đi ngủ – 4 giờ sáng thức dậy",
    summary:
      "Đây là một lịch sinh hoạt được chia sẻ trong trang như một kinh nghiệm về việc duy trì nếp sống đều đặn.",
    photoHint: "Ảnh: khung cửa sổ lúc trời còn sớm",
    notes: [
      "Giờ ngủ phù hợp khác nhau theo công việc, độ tuổi và thể trạng của từng người. Hãy điều chỉnh dần thay vì thay đổi đột ngột.",
      NOTE_GENERIC,
    ],
    tags: ["ngủ sớm", "giấc ngủ", "thói quen"],
  },
  {
    id: "han-che-man-hinh",
    cat: "giac-ngu",
    icon: "phoneOff",
    title: "Hạn chế điện thoại và tivi",
    excerpt: "Giảm thời gian màn hình vào buổi tối.",
    summary:
      "Buổi tối nên hạn chế thời gian sử dụng điện thoại, tivi và các thiết bị màn hình, đặc biệt trước giờ ngủ.",
    photoHint: "Ảnh: góc nhà buổi tối với đèn vàng ấm",
    notes: [NOTE_GENERIC],
    tags: ["giấc ngủ", "màn hình", "buổi tối"],
  },

  {
    id: "chuoi",
    cat: "an-uong",
    icon: "banana",
    title: "Chuối",
    group: "Trái cây",
    excerpt: "Ưu tiên chuối tây.",
    summary:
      "Ưu tiên chuối tây; theo kinh nghiệm được chia sẻ, không ưu tiên chuối ta.",
    photoHint: "Ảnh: nải chuối tây trên rổ tre",
    notes: [NOTE_GENERIC],
    tags: ["chuối", "trái cây", "ăn uống"],
  },
  {
    id: "han-che-duong",
    cat: "an-uong",
    icon: "sugarOff",
    title: "Hạn chế đường",
    group: "Đường",
    excerpt: "Không ăn đường hoặc hạn chế tối đa.",
    summary: "Không ăn đường hoặc hạn chế tối đa các thực phẩm chứa nhiều đường.",
    photoHint: "Ảnh: hũ thủy tinh và thìa gỗ trên nền vải mộc",
    notes: [NOTE_GENERIC],
    tags: ["đường", "ăn uống"],
  },
  {
    id: "ca-tom-tep",
    cat: "an-uong",
    icon: "fish",
    title: "Cá, tôm, tép",
    group: "Đạm động vật",
    excerpt: "Có thể ăn tôm, cá, moi đỏ/tép.",
    summary: "Có thể ăn tôm, cá, moi đỏ/tép.",
    photoHint: "Ảnh: mẻ cá, tôm, tép tươi trên rổ",
    notes: [NOTE_GENERIC],
    tags: ["cá", "tôm", "tép", "ăn uống"],
  },
  {
    id: "thit-ga",
    cat: "an-uong",
    icon: "plate",
    title: "Thịt gà",
    group: "Đạm động vật",
    excerpt: "Ưu tiên phần thịt trắng như lườn gà.",
    summary: "Ưu tiên phần thịt trắng như lườn gà.",
    photoHint: "Ảnh: đĩa thịt gà luộc thái lát",
    notes: [NOTE_GENERIC],
    tags: ["thịt gà", "ăn uống"],
  },
  {
    id: "thit-do",
    cat: "an-uong",
    icon: "plate",
    title: "Thịt đỏ",
    group: "Đạm động vật",
    excerpt: "Hạn chế thịt đỏ và thịt động vật bốn chân.",
    summary:
      "Hạn chế thịt đỏ và hạn chế các loại thịt động vật bốn chân như bò, bê... Thịt lợn có thể ăn nhưng nên ăn ít.",
    photoHint: "Ảnh: mâm cơm gia đình đơn giản",
    notes: [NOTE_GENERIC],
    tags: ["thịt đỏ", "ăn uống"],
  },
  {
    id: "rau-xanh",
    cat: "an-uong",
    icon: "leaf",
    title: "Rau xanh",
    group: "Rau",
    excerpt: "Ưu tiên nguồn rau sạch, rõ nguồn gốc.",
    summary:
      "Có thể ăn các loại rau thông thường. Ưu tiên nguồn rau sạch, rõ nguồn gốc và hạn chế thực phẩm có nguy cơ tồn dư hóa chất.",
    photoHint: "Ảnh: rổ rau xanh vừa rửa, ánh sáng tự nhiên",
    notes: [NOTE_GENERIC],
    tags: ["rau xanh", "ăn uống"],
  },
  {
    id: "dau-ngu-coc",
    cat: "an-uong",
    icon: "sprout",
    title: "Các loại đậu và ngũ cốc",
    group: "Đậu & ngũ cốc",
    excerpt: "Đỗ đen, đỗ xanh, đỗ đỏ, tương, gạo lứt.",
    summary:
      "Có thể sử dụng trong chế độ ăn hàng ngày tùy nhu cầu và khả năng phù hợp của mỗi người.",
    ingredients: ["Đỗ đen", "Đỗ xanh", "Đỗ đỏ", "Tương", "Gạo lứt"],
    photoHint: "Ảnh: các bát đậu và gạo lứt trên mặt gỗ",
    notes: [NOTE_GENERIC],
    tags: ["đỗ đen", "đỗ xanh", "đỗ đỏ", "tương", "gạo lứt"],
  },

  {
    id: "che-tuoi",
    cat: "thao-moc",
    icon: "cup",
    title: "Chè tươi",
    group: "Đồ uống",
    excerpt: "Uống nước chè tươi, chọn nguồn gốc rõ ràng.",
    summary:
      "Uống nước chè tươi. Nên lựa chọn chè có nguồn gốc rõ ràng, sạch và đáng tin cậy.",
    photoHint: "Ảnh: ấm và chén chè xanh trên bàn gỗ",
    notes: [NOTE_GENERIC],
    tags: ["chè tươi", "đồ uống"],
  },
  {
    id: "nuoc-chanh-mat-ong",
    cat: "thao-moc",
    icon: "citrus",
    title: "Nước chanh ấm với mật ong",
    group: "Đồ uống",
    excerpt: "Nước chanh ấm pha với mật ong.",
    summary: "Nước chanh ấm pha với mật ong.",
    ingredients: ["Chanh tươi", "Mật ong", "Nước ấm"],
    photoHint: "Ảnh: cốc nước chanh ấm, nửa quả chanh và lọ mật ong",
    notes: ["Không dành cho trẻ dưới 1 tuổi do có mật ong.", NOTE_GENERIC],
    tags: ["chanh", "mật ong", "đồ uống"],
  },
  {
    id: "tam-that",
    cat: "thao-moc",
    icon: "jar",
    title: "Tam thất bột",
    group: "Đồ uống",
    excerpt: "Pha 2 thìa nhỏ với nước để nguội, uống buổi sáng.",
    summary:
      "Pha 2 thìa nhỏ tam thất bột với một ít nước để nguội và uống vào buổi sáng.",
    ingredients: ["Tam thất bột", "Nước để nguội"],
    steps: [
      "Cho 2 thìa nhỏ tam thất bột vào cốc.",
      "Thêm một ít nước để nguội và khuấy tan.",
      "Uống vào buổi sáng.",
    ],
    photoHint: "Ảnh: hũ tam thất bột và thìa nhỏ",
    notes: [
      "Đây là kinh nghiệm sử dụng được chia sẻ. Tam thất có thể không phù hợp với một số người hoặc tương tác với thuốc đang sử dụng; người đang điều trị bệnh nên hỏi bác sĩ/dược sĩ trước khi dùng thường xuyên.",
    ],
    tags: ["tam thất", "đồ uống", "buổi sáng"],
  },
  {
    id: "san-day",
    cat: "thao-moc",
    icon: "cup",
    title: "Sắn dây lúc 9 giờ sáng hoặc 2 giờ chiều",
    group: "Đồ uống",
    excerpt: "Cách pha sắn dây từng bước.",
    summary:
      "Theo kinh nghiệm được chia sẻ, sắn dây được pha uống vào khoảng 9 giờ sáng hoặc 2 giờ chiều.",
    ingredients: ["1 thìa sắn dây", "Cốc khoảng 200ml", "Nước nguội và nước sôi"],
    steps: [
      "Cho 1 thìa sắn dây vào cốc khoảng 200ml.",
      "Đổ một ít nước vào và khuấy cho tan.",
      "Sau đó đun nước sôi và đổ vào cốc.",
      "Khuấy liên tục đến khi sắn dây chuyển sang dạng trong.",
    ],
    photoHint: "Ảnh: cốc sắn dây và hũ bột sắn dây",
    notes: ["Cẩn thận với nước sôi khi pha.", NOTE_GENERIC],
    tags: ["sắn dây", "đồ uống"],
  },
  {
    id: "hoa-du-du-ngam-mat-ong",
    cat: "thao-moc",
    icon: "jar",
    title: "Hoa đu đủ đực ngâm mật ong",
    group: "Ngâm uống",
    excerpt: "Cách ngâm và cách dùng theo kinh nghiệm.",
    summary:
      "Một cách ngâm nguyên liệu được chia sẻ để tham khảo, không phải hướng dẫn điều trị bệnh.",
    ingredients: ["Hoa đu đủ đực tươi", "Mật ong"],
    steps: [
      "Rửa sạch hoa đu đủ đực.",
      "Phơi cho hoa héo/khô.",
      "Cho hoa vào lọ sạch.",
      "Đổ mật ong ngập toàn bộ hoa.",
      "Đậy kín và bảo quản phù hợp.",
    ],
    usage: "Khi uống có thể pha/dùng với nước ấm hoặc uống nóng.",
    photoHint: "Ảnh: lọ thủy tinh ngâm hoa đu đủ đực với mật ong",
    notes: [
      "Không dành cho trẻ dưới 1 tuổi do có mật ong. Người dị ứng với thành phần hoặc đang có bệnh lý đặc biệt nên tham khảo chuyên gia y tế.",
      NOTE_GENERIC,
    ],
    tags: ["hoa đu đủ", "mật ong", "ngâm uống"],
  },
  {
    id: "mo-muoi-ngam-mat-ong",
    cat: "thao-moc",
    icon: "jar",
    title: "Mơ muối ngâm mật ong",
    group: "Ngâm uống",
    excerpt: "Công thức 3kg mơ – 1 lít mật ong.",
    summary: "Công thức ngâm được chia sẻ dưới đây là kinh nghiệm tham khảo.",
    ingredients: ["3kg mơ", "2 thìa muối", "1 lít mật ong", "0,5kg đường phèn"],
    steps: [
      "Rửa sạch mơ.",
      "Chuẩn bị lọ sạch.",
      "Cho mơ, muối, mật ong và đường phèn theo tỷ lệ trên.",
      "Ngâm cho đến khi có thể sử dụng.",
    ],
    usage: "Lấy một lượng phù hợp, hòa với nước ấm để uống.",
    photoHint: "Ảnh: lọ mơ ngâm mật ong bên khay gỗ",
    notes: [
      "Đường phèn nên lựa chọn loại có nguồn gốc rõ ràng.",
      "Không dành cho trẻ dưới 1 tuổi do có mật ong.",
      NOTE_GENERIC,
    ],
    tags: ["mơ", "mật ong", "đường phèn", "ngâm uống"],
  },
];

export const KEYWORDS = [
  "tam thất",
  "sắn dây",
  "hoa đu đủ",
  "mật ong",
  "mơ",
  "chè tươi",
  "ngâm chân",
  "ngủ sớm",
  "vẩy tay",
  "gạo lứt",
  "đỗ đen",
  "đỗ xanh",
  "ăn uống",
  "vệ sinh cá nhân",
];

export const PRINCIPLES: { no: string; text: string; icon: IconName }[] = [
  { no: "01", text: "Ăn đơn giản", icon: "bowl" },
  { no: "02", text: "Vận động đều", icon: "pulse" },
  { no: "03", text: "Ngủ đúng giờ", icon: "moon" },
  { no: "04", text: "Giữ cơ thể sạch sẽ", icon: "droplet" },
  { no: "05", text: "Ưu tiên thực phẩm có nguồn gốc rõ ràng", icon: "leaf" },
];

export const DISCLAIMER = [
  "Những nội dung trên website được tổng hợp và chia sẻ dưới góc độ kinh nghiệm cá nhân, kinh nghiệm dân gian và lối sống. Mục đích của trang là chia sẻ thông tin để tham khảo, không thay thế cho chẩn đoán, điều trị hoặc tư vấn của bác sĩ.",
  "Không nên tự ý ngừng thuốc, thay đổi thuốc hoặc bỏ qua việc khám và điều trị đang được chỉ định để áp dụng các phương pháp trên.",
  "Đặc biệt, người đang mang thai, trẻ nhỏ, người cao tuổi, người có bệnh nền, đang dùng thuốc hoặc có triệu chứng bất thường nên hỏi bác sĩ/dược sĩ trước khi áp dụng các phương pháp ăn uống, thảo dược hoặc ngâm uống thường xuyên.",
  "Nếu có triệu chứng cấp tính hoặc dấu hiệu nguy hiểm, cần tìm kiếm sự chăm sóc y tế phù hợp.",
];

/* ── Đường dẫn ────────────────────────────────────────────────────────── */

export const catHref = (id: string) => `/chu-de/${id}`;
export const articleHref = (id: string) => `/kinh-nghiem/${id}`;

/* ── Truy vấn ─────────────────────────────────────────────────────────── */

export const getCat = (id: string) => CATS.find((c) => c.id === id);
export const getArticle = (id: string) => ARTICLES.find((a) => a.id === id);
export const byCat = (id: string) => ARTICLES.filter((a) => a.cat === id);
export const pickArticles = (ids: string[]) =>
  ids.map((id) => getArticle(id)!).filter(Boolean);

export const catName = (id: string) =>
  id === "luu-y" ? "Lưu ý" : getCat(id)?.name ?? "";

export const iconPath = (name: IconName) => IC[name] ?? IC.leaf;

/** Bài liên quan: cùng chủ đề trước, rồi đến các chủ đề khác. */
export function relatedArticles(a: Article, limit = 3) {
  const same = ARTICLES.filter((x) => x.cat === a.cat && x.id !== a.id);
  const others = ARTICLES.filter((x) => x.cat !== a.cat);
  return same.concat(others).slice(0, limit);
}

/** Bỏ dấu tiếng Việt để tìm kiếm không phân biệt dấu. */
export const norm = (s: string) =>
  (s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();

export function searchArticles(q: string) {
  const needle = norm(q).trim();
  if (!needle) return [];
  return ARTICLES.filter((a) =>
    norm(
      [
        a.title,
        a.excerpt,
        a.summary,
        (a.tags || []).join(" "),
        catName(a.cat),
        (a.ingredients || []).join(" "),
      ].join(" "),
    ).includes(needle),
  );
}

/** Menu dùng chung cho header và footer. Không có "Trang chủ" — bấm logo là về. */
export const NAV = [
  ...CATS.map((c) => ({ label: c.name, href: catHref(c.id) })),
  { label: "Lưu ý", href: "/luu-y" },
];

import { ProductDetailClient } from "@/components/product-detail-client"

// Mock product data - 나중에 실제 데이터로 교체
const getProductById = (id: string) => {
  const products = {
    "1": {
      id: 1,
      name: "클래식 토트백",
      subtitle: "Classic Tote",
      description: "일상과 비즈니스에 완벽한 시그니처 토트백입니다. 최고급 이탈리아 가죽을 사용하여 45년 경력의 장인이 하나하나 수작업으로 제작합니다.",
      price: "₩1,200,000",
      originalPrice: "₩1,400,000",
      images: [
        "/luxury-leather-tote-bag-in-deep-navy.jpg",
        "/luxury-structured-leather-satchel-bag.jpg",
        "/luxury-handbag.png"
      ],
      colors: [
        { name: "딥 네이비", code: "#1a237e", available: true },
        { name: "클래식 블랙", code: "#000000", available: true },
        { name: "리치 브라운", code: "#5d4037", available: false }
      ],
      sizes: ["Small", "Medium", "Large"],
      category: "토트백",
      isNew: false,
      isBestseller: true,
      rating: 4.9,
      reviews: 127,
      features: [
        "프리미엄 이탈리아 가죽",
        "수작업 스티칭",
        "골드 하드웨어",
        "실크 라이닝",
        "분리 가능한 숄더 스트랩"
      ],
      dimensions: {
        width: "35cm",
        height: "28cm",
        depth: "15cm"
      },
      craftTime: "3-4주"
    },
    "2": {
      id: 2,
      name: "엘레강스 숄더백",
      subtitle: "Elegance Shoulder",
      description: "우아한 실루엣의 프리미엄 숄더백으로, 세련된 여성의 품격을 한층 돋보이게 합니다.",
      price: "₩980,000",
      originalPrice: "",
      images: [
        "/luxury-structured-leather-satchel-bag.jpg",
        "/premium-leather-crossbody-bag-in-cream.jpg"
      ],
      colors: [
        { name: "카멜 브라운", code: "#a0522d", available: true },
        { name: "클래식 블랙", code: "#000000", available: true },
        { name: "크림 화이트", code: "#f5f5dc", available: true }
      ],
      sizes: ["Medium"],
      category: "숄더백",
      isNew: true,
      isBestseller: false,
      rating: 4.8,
      reviews: 89,
      features: [
        "구조적 디자인",
        "조절 가능한 스트랩",
        "내부 지퍼 포켓",
        "마그네틱 클로저"
      ],
      dimensions: {
        width: "30cm",
        height: "25cm",
        depth: "12cm"
      },
      craftTime: "2-3주"
    }
  }

  return products[id as keyof typeof products] || products["1"]
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' }
  ]
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  return <ProductDetailClient product={product} />
}
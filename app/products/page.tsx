"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingBag, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getAssetPath } from "@/lib/utils"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "클래식 토트백",
      subtitle: "Classic Tote",
      description: "일상과 비즈니스에 완벽한 시그니처 토트백",
      price: "₩1,200,000",
      originalPrice: "₩1,400,000",
      image: "/luxury-leather-tote-bag-in-deep-navy.jpg",
      colors: ["네이비", "블랙", "브라운"],
      category: "토트백",
      isNew: false,
      isBestseller: true,
    },
    {
      id: 2,
      name: "엘레강스 숄더백",
      subtitle: "Elegance Shoulder",
      description: "우아한 실루엣의 프리미엄 숄더백",
      price: "₩980,000",
      image: "/luxury-structured-leather-satchel-bag.jpg",
      colors: ["카멜", "블랙", "크림"],
      category: "숄더백",
      isNew: true,
      isBestseller: false,
    },
    {
      id: 3,
      name: "골드 이브닝 클러치",
      subtitle: "Gold Evening Clutch",
      description: "특별한 순간을 위한 럭셔리 클러치",
      price: "₩750,000",
      image: "/elegant-gold-evening-clutch-handbag.jpg",
      colors: ["골드", "실버", "로즈골드"],
      category: "클러치",
      isNew: false,
      isBestseller: false,
    },
    {
      id: 4,
      name: "프리미엄 크로스바디",
      subtitle: "Premium Crossbody",
      description: "편안함과 스타일을 모두 갖춘 크로스바디백",
      price: "₩680,000",
      image: "/premium-leather-crossbody-bag-in-cream.jpg",
      colors: ["크림", "베이지", "핑크"],
      category: "크로스바디",
      isNew: true,
      isBestseller: false,
    },
  ]

  const categories = ["전체", "토트백", "숄더백", "클러치", "크로스바디"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-neutral-50/30">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                홈으로
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <Badge variant="outline" className="border-luxury-navy text-luxury-navy font-semibold mb-4">
              HANDCRAFTED COLLECTION
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-navy mb-6">
              르레브나 컬렉션
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              45년 장인정신으로 완성된 시대를 초월한 핸드메이드 럭셔리 핸드백을 만나보세요
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "전체" ? "default" : "outline"}
              className="rounded-full px-6 py-2 transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={getAssetPath(product.image)}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-luxury-gold text-luxury-navy font-semibold">
                      NEW
                    </Badge>
                  )}
                  {product.isBestseller && (
                    <Badge variant="secondary" className="bg-luxury-navy text-white">
                      BEST
                    </Badge>
                  )}
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-4 right-4 rounded-full bg-white/80 hover:bg-white transition-all duration-200"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <Badge variant="outline" className="text-xs mb-2">
                      {product.category}
                    </Badge>
                    <h3 className="text-xl font-serif font-bold text-luxury-navy">
                      {product.name}
                    </h3>
                    <p className="text-sm text-luxury-charcoal font-medium">
                      {product.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Colors */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-neutral-700">컬러:</span>
                  <div className="flex gap-1">
                    {product.colors.map((color, index) => (
                      <span key={index} className="text-xs text-neutral-600">
                        {color}
                        {index < product.colors.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-luxury-navy">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-neutral-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <Link href={`/products/${product.id}`}>
                    <Button className="bg-luxury-navy hover:bg-luxury-navy/90 text-white rounded-full gap-2">
                      <ShoppingBag className="w-4 h-4" />
                      상세보기
                    </Button>
                  </Link>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-4 pt-4 border-t border-neutral-200">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600 ml-2">(4.9)</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-luxury-navy to-luxury-navy/90 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url(/lerevena/luxury-leather-texture.jpg)`}} />
          <div className="absolute inset-0 bg-luxury-navy/80 rounded-3xl" />
          <div className="relative z-10">
            <h3 className="text-3xl font-serif mb-4 text-luxury-cream font-bold">
              마음에 드는 제품이 있으신가요?
            </h3>
            <p className="text-luxury-cream/90 mb-8 max-w-2xl mx-auto font-medium">
              전문가와 상담하여 당신만의 특별한 핸드백을 완성해보세요
            </p>

            <Button
              size="lg"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-bold px-12 py-6 rounded-full text-xl"
            >
              <ShoppingBag className="w-6 h-6 mr-3" />
              맞춤 상담 신청
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
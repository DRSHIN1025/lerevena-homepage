"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Star,
  Heart,
  ShoppingBag,
  ArrowLeft,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
  MessageCircle,
  Share2,
  Ruler,
  Palette
} from "lucide-react"
import Link from "next/link"
import { getAssetPath } from "@/lib/utils"

interface ProductDetailProps {
  product: {
    id: number
    name: string
    subtitle: string
    description: string
    price: string
    originalPrice?: string
    images: string[]
    colors: { name: string; code: string; available: boolean }[]
    sizes: string[]
    category: string
    isNew: boolean
    isBestseller: boolean
    rating: number
    reviews: number
    features: string[]
    dimensions: { width: string; height: string; depth: string }
    craftTime: string
  }
}

export function ProductDetailClient({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-neutral-50/30">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/products">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                컬렉션으로 돌아가기
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={isWishlisted ? "text-red-500" : ""}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
              <img
                src={getAssetPath(product.images[selectedImage])}
                alt={product.name}
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-luxury-gold text-luxury-navy font-semibold">
                  NEW
                </Badge>
              )}
              {product.isBestseller && (
                <Badge className="absolute top-4 right-4 bg-luxury-navy text-white">
                  BESTSELLER
                </Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-luxury-navy" : "border-neutral-200"
                  }`}
                >
                  <img
                    src={getAssetPath(image)}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-luxury-navy mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-luxury-charcoal font-medium mb-4">
                {product.subtitle}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-neutral-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-neutral-600">
                  {product.rating} ({product.reviews}개 리뷰)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-luxury-navy">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-neutral-500 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-neutral-700 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold text-luxury-navy flex items-center gap-2">
                <Palette className="w-4 h-4" />
                컬러 선택
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    disabled={!color.available}
                    className={`relative flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                      selectedColor === index
                        ? "border-luxury-navy bg-luxury-navy/5"
                        : "border-neutral-200 hover:border-neutral-300"
                    } ${!color.available ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <div
                      className="w-5 h-5 rounded-full border border-neutral-300"
                      style={{ backgroundColor: color.code }}
                    />
                    <span className="text-sm">{color.name}</span>
                    {!color.available && (
                      <span className="text-xs text-red-500">(품절)</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold text-luxury-navy flex items-center gap-2">
                <Ruler className="w-4 h-4" />
                사이즈 선택
              </h3>
              <div className="flex gap-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(index)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedSize === index
                        ? "border-luxury-navy bg-luxury-navy text-white"
                        : "border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-semibold text-luxury-navy">수량</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6">
              <Button
                size="lg"
                className="w-full bg-luxury-navy hover:bg-luxury-navy/90 text-white py-4 text-lg"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                장바구니 담기
              </Button>

              <Button
                size="lg"
                className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy py-4 text-lg font-bold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                맞춤 상담 신청
              </Button>
            </div>

            {/* Features */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-navy mb-4">제품 특징</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Services */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-lg bg-white shadow-sm">
                <Truck className="w-6 h-6 mx-auto mb-2 text-luxury-navy" />
                <p className="text-sm font-medium">무료배송</p>
                <p className="text-xs text-neutral-600">전국 무료</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white shadow-sm">
                <Shield className="w-6 h-6 mx-auto mb-2 text-luxury-navy" />
                <p className="text-sm font-medium">품질보증</p>
                <p className="text-xs text-neutral-600">2년 A/S</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white shadow-sm">
                <RotateCcw className="w-6 h-6 mx-auto mb-2 text-luxury-navy" />
                <p className="text-sm font-medium">교환/반품</p>
                <p className="text-xs text-neutral-600">30일 이내</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-20 max-w-7xl mx-auto">
          <Separator className="mb-8" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Specifications */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold text-luxury-navy mb-6">제품 사양</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">가로</span>
                    <span className="font-medium">{product.dimensions.width}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">세로</span>
                    <span className="font-medium">{product.dimensions.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">깊이</span>
                    <span className="font-medium">{product.dimensions.depth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">제작 기간</span>
                    <span className="font-medium">{product.craftTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">무게</span>
                    <span className="font-medium">약 680g</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Care Instructions */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold text-luxury-navy mb-6">관리 방법</h3>
                <div className="space-y-3 text-sm text-neutral-700">
                  <p>• 직사광선을 피해 서늘하고 건조한 곳에 보관하세요</p>
                  <p>• 물에 젖었을 경우 즉시 부드러운 천으로 닦아주세요</p>
                  <p>• 가죽 전용 크리너와 컨디셔너를 사용하세요</p>
                  <p>• 장기간 보관 시 모양을 유지할 수 있도록 신문지를 넣어주세요</p>
                  <p>• 정기적인 전문 관리를 권장합니다</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
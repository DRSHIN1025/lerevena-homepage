"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, MessageCircle, Palette, Scissors, Crown, Phone, Mail, Clock } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

export function CustomOrderSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const customServices = [
    {
      id: "bespoke",
      title: "완전 맞춤 제작",
      subtitle: "Bespoke Creation",
      description: "당신만의 유일한 핸드백을 처음부터 끝까지 함께 만들어갑니다",
      features: ["개인 상담 3회", "소재 선택", "디자인 스케치", "제작 과정 공유"],
      duration: "4-6주",
      price: "₩2,500,000~",
      icon: Crown,
      gradient: "from-luxury-gold/20 to-luxury-navy/10",
    },
    {
      id: "personalization",
      title: "개인화 서비스",
      subtitle: "Personalization",
      description: "기존 컬렉션에 당신만의 개성을 더해보세요",
      features: ["이니셜 각인", "컬러 변경", "하드웨어 선택", "내부 라이닝 커스텀"],
      duration: "2-3주",
      price: "₩150,000~",
      icon: Palette,
      gradient: "from-luxury-navy/20 to-luxury-gold/10",
    },
    {
      id: "repair",
      title: "수선 & 복원",
      subtitle: "Repair & Restoration",
      description: "소중한 가방을 새것처럼 되살려드립니다",
      features: ["무료 진단", "정밀 수선", "컬러 복원", "하드웨어 교체"],
      duration: "1-2주",
      price: "₩80,000~",
      icon: Scissors,
      gradient: "from-neutral-200/30 to-luxury-navy/10",
    },
  ]

  return (
    <section id="custom-order" className="py-24 bg-gradient-to-b from-background to-neutral-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-luxury-gold" />
            <Badge variant="outline" className="border-luxury-navy text-luxury-navy font-semibold">
              EXCLUSIVE SERVICE
            </Badge>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-navy leading-[1.2] mb-4">
              당신만의 특별한 이야기를
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-navy font-bold relative inline-block">
              함께 만들어갑니다
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-luxury-gold/40 rounded-full"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl text-luxury-charcoal leading-relaxed">
              45년 장인 정신으로 완성되는 세상에 하나뿐인 핸드백.
            </p>
            <p className="text-lg sm:text-xl text-luxury-charcoal leading-relaxed">
              당신의 라이프스타일과 취향을 완벽하게 반영한 작품을 만나보세요.
            </p>
            <div className="w-16 h-px bg-luxury-gold/30 mx-auto mt-6"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {customServices.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 bg-gradient-to-br ${service.gradient} backdrop-blur-sm ${
                  selectedService === service.id ? "ring-2 ring-luxury-gold shadow-xl scale-105" : ""
                }`}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-full bg-white/90 group-hover:bg-luxury-gold/20 transition-all duration-300 shadow-md">
                        <Icon className="w-7 h-7 text-luxury-navy group-hover:text-luxury-gold transition-colors" />
                      </div>
                      <Badge variant="secondary" className="text-sm font-semibold px-3 py-1">
                        {service.duration}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-luxury-navy bg-luxury-gold/25 px-4 py-2 rounded-full shadow-sm">
                        {service.price}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-serif text-luxury-navy mb-3 font-bold leading-tight">{service.title}</h3>
                    <p className="text-base text-luxury-gold font-bold mb-4 tracking-wide uppercase">{service.subtitle}</p>
                    <p className="text-base sm:text-lg text-luxury-charcoal mb-6 leading-relaxed font-medium">{service.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-base text-luxury-charcoal">
                        <div className="w-2 h-2 rounded-full bg-luxury-gold flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                </CardContent>
              </Card>
            )
          })}
        </div>


        {/* CTA Section */}
        <div className="bg-gradient-to-r from-luxury-navy to-luxury-navy/90 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url(${getAssetPath('/luxury-leather-texture.jpg')})`}} />
          <div className="absolute inset-0 bg-luxury-navy/80 rounded-3xl" />
          <div className="relative z-10">
            <h3 className="text-3xl font-serif mb-4 text-luxury-cream font-bold">지금 바로 전문가와 상담하세요</h3>
            <p className="text-luxury-cream/90 mb-8 max-w-2xl mx-auto font-medium">
              경험 많은 장인이 직접 상담해드립니다. 당신의 꿈을 현실로 만들어보세요.
            </p>

            <div className="flex justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-bold px-12 py-6 rounded-full text-xl"
              >
                <MessageCircle className="w-7 h-7 mr-3" />
                카카오톡 문의
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm text-luxury-cream/90 font-medium">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>consult@lerevena.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                <span>평일 10:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

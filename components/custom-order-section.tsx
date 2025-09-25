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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-luxury-gold" />
            <Badge variant="outline" className="border-luxury-navy text-luxury-navy font-semibold">
              EXCLUSIVE SERVICE
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-navy mb-6">
            당신만의 특별한 이야기를
            <br />
            <span className="text-luxury-navy font-bold relative">
              함께 만들어갑니다
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-luxury-gold/30 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            45년 장인 정신으로 완성되는 세상에 하나뿐인 핸드백. 당신의 라이프스타일과 취향을 완벽하게 반영한 작품을
            만나보세요.
          </p>
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-full bg-white/80 group-hover:bg-luxury-gold/20 transition-colors">
                        <Icon className="w-6 h-6 text-luxury-navy group-hover:text-luxury-gold transition-colors" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {service.duration}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-luxury-navy bg-luxury-gold/20 px-3 py-1 rounded-full">
                        {service.price}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif text-luxury-navy mb-2">{service.title}</h3>
                  <p className="text-sm text-luxury-charcoal font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-neutral-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                        {feature}
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

"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "김서연",
      location: "서울, 대한민국",
      text: "르레브나 가방의 품질과 장인정신은 정말 뛰어납니다. 2년 넘게 매일 사용하고 있는데도 새것처럼 보여요. 투자할 가치가 충분한 명품이에요.",
      image: "/professional-woman-with-handbag.jpg",
    },
    {
      name: "박지혜",
      location: "부산, 대한민국",
      text: "여러 명품 가방을 소유해봤지만, 르레브나만큼 세심한 디테일과 우아함을 갖춘 브랜드는 없었어요. 정말 만족스러운 구매였습니다.",
      image: "/elegant-woman-with-luxury-handbag.jpg",
    },
    {
      name: "이민정",
      location: "제주도, 대한민국",
      text: "전통적인 장인정신과 현대적인 디자인이 완벽하게 조화된 가방이에요. 어디를 가든 칭찬을 받고, 소장하는 기쁨이 큽니다.",
      image: "/stylish-woman-carrying-designer-handbag.jpg",
    },
  ]

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">고객 후기</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            전국의 고객들이 르레브나를 선택하는 이유를 확인해보세요
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="border-border/50 bg-gradient-to-br from-background to-muted/20">
                    <CardContent className="p-12 text-center">
                      <div className="flex items-center justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-accent fill-current" />
                        ))}
                      </div>

                      <p className="text-xl text-muted leading-relaxed mb-8 italic max-w-3xl mx-auto">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center justify-center">
                        <img
                          src={getAssetPath(testimonial.image || "/placeholder.svg")}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-6"
                        />
                        <div className="text-left">
                          <p className="text-lg font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-muted">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-accent scale-125"
                    : "bg-muted hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

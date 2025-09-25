import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden py-16 sm:py-24 mt-20 bg-luxury-cream">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-cream via-luxury-cream to-luxury-gold/10" />

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-luxury-navy mb-8 sm:mb-12 leading-[1.1] sm:leading-[1.2] text-balance">
          A Shining Value<br className="hidden sm:block" />
          <span className="block sm:inline"> in Your Dream</span>
        </h1>

        <div className="space-y-6 mb-12 sm:mb-16">
          <p className="text-lg sm:text-xl md:text-2xl text-luxury-charcoal font-light leading-relaxed px-4 sm:px-0">
            45년 장인의 손길로 완성한
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-luxury-charcoal font-light leading-relaxed px-4 sm:px-0 mb-2">
            시대를 초월한 핸드메이드 럭셔리
          </p>
          <div className="w-20 h-px bg-luxury-gold mx-auto my-8"></div>
          <p className="text-base sm:text-lg text-luxury-charcoal/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 italic">
            Timeless handmade luxury crafted by master artisans with 45 years of heritage
          </p>
        </div>

        <Link href="/products">
          <Button
            size="lg"
            className="bg-luxury-gold text-luxury-navy hover:bg-luxury-gold/90 px-10 sm:px-14 py-5 sm:py-7 text-base sm:text-lg font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
          >
            DISCOVER 르레브나
          </Button>
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 border border-luxury-gold/20 rounded-full" />
      <div className="absolute bottom-1/4 right-4 sm:right-10 w-12 sm:w-24 h-12 sm:h-24 border border-luxury-gold/30 rounded-full" />
    </section>
  )
}

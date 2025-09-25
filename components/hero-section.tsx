import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden py-8 sm:py-16">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted-foreground/5" />

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-4 sm:mb-6 leading-tight text-balance">
          A Shining Value in Your Dream
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted mb-3 sm:mb-4 font-light leading-relaxed px-4 sm:px-0">
          45년 장인의 손길로 완성한 시대를 초월한 핸드메이드 럭셔리
        </p>

        <p className="text-base sm:text-lg text-muted mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          Timeless handmade luxury crafted by master artisans with 45 years of heritage
        </p>

        <Link href="/products">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-medium tracking-wide"
          >
            DISCOVER 르레브나
          </Button>
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 border border-accent/20 rounded-full" />
      <div className="absolute bottom-1/4 right-4 sm:right-10 w-12 sm:w-24 h-12 sm:h-24 border border-accent/30 rounded-full" />
    </section>
  )
}

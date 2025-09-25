import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4 text-white">LEREVENA</h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              45년 장인의 손길로 완성한 시대를 초월한 핸드메이드 럭셔리.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Timeless handmade luxury crafted with 45 years of expertise.
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-luxury-gold">Stay Connected</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-luxury-gold"
                />
                <Button className="bg-luxury-gold text-black hover:bg-luxury-gold/90 font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-luxury-gold">Collections</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-luxury-gold transition-colors">
                  Tote Bags
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-luxury-gold transition-colors">
                  Evening Bags
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-luxury-gold transition-colors">
                  Crossbody Bags
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-luxury-gold transition-colors">
                  Satchels
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-luxury-gold">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Seoul, South Korea</p>
              <p>+82 2-1234-5678</p>
              <p className="text-blue-400 hover:text-blue-300 transition-colors">info@lerevena.com</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 LEREVENA. All rights reserved. Crafted with passion in Seoul.
          </p>
        </div>
      </div>
    </footer>
  )
}

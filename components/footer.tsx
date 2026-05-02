import Image from "next/image"
import Link from "next/link"

const quickLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "عن المركز" },
  { href: "#services", label: "خدماتنا" },
  { href: "#projects", label: "مشاريعنا" },
  { href: "#contact", label: "تواصل معنا" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-icon.png"
                alt="شعار مركز البنيان"
                width={60}
                height={60}
                className="object-contain bg-white rounded-lg p-1 transition-transform duration-500 hover:rotate-180"
              />
              <div>
                <p className="text-sm text-white/70">وزارة الدفاع</p>
                <h3 className="font-bold">مركز البنيان للتقنية والصناعات الهندسية</h3>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md">
              قريباً
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">تواصل معنا</h4>
            <ul className="space-y-3 text-white/70">
              <li>مصراته، ليبيا</li>
              <li>وزارة الدفاع</li>
              <li>قريباً</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} مركز البنيان للتقنية والصناعات الهندسية. جميع الحقوق محفوظة.
            </p>
            <p className="text-white/50 text-sm">
              وزارة الدفاع - ليبيا
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

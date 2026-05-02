"use client"

import { Mail, MapPin, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    title: "الهاتف",
    value: "+218xxxxxxxxxx",
    description: "متاحون للرد على استفساراتكم"
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "info@bctei.ly",
    description: "راسلونا في أي وقت"
  },
  {
    icon: MapPin,
    title: "العنوان",
    value: "مصراته، ليبيا",
    description: "وزارة الدفاع"
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "09:00 ص - 03:00 م",
    description: "الأحد إلى الخميس"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold mb-2">تواصل معنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            نسعد بتواصلكم معنا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            فريقنا جاهز للإجابة على استفساراتكم وتقديم الدعم اللازم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">أرسل لنا رسالة</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">الاسم الكامل</label>
                      <Input placeholder="أدخل اسمك" className="bg-muted/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">البريد الإلكتروني</label>
                      <Input type="email" placeholder="example@email.com" className="bg-muted/50" dir="ltr" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">رقم الهاتف</label>
                    <Input type="tel" placeholder="+966 XX XXX XXXX" className="bg-muted/50" dir="ltr" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">الموضوع</label>
                    <Input placeholder="موضوع الرسالة" className="bg-muted/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">الرسالة</label>
                    <Textarea placeholder="اكتب رسالتك هنا..." className="bg-muted/50 min-h-32" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted group hover:from-primary/10 hover:to-secondary/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-primary font-medium text-sm">{item.value}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-2 text-primary/50" />
                <p>موقعنا على الخريطة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

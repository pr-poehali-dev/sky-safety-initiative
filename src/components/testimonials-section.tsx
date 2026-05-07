import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Icon from "@/components/ui/icon"

const testimonials = [
  {
    name: "Александр Петров",
    role: "Владелец коттеджа, Севастополь",
    initials: "АП",
    content:
      "SmartCom сделали нам отопление и тёплые полы в коттедже 280 м². Сроки выдержали день в день, качество на высшем уровне. Инженер на связи даже после сдачи объекта — всегда отвечает на вопросы.",
    type: "client",
  },
  {
    name: "Наталья Ким",
    role: "Архитектор, студия NK Design",
    initials: "НК",
    content:
      "Работаю со SmartCom уже 3 года. Единственная компания, которая реально понимает архитектурные ограничения и находит инженерные решения, не уродующие интерьер. Рекомендую всем коллегам.",
    type: "partner",
  },
  {
    name: "Игорь Семёнов",
    role: "Генеральный директор, СК «Крымстрой»",
    initials: "ИС",
    content:
      "Передаём SmartCom весь инженерный раздел на наших жилых объектах. Документация в полном порядке, сроки соблюдают, исполнительная сдаётся вовремя. Надёжный партнёр.",
    type: "partner",
  },
]

const typeLabel: Record<string, string> = {
  client: "Клиент",
  partner: "Партнёр",
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-geist uppercase tracking-widest font-semibold">Отзывы</span>
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-orbitron mt-3">Нам доверяют</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-geist">
            Что говорят наши клиенты и партнёры о работе со SmartCom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up hover:border-orange-500/30 transition-all duration-300" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-orange-400 fill-orange-400" />
                    ))}
                  </div>
                  <span className="text-xs bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-1 rounded-full font-geist">
                    {typeLabel[testimonial.type]}
                  </span>
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed italic font-geist text-sm">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-orange-500/20 text-orange-400 font-semibold text-sm">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-orange-400 font-geist text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground font-geist">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

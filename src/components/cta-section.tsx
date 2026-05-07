import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-orange-500/10 via-background to-blue-900/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="slide-up">
          <span className="text-orange-500 text-sm font-geist uppercase tracking-widest font-semibold">Начать сотрудничество</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-orbitron mt-4 text-balance">
            Рассчитайте стоимость вашего проекта
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto font-geist">
            Оставьте заявку — инженер перезвонит в течение часа, ответит на все вопросы и бесплатно выедет на объект
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600 pulse-button text-lg px-8 py-4 font-geist border-0"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-4 font-geist bg-transparent"
            >
              <Icon name="Users" size={20} className="mr-2" />
              Стать партнёром
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground font-geist">
            {[
              { icon: "Phone", text: "Ответим за 1 час" },
              { icon: "MapPin", text: "Бесплатный выезд" },
              { icon: "Shield", text: "Гарантия 3 года" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon name={item.icon} size={16} className="text-orange-500" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

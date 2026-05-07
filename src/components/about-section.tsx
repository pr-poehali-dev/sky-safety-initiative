import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const partners = [
  { type: "Архитекторы", icon: "PenTool", desc: "Проектируем инженерию под авторские концепции" },
  { type: "Дизайнеры", icon: "Palette", desc: "Прячем коммуникации, сохраняя дизайн-решения" },
  { type: "Риелторы", icon: "Home", desc: "Повышаем ценность объектов для ваших клиентов" },
  { type: "Застройщики", icon: "Building2", desc: "Закрываем инженерный раздел на субподряде" },
  { type: "Генподрядчики", icon: "HardHat", desc: "Надёжный партнёр на любом этапе стройки" },
]

export function AboutSection() {
  return (
    <section id="ecosystem" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-geist uppercase tracking-widest font-semibold">Партнёрство</span>
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron mt-3">Экосистема SmartCom</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-geist">
            Одна экосистема — максимум возможностей. Объединяем профессионалов строительной отрасли Крыма для создания лучшего результата для каждого клиента
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {partners.map((partner, index) => (
            <div key={index} className="p-5 rounded-xl border border-border hover:border-orange-500/40 bg-background transition-all duration-300 group text-center slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-500/20 transition-colors">
                <Icon name={partner.icon} size={22} className="text-orange-500" fallback="Users" />
              </div>
              <h3 className="text-white font-semibold font-geist mb-2 text-sm">{partner.type}</h3>
              <p className="text-muted-foreground text-xs font-geist leading-relaxed">{partner.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent rounded-2xl border border-orange-500/20 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white font-orbitron mb-4">
                Станьте частью экосистемы SmartCom
              </h3>
              <p className="text-muted-foreground font-geist leading-relaxed mb-6">
                Получайте партнёрское вознаграждение с каждого реализованного проекта. Мы берём на себя всю инженерную часть — вы фокусируетесь на своей экспертизе.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Партнёрское вознаграждение", "Приоритетный выезд", "Техподдержка 24/7"].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-orange-400 font-geist">
                    <Icon name="Check" size={14} className="text-orange-500" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-geist border-0 text-base px-8 py-3">
                Присоединиться к экосистеме
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

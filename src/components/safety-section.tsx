import Icon from "@/components/ui/icon"

const advantages = [
  { icon: "ShieldCheck", title: "9 лет на рынке Крыма", desc: "Работаем с 2015 года. Знаем все особенности климата и строительства полуострова" },
  { icon: "Users", title: "Собственная команда", desc: "Только штатные сертифицированные инженеры, никаких случайных субподрядчиков" },
  { icon: "FileCheck", title: "Работа по проекту", desc: "Проектируем каждый объект индивидуально, не используем типовые схемы" },
  { icon: "Clock", title: "Соблюдение сроков", desc: "Фиксируем сроки в договоре и придерживаемся их — с неустойкой за задержку" },
  { icon: "Wrench", title: "Гарантия 3 года", desc: "Предоставляем официальную гарантию на все виды монтажных работ" },
  { icon: "HeadphonesIcon", title: "Сервис после сдачи", desc: "Техническое обслуживание, диагностика и устранение неисправностей круглый год" },
  { icon: "Layers", title: "Полный цикл", desc: "От проекта до сдачи — один подрядчик, одна ответственность, без перекладывания вины" },
  { icon: "TrendingUp", title: "Экосистема партнёров", desc: "Работаем в экосистеме с лучшими архитекторами и дизайнерами Крыма" },
]

export function SafetySection() {
  return (
    <section id="advantages" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-geist uppercase tracking-widest font-semibold">Наши преимущества</span>
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron mt-3">Почему выбирают SmartCom</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-geist">
            8 весомых причин доверить нам инженерию вашего объекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <div key={index} className="p-6 rounded-xl border border-border hover:border-orange-500/40 bg-card transition-all duration-300 group slide-up" style={{ animationDelay: `${index * 0.07}s` }}>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Icon name={item.icon} size={22} className="text-orange-500" fallback="CheckCircle" />
              </div>
              <h3 className="text-white font-semibold font-geist mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-geist leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

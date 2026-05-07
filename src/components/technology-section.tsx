import Icon from "@/components/ui/icon"

const steps = [
  { icon: "Phone", title: "Заявка", desc: "Оставляете заявку онлайн или по телефону — отвечаем в течение часа" },
  { icon: "MapPin", title: "Выезд", desc: "Инженер выезжает на объект для осмотра и замеров (бесплатно)" },
  { icon: "FileText", title: "Проект", desc: "Разрабатываем полный проект со спецификацией и сметой" },
  { icon: "CheckSquare", title: "Согласование", desc: "Утверждаем проект с вами, при необходимости согласовываем с надзором" },
  { icon: "Wrench", title: "Монтаж", desc: "Выполняем монтаж в срок, поэтапно с приёмкой каждого этапа" },
  { icon: "Award", title: "Сдача", desc: "Сдаём объект, передаём исполнительную документацию и гарантийный паспорт" },
]

export function TechnologySection() {
  return (
    <section id="how-we-work" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-geist uppercase tracking-widest font-semibold">Процесс работы</span>
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron mt-3">Как мы работаем</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-geist">
            6 понятных шагов от первого звонка до сдачи готового объекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-4 p-6 rounded-xl border border-border hover:border-orange-500/40 transition-all duration-300 bg-background/50 group slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Icon name={step.icon} size={20} className="text-orange-500" fallback="Circle" />
                </div>
              </div>
              <div>
                <div className="text-xs text-orange-500/60 font-geist mb-1 uppercase tracking-wider">Шаг {index + 1}</div>
                <h3 className="text-white font-semibold font-geist mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-geist leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Отопление и котельные",
    description: "Проектирование и монтаж систем отопления любой сложности: от квартиры до промышленного объекта. Котельные под ключ.",
    icon: "Flame",
    badge: "Популярно",
  },
  {
    title: "Вентиляция и кондиционирование",
    description: "Приточно-вытяжные системы, рекуперация, мультизональные кондиционеры для комфортного микроклимата.",
    icon: "Wind",
    badge: "Эффективно",
  },
  {
    title: "Водоснабжение и канализация",
    description: "Полный цикл монтажа водопровода и канализации: от проекта до подключения. Работаем с любыми объёмами.",
    icon: "Droplets",
    badge: "Под ключ",
  },
  {
    title: "Тёплые полы",
    description: "Водяные и электрические тёплые полы с умным управлением. Равномерный прогрев и экономия до 30% на отоплении.",
    icon: "Layers",
    badge: "Комфорт",
  },
  {
    title: "Умный дом",
    description: "Автоматизация инженерных систем: управление климатом, освещением и безопасностью со смартфона.",
    icon: "Smartphone",
    badge: "Smart",
  },
  {
    title: "Проектирование",
    description: "Разработка полного пакета проектной документации, BIM-моделирование, согласование с надзорными органами.",
    icon: "FileText",
    badge: "Документы",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-geist uppercase tracking-widest font-semibold">Наши направления</span>
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron mt-3">Полный спектр инженерных систем</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-geist">
            Проектируем и монтируем все инженерные системы вашего объекта — в Крыму и Севастополе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up hover:border-orange-500/40 cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <Icon name={feature.icon} size={24} className="text-orange-500" fallback="Zap" />
                  </div>
                  <Badge variant="secondary" className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground font-geist">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed font-geist">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
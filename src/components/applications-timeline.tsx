import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Для владельцев домов",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed font-geist">
            Строите или ремонтируете частный дом или коттедж? Мы возьмём на себя все инженерные системы — от проекта до сдачи объекта. Работаем с объектами от 35 до 1000+ м².
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-orange-400 text-sm font-geist">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Комплексное проектирование всех инженерных систем
            </div>
            <div className="flex items-center gap-3 text-orange-400 text-sm font-geist">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Монтаж отопления, вентиляции, водоснабжения и умного дома
            </div>
            <div className="flex items-center gap-3 text-orange-400 text-sm font-geist">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Гарантия и сервисное обслуживание после сдачи
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Для архитекторов и дизайнеров",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed font-geist">
            Мы — надёжный инженерный партнёр для архитекторов и дизайнеров интерьеров. Решаем технические задачи любой сложности, не нарушая ваш дизайн-концепт.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-orange-400 text-sm font-geist">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Проектирование под авторский дизайн интерьера
            </div>
            <div className="flex items-center gap-3 text-orange-400 text-sm font-geist">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Скрытая прокладка коммуникаций без нарушения концепции
            </div>
            <div className="flex items-center gap-3 text-orange-400 text-sm font-geist">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Партнёрское вознаграждение с каждого проекта
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Для застройщиков и генподрядчиков",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed font-geist">
            Берём на субподряд инженерный раздел любого строительного проекта — от согласования проекта до полной сдачи с гарантией.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-orange-400 text-sm font-geist">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Работа по BIM-проектам и рабочей документации
            </div>
            <div className="flex items-center gap-3 text-orange-400 text-sm font-geist">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Соблюдение сроков и бюджета
            </div>
            <div className="flex items-center gap-3 text-orange-400 text-sm font-geist">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Исполнительная документация и сдача в надзорные органы
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="audience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-geist uppercase tracking-widest font-semibold">Для кого мы работаем</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 mt-3">Ваш надёжный инженерный партнёр</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-geist">
            SmartCom работает как с частными заказчиками, так и с профессиональными участниками строительного рынка Крыма
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}

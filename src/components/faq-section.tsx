import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "В каких городах Крыма вы работаете?",
      answer:
        "Работаем по всему Крыму: Симферополь, Севастополь, Ялта, Алушта, Евпатория, Феодосия, Керчь и все районы полуострова. Выезд инженера на объект бесплатный в радиусе 50 км от Симферополя.",
    },
    {
      question: "Сколько стоит проект инженерных систем?",
      answer:
        "Стоимость проектирования зависит от площади объекта и перечня систем. В среднем — от 150 руб/м². Для получения точного расчёта оставьте заявку, инженер свяжется с вами в течение часа.",
    },
    {
      question: "Какие гарантии вы предоставляете?",
      answer:
        "Предоставляем официальную гарантию 3 года на все виды монтажных работ. Гарантия фиксируется в договоре. После сдачи объекта доступно сервисное обслуживание и техническая поддержка.",
    },
    {
      question: "Как долго длится монтаж?",
      answer:
        "Сроки зависят от объёма работ. Инженерия частного дома 150–200 м² занимает в среднем 3–6 недель. Сроки обязательно фиксируются в договоре с неустойкой за нарушение.",
    },
    {
      question: "Можно ли заказать только проектирование без монтажа?",
      answer:
        "Да, мы разрабатываем проектную документацию как самостоятельную услугу. Вы получаете полный комплект чертежей, спецификацию оборудования и смету — для работы с любым подрядчиком.",
    },
    {
      question: "Как стать партнёром экосистемы SmartCom?",
      answer:
        "Заполните форму на странице партнёрства или позвоните нам. Мы работаем с архитекторами, дизайнерами, риелторами, застройщиками и генподрядчиками. Партнёры получают вознаграждение с каждого реализованного проекта.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-geist uppercase tracking-widest font-semibold">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron mt-3">Частые вопросы</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-geist">
            Ответы на популярные вопросы о наших услугах, условиях работы и партнёрстве
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-orange-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-orange-400 font-geist px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-geist">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

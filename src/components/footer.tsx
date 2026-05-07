import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-[hsl(220,25%,5%)] border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
                <Icon name="Zap" size={16} className="text-white" />
              </div>
              <h2 className="font-orbitron text-2xl font-bold text-white">
                Smart<span className="text-orange-500">Com</span>
              </h2>
            </div>
            <p className="font-geist text-gray-400 mb-4 max-w-md text-sm leading-relaxed">
              Умные инженерные системы для вашего дома и бизнеса в Крыму. Проектирование и монтаж под ключ с 2015 года.
            </p>
            <div className="space-y-2 text-sm font-geist text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={14} className="text-orange-500" />
                <span>+7 (978) 000-00-00</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={14} className="text-orange-500" />
                <span>info@smartmontage.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={14} className="text-orange-500" />
                <span>Симферополь, Крым</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-geist text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              {[
                { label: "Отопление и котельные", href: "#services" },
                { label: "Вентиляция", href: "#services" },
                { label: "Водоснабжение", href: "#services" },
                { label: "Тёплые полы", href: "#services" },
                { label: "Умный дом", href: "#services" },
                { label: "Проектирование", href: "#services" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-geist text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-geist text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              {[
                { label: "Портфолио", href: "#portfolio" },
                { label: "Экосистема", href: "#ecosystem" },
                { label: "Партнёрам", href: "#ecosystem" },
                { label: "FAQ", href: "#faq" },
                { label: "Контакты", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-geist text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-orange-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-geist text-gray-500 text-sm">© 2025 SmartCom. Все права защищены.</p>
            <div className="flex space-x-6">
              <a href="#" className="font-geist text-gray-500 hover:text-orange-500 text-sm transition-colors duration-200">
                Политика конфиденциальности
              </a>
              <a href="#" className="font-geist text-gray-500 hover:text-orange-500 text-sm transition-colors duration-200">
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

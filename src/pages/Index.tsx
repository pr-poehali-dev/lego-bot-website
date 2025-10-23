import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    {
      icon: "MessageSquare",
      title: "Разработка чат-ботов",
      description: "Умные боты для Telegram, WhatsApp, VK с интеграцией ИИ",
      features: ["Автоворонки", "CRM интеграция", "Аналитика"],
    },
    {
      icon: "TrendingUp",
      title: "SMM продвижение",
      description: "Комплексное продвижение в социальных сетях",
      features: ["Контент-план", "Таргет", "Аналитика"],
    },
    {
      icon: "Zap",
      title: "Автоматизация",
      description: "Настройка автоматических процессов и интеграций",
      features: ["API интеграции", "Webhook", "Сценарии"],
    },
  ];

  const team = [
    { name: "Александр", role: "Lead Developer", avatar: "👨‍💻" },
    { name: "Мария", role: "SMM Manager", avatar: "👩‍💼" },
    { name: "Дмитрий", role: "Bot Architect", avatar: "🧑‍🔧" },
    { name: "Анна", role: "Designer", avatar: "👩‍🎨" },
  ];

  const cases = [
    {
      title: "Автосалон Premium",
      result: "+320% заявок",
      description: "Чат-бот для записи на тест-драйв",
      tags: ["Telegram Bot", "CRM"],
    },
    {
      title: "Фитнес-клуб Energy",
      result: "+180% охват",
      description: "SMM кампания в Instagram",
      tags: ["SMM", "Таргет"],
    },
    {
      title: "Доставка еды Fast",
      result: "-40% время обработки",
      description: "Автоматизация приёма заказов",
      tags: ["Bot", "Автоматизация"],
    },
  ];

  const benefits = [
    { icon: "Rocket", title: "Быстрый старт", text: "Запуск за 2 недели" },
    { icon: "Shield", title: "Гарантия качества", text: "3 месяца поддержки" },
    { icon: "Users", title: "Опытная команда", text: "50+ проектов" },
    { icon: "BarChart", title: "Рост метрик", text: "До 300% ROI" },
  ];

  const reviews = [
    {
      name: "Игорь Петров",
      company: "CEO Premium Auto",
      text: "Чат-бот окупился за 2 месяца. Заявки идут круглосуточно!",
      rating: 5,
    },
    {
      name: "Елена Смирнова",
      company: "Маркетолог Energy Fitness",
      text: "Охват вырос в 2 раза, клиенты довольны контентом",
      rating: 5,
    },
  ];

  const prices = [
    {
      title: "Старт",
      price: "от 50 000₽",
      features: [
        "Простой чат-бот",
        "До 3 сценариев",
        "Базовая аналитика",
        "1 месяц поддержки",
      ],
      popular: false,
    },
    {
      title: "Бизнес",
      price: "от 120 000₽",
      features: [
        "Умный бот с ИИ",
        "CRM интеграция",
        "SMM кампания",
        "3 месяца поддержки",
      ],
      popular: true,
    },
    {
      title: "Премиум",
      price: "от 250 000₽",
      features: [
        "Полная автоматизация",
        "Все интеграции",
        "Комплексный SMM",
        "6 месяцев поддержки",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-stone-100">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-secondary/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                <Icon name="Box" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-foreground">
                IT КОМНHБДА
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {["Услуги", "Команда", "Кейсы", "Цены", "Контакты"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 flex justify-center gap-2">
            <div className="w-16 h-16 bg-primary rounded-xl shadow-2xl transform rotate-6 flex items-center justify-center">
              <Icon name="Blocks" className="text-white" size={32} />
            </div>
            <div className="w-16 h-16 bg-secondary rounded-xl shadow-2xl transform -rotate-12 flex items-center justify-center">
              <Icon name="MessageSquare" className="text-white" size={32} />
            </div>
            <div className="w-16 h-16 bg-primary rounded-xl shadow-2xl transform rotate-3 flex items-center justify-center">
              <Icon name="TrendingUp" className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Строим ваш бизнес
            <br />
            <span className="text-primary">как ЛЕГО</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Разрабатываем чат-ботов и продвигаем в соцсетях.
            <br />
            Каждый блок работает на результат
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105 rounded-xl px-8 py-6 text-lg"
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать проект
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary hover:bg-secondary/20 rounded-xl px-8 py-6 text-lg"
            >
              <Icon name="PlayCircle" className="mr-2" size={20} />
              Смотреть кейсы
            </Button>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши <span className="text-primary">блоки услуг</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Собираем решение под ваши задачи
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="border-2 border-secondary/30 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 group rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon
                      name={service.icon as any}
                      className="text-white"
                      size={32}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-sm"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="команда" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наша <span className="text-primary">команда</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Профессионалы своего дела
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <Card
                key={idx}
                className="border-2 border-secondary/30 hover:border-primary/50 transition-all hover:shadow-xl rounded-2xl overflow-hidden group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="кейсы" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши <span className="text-primary">кейсы</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Результаты говорят сами за себя
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, idx) => (
              <Card
                key={idx}
                className="border-2 border-secondary/30 hover:border-primary/50 transition-all hover:shadow-2xl rounded-2xl overflow-hidden group"
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-xl p-4 mb-6 group-hover:bg-primary/20 transition-colors">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {caseItem.result}
                    </h3>
                    <p className="text-lg font-semibold">{caseItem.title}</p>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {caseItem.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {caseItem.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="rounded-lg px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Почему <span className="text-primary">выбирают нас</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-2xl bg-white/50 border-2 border-secondary/30 hover:border-primary/50 transition-all hover:shadow-xl group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Icon
                    name={benefit.icon as any}
                    className="text-white"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Что говорят <span className="text-primary">клиенты</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, idx) => (
              <Card
                key={idx}
                className="border-2 border-secondary/30 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="text-primary fill-primary"
                        size={20}
                      />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{review.text}"</p>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {review.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Тарифы и <span className="text-primary">цены</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите оптимальное решение
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((price, idx) => (
              <Card
                key={idx}
                className={`border-2 rounded-2xl overflow-hidden relative ${
                  price.popular
                    ? "border-primary shadow-2xl shadow-primary/20 scale-105"
                    : "border-secondary/30"
                }`}
              >
                {price.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white rounded-lg px-3 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{price.title}</h3>
                  <p className="text-4xl font-bold text-primary mb-6">
                    {price.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon
                          name="CheckCircle"
                          className="text-primary"
                          size={20}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full rounded-xl py-6 ${
                      price.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-secondary hover:bg-secondary/90"
                    }`}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Начнём <span className="text-primary">проект?</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку и мы свяжемся с вами
          </p>
          <Card className="border-2 border-secondary/30 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Ваше имя</label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Иван Иванов"
                    className="rounded-xl border-2 border-secondary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="ivan@example.com"
                    className="rounded-xl border-2 border-secondary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    className="rounded-xl border-2 border-secondary/30 focus:border-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 rounded-xl py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="Box" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold">IT КОМНHБДА</span>
          </div>
          <p className="text-white/70 mb-6">
            Чат-боты и продвижение в соцсетях
          </p>
          <div className="flex gap-6 justify-center mb-6">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
            >
              <Icon name="Send" size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
            >
              <Icon name="Instagram" size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
            >
              <Icon name="Mail" size={20} />
            </a>
          </div>
          <p className="text-sm text-white/50">
            © 2024 IT КОМНHБДА. Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
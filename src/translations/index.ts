import { useCallback } from 'react';

export type Language = 'en' | 'bg';

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations = {
  en: {
    // Hero
    'hero.tagline': 'Turning Ideas into\nIntelligent Code',
    'hero.role.1': 'Full-stack developer',
    'hero.role.2': 'AI enthusiast',
    'hero.subtitle.rest': 'crafting systems that adapt to humans—not the other way around.',
    'hero.intro': "Hey there! 👋 I'm Huseyin, a developer obsessed with bridging innovation and practicality. Whether it's building AI assistants that anticipate needs or designing recommendation systems that actually get your taste (no, Morbius isn't an Oscar winner), I focus on tech that feels effortless.",
    'hero.current': "Currently honing my expertise in machine learning and scalable systems while delivering real-world solutions that make a difference. From smart home-finding platforms to intuitive movie recommendation engines, I build tools that enhance how we interact with technology.",
    'hero.connect': "Let's connect and create something unforgettable! Whether you're looking to collaborate on a project or just want to geek out about the latest in tech, I'm always excited to connect with fellow innovators.",
    'hero.scroll': 'Scroll to explore',
    'hero.backToTop': 'Back to top',
    
    // Skills
    'skills.title': ' Skills & Expertise',
    'skills.technical': ' Technical Skills',
    'skills.tools': ' Tools & Technologies',
    'skills.soft': ' Soft Skills',
    'skills.level': ' Level',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.viewAll': 'View All Projects',
    'projects.status.completed': 'Completed',
    'projects.status.in-progress': 'In Progress',
    'projects.viewDemo': 'View Demo',
    'projects.viewCode': 'View Code',
    'projects.note': 'Note: Demo links are currently unavailable as projects are in development. Please check the code on GitHub.',
    'projects.filter.all': 'All',
    'projects.filter.web': 'Web',
    'projects.filter.ai': 'AI',
    'projects.filter.other': 'Other',
    'projects.filter.mobile': 'Mobile',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': "Let's collaborate on something amazing",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
    'contact.location': 'Location',
    'contact.location.value': 'Burgas, Bulgaria',
    'contact.floating.tooltip': 'Contact Me',
    
    // Navigation
    'nav.home': 'Home',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.toggleTheme': 'Toggle theme',
    'nav.toggleLang': 'Switch to Bulgarian',

    // Tech Stack
    'tech.python': 'Machine Learning & Data Analysis',
    'tech.aiml': 'Neural Networks & Deep Learning',
    'tech.csharp': '.NET Development & Desktop Apps',

    // Social Links
    'social.github': 'View my projects on GitHub',
    'social.linkedin': 'Connect with me on LinkedIn',
    'social.email': 'Send me an email',

    // Achievements
    'achievement.welcome.title': 'Welcome Explorer! 👋',
    'achievement.welcome.desc': "You've begun your journey through my portfolio.",
    'achievement.curious.title': 'Getting Curious! 🔍',
    'achievement.curious.desc': "You've discovered 25% of my work.",
    'achievement.halfway.title': 'Halfway There! 🌟',
    'achievement.halfway.desc': "You've explored 50% of my portfolio.",
    'achievement.deep.title': 'Deep Dive! 🤿',
    'achievement.deep.desc': "You've explored 75% of my work. Impressive!",
    'achievement.master.title': 'Portfolio Master! 🏆',
    'achievement.master.desc': "You've seen it all! Thanks for your interest!",

    // Random Facts
    'facts.ai.text': 'The movie recommendation system processes over 1000 data points to find your perfect match! 🎬',
    'facts.assistant.text': 'Our AI assistant can understand context from over 10 previous messages to maintain coherent conversations. 🤖',
    'facts.tech.text': "The portfolio site you're viewing uses React with Emotion for styled components! 🎨",
  },
  bg: {
    // Hero
    'hero.tagline': 'Превръщам идеите си в\nИнтелигентен Код',
    'hero.role.1': 'Full-stack разработчик',
    'hero.role.2': 'AI ентусиаст',
    'hero.subtitle.rest': 'създаващ системи, които се адаптират към хората, а не обратното.',
    'hero.intro': "Здравейте! 👋 Аз съм Хюсеин, разработчик, вдъхновен от съчетаването на иновации и практичност. Независимо дали става дума за създаване на AI асистенти, които предвиждат нуждите, или за разработване на системи за препоръки, които наистина разбират вкуса ви (не, Морбиус не е носител на Оскар), фокусът ми е върху технологии, които работят без усилие.",
    'hero.current': "В момента усъвършенствам експертизата си в машинното обучение и мащабируемите системи, създавайки реални решения, които правят разлика. От платформи за умно търсене на дом до интуитивни системи за препоръки на филми, разработвам инструменти, които подобряват начина ни на взаимодействие с технологиите.",
    'hero.connect': "Нека се свържем и създадем нещо незабравимо! Независимо дали търсите сътрудничество по проект или просто искате да обсъдим последните технологични новости, винаги се вълнувам да се свързвам с други иноватори.",
    'hero.scroll': 'Превъртете за повече',
    'hero.backToTop': 'Към началото',
    
    // Skills
    'skills.title': 'Умения и Експертиза',
    'skills.technical': ' Технически Умения',
    'skills.tools': ' Инструменти и Технологии',
    'skills.soft': ' Меки Умения',
    'skills.level': ' Ниво',
    
    // Projects
    'projects.title': 'Избрани Проекти',
    'projects.viewAll': 'Всички Проекти',
    'projects.status.completed': 'Завършен',
    'projects.status.in-progress': 'В Процес',
    'projects.viewDemo': 'Виж Демо',
    'projects.viewCode': 'Виж Кода',
    'projects.note': 'Забележка: Демо връзките не са налични, тъй като проектите са в разработка. Моля, проверете кода в GitHub.',
    'projects.filter.all': 'Всички',
    'projects.filter.web': 'Уеб',
    'projects.filter.ai': 'AI',
    'projects.filter.other': 'Други',
    'projects.filter.mobile': 'Мобилни',
    
    // Contact
    'contact.title': 'Свържете се със мен!',
    'contact.subtitle': 'Нека създадем нещо невероятно заедно',
    'contact.name': 'Име',
    'contact.email': 'Имейл',
    'contact.message': 'Съобщение',
    'contact.send': 'Изпрати',
    'contact.sending': 'Изпращане...',
    'contact.success': 'Съобщението е изпратено успешно!',
    'contact.error': 'Грешка при изпращане. Моля, опитайте отново.',
    'contact.location': 'Локация',
    'contact.location.value': 'Бургас, България',
    'contact.floating.tooltip': 'Свържете се с мен',
    
    // Navigation
    'nav.home': 'Начало',
    'nav.skills': 'Умения',
    'nav.projects': 'Проекти',
    'nav.contact': 'Контакти',
    'nav.toggleTheme': 'Смяна на тема',
    'nav.toggleLang': 'Switch to English',

    // Tech Stack
    'tech.python': 'Машинно обучение и Анализ на данни',
    'tech.aiml': 'Невронни мрежи и Дълбоко обучение',
    'tech.csharp': '.NET Разработка и Десктоп приложения',

    // Social Links
    'social.github': 'Вижте проектите ми в GitHub',
    'social.linkedin': 'Свържете се с мен в LinkedIn',
    'social.email': 'Изпратете ми имейл',

    // Achievements
    'achievement.welcome.title': 'Добре дошли, Изследовател! 👋',
    'achievement.welcome.desc': 'Започнахте пътешествието си през моето портфолио.',
    'achievement.curious.title': 'Любопитство! 🔍',
    'achievement.curious.desc': 'Открихте 25% от работата ми.',
    'achievement.halfway.title': 'На половината път! 🌟',
    'achievement.halfway.desc': 'Разгледахте 50% от портфолиото ми.',
    'achievement.deep.title': 'Дълбоко гмуркане! 🤿',
    'achievement.deep.desc': 'Разгледахте 75% от работата ми. Впечатляващо!',
    'achievement.master.title': 'Портфолио Майстор! 🏆',
    'achievement.master.desc': 'Видяхте всичко! Благодаря за интереса!',

    // Random Facts
    'facts.ai.text': 'Системата за препоръки на филми обработва над 1000 точки от данни, за да намери перфектното съвпадение! 🎬',
    'facts.assistant.text': 'Нашият AI асистент може да разбира контекст от над 10 предишни съобщения за поддържане на смислени разговори. 🤖',
    'facts.tech.text': 'Портфолио сайтът, който разглеждате, използва React с Emotion за стилизирани компоненти! 🎨',
  }
} as const;

type FlattenObject<T> = {
  [K in keyof T]: T[K] extends object
    ? { [P in keyof T[K]]: T[K][P] }[keyof T[K]]
    : T[K];
};

export type TranslationKey = keyof FlattenObject<typeof translations.en>;

export const useTranslation = (language: Language) => {
  const t = useCallback((key: TranslationKey): string => {
    return translations[language][key] || key;
  }, [language]);

  return { t };
}; 
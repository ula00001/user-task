import {ReactComponent as IconAnalytic} from '../utils/menuIcons/analytic.svg';
import {ReactComponent as IconProfile} from '../utils/menuIcons/profile.svg';
import {ReactComponent as IconModeration} from '../utils/menuIcons/moderation.svg';
import {ReactComponent as IconChat} from '../utils/menuIcons/chat.svg';
import {ReactComponent as IconBanner} from '../utils/menuIcons/banner.svg';
import {ReactComponent as IconTeam} from '../utils/menuIcons/team.svg';
import {ReactComponent as IconBlog} from '../utils/menuIcons/blog.svg';
import {ReactComponent as IconExchangeRates} from '../utils/menuIcons/exchangeRates.svg';
import {ReactComponent as IconExit} from '../utils/menuIcons/exit.svg';

export const sidebarMenuList = [
  {id: 10, icon: IconAnalytic, title: 'Аналитика', path: '/analytic'},
  {id: 11, icon: IconProfile, title: 'Профиль', path: '/profile'},
  {id: 12, icon: IconModeration, title: 'Модерация', path: '/moderation'},
  {id: 13, icon: IconChat, title: 'Чаты', path: '/chat'},
  {id: 14, icon: IconBanner, title: 'Баннеры', path: '/banner'},
  {id: 15, icon: IconTeam, title: 'Команда', path: '/team'},
  {id: 16, icon: IconBlog, title: 'Блог', path: '/blog'},
  {id: 17, icon: IconExchangeRates, title: 'Курс валют', path: '/exchange'},
  {id: 18, icon: IconExit, title: 'Выйти', path: '/'},
];

export const usersList = [
  {
    "id": 100,
    "name": "Артем Иванов",
    "email": "artem@gmail.com",
    "permissions": [
      "Блог",
      "Аналитика"
    ],
    "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    "id": 200,
    "name": "Лена Новикова",
    "email": "lenkan@gmail.com",
    "permissions": [
      "Администратор"
    ],
    "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  },
  {
    "id": 300,
    "name": "Максим Иванов",
    "email": "maksiim@gmail.com",
    "permissions": [
      "Акции",
      "Модерация объявлений",
      "Тех. поддержка"
    ],
    "image": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
  },
  {
    "id": 400,
    "name": "Айжулдыз Кошкинбай",
    "email": "aizhzk@gmail.com",
    "permissions": [
      "Обращение клиентов"
    ],
    "image": "https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg"
  },
]
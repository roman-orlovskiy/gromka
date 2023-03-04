import MainPage from './pages/MainPage.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import StartupsPage from './pages/StartupsPage.vue';
import PricesPage from './pages/PricesPage.vue';
import ContactsPage from './pages/ContactsPage.vue';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioPage,
  },
  {
    path: '/startups',
    name: 'startups',
    component: StartupsPage,
  },
  {
    path: '/prices',
    name: 'prices',
    component: PricesPage,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage,
  },
];

export default routes;

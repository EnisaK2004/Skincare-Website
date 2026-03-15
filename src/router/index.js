import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import RoutineView from '../views/RoutineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/brendovi',
      name: 'brands',
      component: () => import('../views/BrandsView.vue'),
    },
    {
      path: '/proizvodi',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/gift-cards',
      name: 'giftcards',
      component: () => import('../views/GiftCardView.vue'),
    },

    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
    {
      path: '/popusti',
      name: 'Popusti',
      component: () => import('@/views/ProductsView.vue'),
      props: { onlyDiscounted: true },
    },
    {
      path: '/routine',
      component: RoutineView,
    },
  ],
})

export default router

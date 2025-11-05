import { createRouter, createWebHistory } from 'vue-router'

import InviteView from '../views/InviteView.vue'
import VerifyView from '../views/VerifyView.vue'
import RsvpView from '../views/RsvpView.vue'
import GiftView from '../views/GiftView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/invite/:id',
      name: 'invite',
      component: InviteView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/verify/:id',
      name: 'verify',
      component: VerifyView
    },
    {
      path: '/rsvp/:id',
      name: 'rsvp',
      component: RsvpView
    },
    {
      path: '/gift',
      name: 'gift',
      component: GiftView
    }
  ]
})

export default router

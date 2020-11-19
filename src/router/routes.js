
const routes = [
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'search', component: () => import('pages/Search.vue') },
      { path: 'favorite', component: () => import('pages/Favorite.vue') },
      { path: 'chat', component: () => import('pages/Chat.vue') },
      { path: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'test', component: () => import('pages/ARTest.vue') },
      { path: 'messages', component: () => import('pages/chat/Messages.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auth/Signin.vue') },
      { path: 'email', component: () => import('pages/auth/Email.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

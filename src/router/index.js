import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    // {
    //   path: '/allRecipes',
    //   name: 'allRecipes',
    //   component: () => import('../views/HomeView.vue')
    // },
    {
      path: '/favourites',
      name: 'favourites',
      component: () => import('../views/FavouritesView.vue'),
    },
    {
      path: '/addRecipe',
      name: 'addRecipe',
      component: () => import('../views/AddRecipeView.vue'),
    },
    {
      path: '/recipeDetails/:id',
      name: 'recipeDetails',
      component: () => import('../views/RecipeDetailsView.vue'),
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue'),
    }
  ]
})

export default router

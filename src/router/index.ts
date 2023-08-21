import { ERoutes } from "@constants/routes";
import { Dashboard, Landing, Login } from "@pages";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: ERoutes.LANDING,
      component: Landing,
    },
    {
      path: ERoutes.DASHBOARD,
      component: Dashboard,
    },
    {
      path: ERoutes.LOGIN,
      component: Login,
    },
  ],
});

export default router;

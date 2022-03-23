import Vue from "vue";
import VueRouter from "vue-router";
import WA001 from "../views/WA001View.vue";
import WA002 from "../views/WA002View.vue";
import Details from "../components/Details.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/wa001",
    name: "WA001",
    component: WA001,
  },
  {
    path: "/wa002",
    name: "WA002",
    component: WA002,
  },
  {
    path: "/details/:sha",
    name: "details",
    component: Details,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.replace("wa001");
export default router;

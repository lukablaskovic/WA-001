import Vue from "vue";
import VueRouter from "vue-router";
import WA001 from "../views/WA001View.vue";
import WA002 from "../views/WA002View.vue";
import WABLIC01 from "../views/WA-BLIC-01.vue";
import Details from "../components/Details.vue";
import BookDetails from "../components/BookDetails.vue";

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
    path: "/wa-blic-01",
    name: "WA-BLIC-01",
    component: WABLIC01,
  },
  {
    path: "/details/:sha",
    name: "details",
    component: Details,
    props: true,
  },
  {
    path: "/book-details/:url",
    name: "book-details",
    component: BookDetails,
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

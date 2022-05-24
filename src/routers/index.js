import { createWebHistory, createRouter } from "vue-router";
import TableData from "@/pages/TableData.vue";
import MapPage from "@/pages/MapPage.vue";

const routes = [
  {
    path: "/task1",
    name: "TableData",
    component: TableData,
  },
  {
    path: "/task2",
    name: "MapPage",
    component: MapPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
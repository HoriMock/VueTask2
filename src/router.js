import Vue from "vue";
import Router from "vue-router";
import First from "./views/First.vue";
import Second from "./views/Second.vue";
import Third from "./views/Third.vue";
import Result from "./views/Result.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: First },
    { path: "/second", component: Second },
    { path: "/third", component: Third },
    { path: "/result", component: Result },
  ],
});

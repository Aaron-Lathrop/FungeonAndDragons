import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import AdventureLog from "../views/AdventureLog";
import Characters from "../views/Characters";
import VueRouter from "vue-router";

Vue.use(Router);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/adventures",
		name: "adventures",
		component: AdventureLog,
	},
	{
		path: "/characters",
		name: "characters",
		component: Characters,
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{ path: "*", component: Home },
];

const router = new VueRouter({
	// mode: "history",
	hash: true,
	transitionOnLoad: true,
	root: "/",
	routes,
});
export default router;

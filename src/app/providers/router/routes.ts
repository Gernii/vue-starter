import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "home",
		component: () => import("@/pages/home-view"),
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import("@/pages/about-view"),
	},
];

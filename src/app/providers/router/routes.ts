import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
	{
		path: "/:lang?",
		children: [
			{
				path: "home",
				name: "home",
				component: () => import("@/example/pages/task-list"),
			},
		],
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

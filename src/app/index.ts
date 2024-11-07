import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import { router } from "./providers/router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

export { app };

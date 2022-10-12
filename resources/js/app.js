import "./bootstrap";
import router from "./router/index";
// import { registerBaseComponents } from "./helpers/registerBaseComponents";
import Layout from "./layout/Layout.vue";
import Navigation from "./components/Navigation.vue";
import FooterContent from "./components/Footer/Footer.vue";

import { createApp } from "vue";

const app = createApp({});

// registerBaseComponents(app);

app.component("nav-bar", Navigation);
app.component("footer-content", FooterContent);
app.component("layout-component", Layout);

app.use(router);

app.mount("#app");

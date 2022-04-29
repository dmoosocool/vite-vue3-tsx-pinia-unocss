import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App';
import router, { useRouter } from './router';

async function bootstrap() {
  const app = createApp(App);

  // Configure Pinia
  app.use(createPinia());

  // Configure Router
  useRouter(app);

  // Mount when the route is ready
  await router.isReady();
  app.mount('#app', true);

  if (import.meta.env.DEV) {
    window.__APP__ = app;
  }
}

bootstrap();

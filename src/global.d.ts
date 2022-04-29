import type { App } from 'vue';

declare global {
  interface Window {
    __APP__: App<Element>;
  }
}

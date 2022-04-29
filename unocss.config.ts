import { presetAttributify, presetUno } from 'unocss'

export default {
  shortcuts: [{ hstack: 'flex items-center' }, { vstack: 'flex flex-col' }],
  presets: [
    presetAttributify({ prefix: 'rss3:' }),
    presetUno({
      extract: {
        include: ['src/**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules', '.git'],
      },
    }),
  ],
}

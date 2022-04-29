import { presetAttributify, presetUno } from 'unocss'

export const prefix = 'dmoo:'
export default {
  shortcuts: [{ hstack: 'flex items-center' }, { vstack: 'flex flex-col' }],
  presets: [
    presetAttributify({ prefix }),
    presetUno({
      extract: {
        include: ['src/**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules', '.git'],
      },
    }),
  ],
}

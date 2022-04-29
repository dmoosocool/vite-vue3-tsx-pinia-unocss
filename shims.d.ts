import type { AttributifyNames } from '@unocss/preset-attributify'

declare module 'vue' {
  type Prefix = 'rss3:' // change it to your prefix
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface HTMLAttributes
    extends Partial<Record<AttributifyNames<Prefix>, string>> {}
}

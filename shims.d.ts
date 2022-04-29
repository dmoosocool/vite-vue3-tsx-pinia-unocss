import type { AttributifyNames } from '@unocss/preset-attributify'
import { prefix } from 'unocss.config'
declare module 'vue' {
  type Prefix = typeof prefix
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface HTMLAttributes
    extends Partial<Record<AttributifyNames<Prefix>, string>> {}
}

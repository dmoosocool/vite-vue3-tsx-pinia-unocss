import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/counter'

export default defineComponent({
  setup() {
    const store = useStore()
    const { counter, name } = storeToRefs(store)
    return {
      counter,
      name,
    }
  },
  render() {
    return (
      <div class="container mx-auto">
        <div class="hstack">
          <h1>Hello {this.name} ~</h1>
          <p>your counter: {this.counter}</p>
        </div>

        <div class="hstack" rss3:justify="between">
          <button class="plus-btn" onClick={() => (this.counter += 1)}>
            +
          </button>
          <button class="minus-btn" onClick={() => (this.counter -= 1)}>
            -
          </button>
        </div>
      </div>
    )
  },
})

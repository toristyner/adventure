import { type Writable, writable } from "svelte/store";
import { TrailEnum } from "../types";

interface SelectedStore extends Writable<TrailEnum[]> {
  clear: () => void
  select: (trailId: TrailEnum) => void,
  unselect: (trailId: TrailEnum) => void
}

function createSelectedStore(): SelectedStore {

  const store = writable<TrailEnum[]>([TrailEnum.AT])
  const { subscribe, set, update } = store

  return {
    subscribe,
    set,
    update,
    clear: () => {
      set([])
    },
    select: (trailId: TrailEnum) => {
      update((s) => {
        if (!s.includes(trailId)) {
          s.push(trailId)
        }
        return s
      })
    },
    unselect: (trailId: TrailEnum) => {
      update(s => s.filter((id) => id !== trailId))
    }
  }
}

const selectedStore = createSelectedStore()

export default selectedStore

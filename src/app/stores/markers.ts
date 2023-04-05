import { type Writable, writable } from "svelte/store";
import type { TrailMarker } from "../types";

interface Markers {
  [index: string]: TrailMarker
}

interface MarkerStore extends Writable<Markers> {
  updateMarker: (marker: TrailMarker) => void,
  addMarker: (marker: TrailMarker) => void,
  removeMarker: (marker: TrailMarker) => void
}

function createMarkerStore(): MarkerStore {

  const store = writable<Markers>({})
  const { subscribe, set, update } = store

  return {
    subscribe,
    set,
    update,
    addMarker: (marker) => {
      update(s => {
        s[marker.id] = marker
        return s
      })
    },
    updateMarker: (marker) => {
      update(s => {
        s[marker.id] = {...marker }
        return s
      })
    },
    removeMarker: (marker) => {
      update(s => {
        delete s[marker.id]
        return s
      })
    }
  }
}

const markerStore = createMarkerStore()

export default markerStore
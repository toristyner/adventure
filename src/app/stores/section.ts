import { type Writable, writable } from "svelte/store";
import { TrailEnum, type Section, SectionStatus } from "../types.js";

const init = {
  "id": "mySection",
  "trailId": TrailEnum.AT,
  "name": "My Section",
  "start": {
    "lat": 40.35134040343956,
    "lng": -77.09301081996473
  },
  "status": SectionStatus.Planned,
  "end": {
    "lat": 40.43278709600742,
    "lng": -76.85748524656059
  }
}

interface SectionStore extends Writable<Section | undefined> {
  clear: () => void
  start: (section: Section) => void,
  end: (section: Section) => void
}

function createSectionStore(): SectionStore {

  const store = writable<Section | undefined>(init)
  const { subscribe, set, update } = store

  return {
    subscribe,
    set,
    update,
    clear: () => set(undefined),
    start: (section: Section) => {
      update(s => ({
        ...s,
        ...section
      }))
    },
    end: (section: Section) => {
      update(s => ({
        ...s,
        ...section
      }))
    },
  }
}

const sectionStore = createSectionStore()

export default sectionStore

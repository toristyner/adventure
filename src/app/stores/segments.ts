import { type Writable, writable } from "svelte/store";
import type { TrailSegment } from "../types";
import { HikingDirection } from "../types";
import { SegmentStatus } from "../types";

interface Segments {
  [index: string]: TrailSegment
}

interface SegmentStore extends Writable<Segments> {
  updateSegment: (segment: TrailSegment) => void,
  addSegment: (segment: TrailSegment) => void,
  addSegmentMarker: (segmentId: string, markerId: string) => void,
  removeSegment: (segment: TrailSegment) => void,
  removeSegmentMarker: (segmentId: string, markerId: string) => void
}

const initialStore = {
  'segment-a': {
    id: 'segment-a',
    name: 'Segment A',
    hikingDirection: HikingDirection.NOBO,
    status: SegmentStatus.Planned
  }
}

function createSegmentStore(): SegmentStore {

  const store = writable<Segments>(initialStore)
  const { subscribe, set, update } = store

  return {
    subscribe,
    set,
    update,
    addSegment: (segment) => {
      update(s => {
        s[segment.id] = segment
        return s
      })
    },
    addSegmentMarker: (segmentId, markerId) => {
      update(s => {
        s[segmentId].markers = [...s[segmentId].markers, markerId]
        return s
      })
    },
    updateSegment: (segment) => {
      update(s => {
        s[segment.id] = {...segment }
        return s
      })
    },
    removeSegment: (segment) => {
      update(s => {
        delete s[segment.id]
        return s
      })
    },
    removeSegmentMarker: (segmentId, markerId) => {
      update(s => {
        s[segmentId].markers = s[segmentId].markers.filter(id => id !== markerId)
        return s
      })
    }
  }
}

const segmentStore = createSegmentStore()

export default segmentStore
import { type Writable, writable } from 'svelte/store';
import { MarkerType, TrailEnum, type TrailMarker } from '../types';

interface Markers {
	[index: string]: TrailMarker;
}

const initial = {
	'marker-a': {
		id: 'marker-a',
		label: 'Start',
		type: MarkerType.TrailStart,
		trailId: TrailEnum.AT,
		segmentId: 'segment-a',
		position: {
			lat: 41.2022292,
			lng: -74.4006157
		}
	},
	'marker-b': {
		id: 'marker-b',
		label: 'End',
		type: MarkerType.TrailEnd,
		trailId: TrailEnum.AT,
		segmentId: 'segment-a',
		position: {
			lat: 41.2706951,
			lng: -74.0922502
		}
	}
};
interface MarkerStore extends Writable<Markers> {
	updateMarker: (marker: TrailMarker) => void;
	addMarker: (marker: TrailMarker) => void;
	removeMarker: (marker: TrailMarker) => void;
}

function createMarkerStore(): MarkerStore {
	const store = writable<Markers>(initial);
	const { subscribe, set, update } = store;

	return {
		subscribe,
		set,
		update,
		addMarker: (marker) => {
			update((s) => {
				s[marker.id] = marker;
				return s;
			});
		},
		updateMarker: (marker) => {
			update((s) => {
				s[marker.id] = { ...marker };
				return s;
			});
		},
		removeMarker: (marker) => {
			update((s) => {
				delete s[marker.id];
				return s;
			});
		}
	};
}

const markerStore = createMarkerStore();

export default markerStore;

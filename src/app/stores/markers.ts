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
	},
	'marker-c': {
		id: 'marker-c',
		label: 'Camp',
		type: MarkerType.Camp,
		trailId: TrailEnum.AT,
		segmentId: 'segment-a',
		position: {
			lat: 41.2710615,
			lng: -74.2600976
		}
	},
	'marker-d': {
		id: 'marker-d',
		label: 'Cat Rocks',
		type: MarkerType.ViewPoint,
		trailId: TrailEnum.AT,
		segmentId: 'segment-a',
		position: {
			lat: 41.2458058,
			lng: -74.2826127
		}
	},
	'marker-e': {
		id: 'marker-e',
		label: 'Water',
		type: MarkerType.Water,
		trailId: TrailEnum.AT,
		segmentId: 'segment-a',
		position: {
			lat: 41.264911,
			lng: -74.1133004
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

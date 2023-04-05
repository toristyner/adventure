import { type Trail, TrailEnum } from '../types';
import { type Writable, writable } from 'svelte/store';

type AllTrails = {
	[key in TrailEnum]: Trail;
};

const trails: AllTrails = {
	[TrailEnum.AT]: {
		id: TrailEnum.AT,
		name: 'Appalachian Trail (AT)',
		data: [
			{
				type: 'geoJson',
				url: 'https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/Appalachian_National_Scenic_Trail/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson'
			}
		],
		segments: ['segment-a'],
		markers: ['marker-a', 'marker-b'],
		overview: {
			center: { lat: 39.7972686, lng: -77.5403369 },
			zoom: 6
		}
	},
	[TrailEnum.PCT]: {
		id: TrailEnum.PCT,
		name: 'Pacific Crest Trail (PCT)',
		data: [
			{
				type: 'geoJson',
				url: 'https://services5.arcgis.com/ZldHa25efPFpMmfB/arcgis/rest/services/PCTA_Centerline/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson'
			}
		],
		segments: [],
		markers: [],
		overview: {
			center: { lat: 41.934667, lng: -122.9802233 },
			zoom: 5
		}
	}
};

interface TrailStore extends Writable<AllTrails> {
	addTrailMarker: (trailId: TrailEnum, markerId: string) => void;
	addTrailSegment: (trailId: TrailEnum, segmentId: string) => void;
	removeTrailMarker: (trailId: TrailEnum, markerId: string) => void;
	removeTrailSegment: (trailId: TrailEnum, segmentId: string) => void;
}

function createTrailStore(): TrailStore {
	const store = writable(trails);
	const { subscribe, set, update } = store;

	return {
		subscribe,
		set,
		update,
		addTrailMarker: (trailId, markerId) => {
			update((s) => {
				s[trailId].markers.push(markerId);
				return s;
			});
		},
		addTrailSegment: (trailId, segmentId) => {
			update((s) => {
				s[trailId].segments.push(segmentId);
				return s;
			});
		},
		removeTrailSegment: (trailId, segmentId) => {
			update((s) => {
				s[trailId].segments = s[trailId].segments.filter((id) => id !== segmentId);
				return s;
			});
		},
		removeTrailMarker: (trailId, markerId) => {
			update((s) => {
				s[trailId].markers = s[trailId].markers.filter((id) => id !== markerId);
				return s;
			});
		}
	};
}

const trailStore = createTrailStore();

export default trailStore;

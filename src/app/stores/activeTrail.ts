import { writable } from 'svelte/store';
import { TrailEnum } from '../types';

const activeTrailId = writable<TrailEnum>(TrailEnum.AT);

export default activeTrailId;

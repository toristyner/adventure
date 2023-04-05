import type { GoogleMapData } from "../packages/svelte-google-map"

export enum TrailEnum {
  AT='at',
  // AZT='azt',
  PCT='pct',
}

export enum HikingDirection {
  NOBO='North Bound (NOBO)',
  SOBO='South Bound (SOBO)'
}
export interface Trail {
  id: TrailEnum,
  name: string,
  data: GoogleMapData[],
  segments: string[],
  markers: string[],
  overview: {
    center: {
      lat: number,
      lng: number
    },
    zoom: number
  }
}

export interface TrailSegment {
  id: string;
  name: string;
  markers: string[];
  hikingDirection?: HikingDirection;
  status: SegmentStatus
}
export interface TrailMarker {
  id: string;
  label: string;
  type?: MarkerType;
  trailId: TrailEnum;
  segmentId?: string;
  position: google.maps.LatLng
}

export enum SegmentStatus {
  NotStarted='Not Started',
  Planned='Planned',
  InProgress='In Progress',
  Complete='Complete'
}

export enum MarkerType {
  Camp='Campsite',
  Default='X',
  Parking='Parking',
  ReSupply='ReSupply',
  Shelter='Shelter',
  TrailStart='Start',
  TrailEnd='End',
  ViewPoint='View Point',
  Water='Water',
}
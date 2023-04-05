export interface GoogleMapDataMouseEvent {
  detail: google.maps.Data.MouseEvent
}

export interface GoogleMapMouseEvent {
  detail: google.maps.MapMouseEvent
}

export interface GoogleMapMarker {
  id: string;
  position: google.maps.LatLng
  label: string
}

export interface GoogleMapDataFeatureLine {
  type: 'line',
  start: google.maps.LatLng,
  end: google.maps.LatLng,
  strokeWidth: number,
  fillColor: string,
  strokeColor: string,
}

export type GoogleMapDataFeature = GoogleMapDataFeatureLine
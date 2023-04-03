import { type Trail, TrailEnum } from '../types'
import { readable } from 'svelte/store';

const trails: {
  [key in TrailEnum]: Trail
} = {
  [TrailEnum.AT]: {
    id: TrailEnum.AT,
    name: 'Appalachian Trail (AT)',
    geoJson: "https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/Appalachian_National_Scenic_Trail/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
    overview: {
      center: { lat: 39.7972686, lng: -77.5403369 },
      zoom: 6
    }
  },
  // [TrailEnum.AZT]: {
  //   id: TrailEnum.AZT,
  //   name: 'Arizona Trail (AZT)',
  //   geoJson: '',
  //   overview: {
  //     center: { lat: 39.7972686, lng: -77.5403369 },
  //     zoom: 8
  //   } 
  // }, 
  [TrailEnum.PCT]: {
    id: TrailEnum.PCT,
    name: 'Pacific Crest Trail (PCT)',
    geoJson: 'https://services5.arcgis.com/ZldHa25efPFpMmfB/arcgis/rest/services/PCTA_Centerline/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson',
    overview: {
      center: { lat: 41.934667, lng: -122.9802233 },
      zoom: 5
    } 
  }
}

export default readable(trails)
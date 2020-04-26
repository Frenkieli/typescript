import L, { LatLngExpression, LayerGroup, marker } from 'leaflet';
import { MapConfig } from '../map.config';

declare namespace CustomMap {

  export interface Initializer {
    readonly map: L.Map;
    readonly config: MapConfig;
    initialize(): void;
  }

}
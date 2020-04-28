import L, { LatLngExpression, LayerGroup, marker } from 'leaflet';
import { MapConfig } from '../map.config';

declare namespace CustomMap {

  export interface Initializer {
    readonly map: L.Map;
    readonly config: MapConfig;
    initialize(): void;
  }

  export interface MarkerLayer {
    readonly map: L.Map;
    readonly layer: L.LayerGroup;
    addMark(marker:Marker) : void;
    addMarks(markers:Marker[]): void;
    clear():void;
  }

  export interface Marker {
    marker: L.Marker;
    bindTooltip(config: string): void;
  }

}
import L from 'leaflet';
import { CustomMap } from './map';

class MapMarkerLayer implements CustomMap.MarkerLayer {
  public readonly layer = L.layerGroup();

  constructor(
    public readonly map : L.Map
  ){
    this.layer.addTo(map);
  }

  addMark(m: CustomMap.Marker) {
    m.marker.addTo(this.layer);
  }

  addMarks(mArray: CustomMap.Marker[]) {
    mArray.forEach(m =>{
      this.addMark(m);
    });
  }

  clear() {
    this.layer.clearLayers();
  }
}

export default MapMarkerLayer;
// import L, { LatLngExpression, LayerGroup, marker } from 'leaflet';
import mapConfig from './map.config';
import fetchData from './fetchData';
// import { districts } from './districtData';
import { Districts } from './data';
import UBikeMapFacade from './MapFacade';
import { UBikeInfo } from './data';



const mapFacade = new UBikeMapFacade(
  mapConfig,
  function (info: UBikeInfo) {
    return `
      <p>${info.regionName} - ${info.stopName}</p>
      <p>總自行車數：${info.totalBikes}</p>
      <p>可用自行車數：${info.availableBikes}</p>
    `
  }
)


// let markerLayer : LayerGroup;



const $selectDistrict = <HTMLSelectElement | null>(
  document.getElementById('select-district')
  )
if ( $selectDistrict ===null){
  throw new Error('沒有選到');
}
  
let currentDistrict = $selectDistrict.value as Districts;
updateUBikeMap(currentDistrict);

$selectDistrict.addEventListener('change', (event) => {
  let { value } = event.target as HTMLSelectElement;
  currentDistrict =value as Districts;
  // markerLayer.remove();
  mapFacade.clearStop();
  updateUBikeMap(currentDistrict);
})

function updateUBikeMap(district : Districts): void {
  fetchData().then(data => {
    const selectedData = data.filter(
      info => info.regionName === district
    )

    // const markers = selectedData.map(data=>{
    //   const marker = new L.Marker(data.latLng);

    //   marker.bindTooltip(`
    //     <p>${data.regionName} - ${data.stopName}</p>
    //     <p>總自行車數：${data.totalBikes}</p>
    //     <p>可用自行車數：${data.availableBikes}</p>
    //   `);

    //   marker.on('mouseover', () => {
    //     marker.openTooltip();
    //   });

    //   marker.on('mouseleave', () => {
    //     marker.closeTooltip();
    //   });

    //   return marker;
    // })

    // markerLayer = L.layerGroup(markers);
    // markerLayer.addTo(map);
    mapFacade.pinStops(selectedData);
  });
}

  
// districts.forEach((d) => {
//   const $optionTag = document.createElement('option');

//   $optionTag.setAttribute('value',d);
//   $optionTag.innerText = d;
//   $selectDistrict.appendChild($optionTag);
// })


// fetchData().then(data=>{
//   console.log(data);
// })
// const {
//   coordinate,
//   zoomLevel,
//   tileLayerURL,
//   containerID
// } = mapConfig;

// const taipeiCoord : LatLngExpression = coordinate;


// const zoom = zoomLevel;

// const map = L.map(containerID);

// map.setView(taipeiCoord, zoom);

// L.tileLayer(tileLayerURL)
// .addTo(map);
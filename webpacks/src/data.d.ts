import { LatLngExpression } from 'leaflet';


declare type Districts =
'中正區'|
'大同區'|
'中山區'|
'松山區'|
'大安區'|
'萬華區'|
'信義區'|
'士林區'|
'北投區'|
'內湖區'|
'南港區'|
'文山區';

declare type SourceUBikeInfo = {
  sno: string;
  sna: string;
  tot: string;
  sbi: string;
  sarea: string;
  mday: string;
  lat: string;
  lng: string;
  ar: string;
  sareaen: string;
  snaen: string;
  aren: string;
  bemp: string;
  act: string;
}

declare type UBikeInfo = {
  availableBikes :number;
  totalBikes : number;
  latLng : LatLngExpression;
  regionName : Districts;
  stopName : string;
}

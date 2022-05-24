<template>
  <div id="map">
  </div>
</template>

<script>
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet';

export default {
  name: 'MapPage',
  data: () => ({
    map: null,
    mapTile: "http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}"
  }),
  mounted() {
    this.map = this.getMap();
  },
  methods: {
    getMap() {
      const map = L.map("map").setView([21.028511, 105.804817], 6);
      L.tileLayer(this.mapTile, {
        maxZoom: 21,
        attribution: 'GOOGLE MAP',
        name: "map_main_tile"
      }).addTo(map);
      return map;
    }
  }
}
</script>

<style scoped>
#map {
  width: 90vh;
  height: 50vh;
  margin: 0 auto;
}
</style>

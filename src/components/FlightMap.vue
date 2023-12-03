<template>
  <form id="flightSearchForm" class="search-form" @submit.prevent="searchFlight">
    <input type="text" v-model="flightNumber" placeholder="Flight Number" id="flightNumber" name="flightNumber" required>
    <button type="submit" class="submit-button">
      <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M200.5 484.7H77.4l-0.9-168h43.8z" fill="#FFEB4D"></path>
          <path
            d="M897 652.7H245.5c-92.8 0-168-75.2-168-168h725.6c93.4 0 146.4 51.7 146.4 115.4 0 29-23.5 52.6-52.5 52.6z"
            fill="#DAE5FF"></path>
          <path d="M124.4 600.7c30.6 31.8 73.5 51.6 121.2 51.6H897c28.7 0 52-23 52.5-51.6H124.4z" fill="#FFACC2"></path>
          <path d="M776.5 513.7h32v42h-32z" fill="#FFFFFF"></path>
          <path
            d="M808.5 562.7h-32c-4.4 0-8-3.1-8-7v-42c0-3.9 3.6-7 8-7h32c4.4 0 8 3.1 8 7v42c0 3.8-3.5 7-8 7z m-24-14h16v-28h-16v28z"
            fill="#9A2D2F"></path>
          <path d="M214.5 555.7h-20c-3.3 0-6-2.7-6-6v-30c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v30c0 3.3-2.6 6-6 6z"
            fill="#FFFFFF"></path>
          <path
            d="M214.5 562.7h-20c-7.7 0-14-5.5-14-12.2V519c0-6.8 6.3-12.2 14-12.2h20c7.7 0 14 5.5 14 12.2v31.5c0 6.7-6.2 12.2-14 12.2z m-18-14h16v-28h-16v28zM731.5 521.7h-4c-3.3 0-6 2.7-6 6v8c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6v-8c0-3.3-2.6-6-6-6zM700.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM669.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM638.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM607.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM577.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM546.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM515.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM298.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM267.5 521.7h-4c-3.3 0-6 2.7-6 6v8c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6v-8c0-3.3-2.6-6-6-6z"
            fill="#9A2D2F"></path>
          <path
            d="M950.5 821.7c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.5 8-8 8zM950.5 771.7c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.5 8-8 8zM241.6 259.6c-12.9 0-19.2-10.1-23.8-17.4-4.3-6.9-6.5-9.9-10.2-9.9s-5.9 3-10.2 9.9c-4.6 7.3-10.9 17.4-23.8 17.4s-19.2-10.1-23.8-17.4c-4.3-6.9-6.5-9.9-10.2-9.9s-5.9 3-10.2 9.9c-4.6 7.3-10.9 17.4-23.8 17.4s-19.2-10.1-23.8-17.4c-4.3-6.9-6.5-9.9-10.2-9.9-4.4 0-8-3.6-8-8s3.6-8 8-8c12.9 0 19.2 10.1 23.8 17.4 4.3 6.9 6.5 9.9 10.2 9.9s5.9-3 10.2-9.9c4.6-7.3 10.9-17.4 23.8-17.4s19.2 10.1 23.8 17.4c4.3 6.9 6.5 9.9 10.2 9.9 3.7 0 5.9-3 10.2-9.9 4.6-7.3 10.9-17.4 23.8-17.4s19.2 10.1 23.8 17.4c4.3 6.9 6.5 9.9 10.2 9.9 4.4 0 8 3.6 8 8s-3.6 8-8 8zM263.5 209.6c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-5 0-7.5 3-12.7 10.2-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.5 8-8 8z"
            fill="#9A2D2F"></path>
          <path d="M350.1 82m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#FFEB4D"></path>
          <path
            d="M350.1 122c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z m0-64c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.7-24-24-24zM926.5 957.7h-824c-4.4 0-8-3.6-8-8s3.6-8 8-8h824c4.4 0 8 3.6 8 8s-3.5 8-8 8z"
            fill="#9A2D2F"></path>
          <path
            d="M233 492.7c4 9.7 20 21.4 47.5 19.2 65.5-5.2 131.9-13.6 204-9.2 136.5 8.2 231.1 1.5 272.6-2 15.8-1.3 48.4-3.5 62.9-7.4-5.5-0.4-11.1-0.6-16.9-0.6H233z"
            fill="#FFFFFF"></path>
          <path d="M656.3 652.2H456.4l-194.1-203h56.3z" fill="#FFACC2"></path>
          <path
            d="M701.3 684.7h-70c-8.8 0-16-7.2-16-16v-28c0-8.8 7.2-16 16-16h70c8.8 0 16 7.2 16 16v28c0 8.8-7.2 16-16 16z"
            fill="#CAE8FF"></path>
          <path
            d="M916.5 512.4c-27.9-23.3-67.1-35.7-113.4-35.7H379.9l-57.1-34.4c-1.2-0.7-2.7-1.1-4.1-1.1h-56.3c-3.2 0-6.1 1.9-7.4 4.9-1.3 2.9-0.6 6.4 1.6 8.7l21 22h-72.2l-78-163.8c-1.4-2.6-4.1-4.2-7-4.2H76.5c-2.1 0-4.2 0.8-5.7 2.4-1.5 1.5-2.3 3.6-2.3 5.7l0.9 168c0 0.4 0 0.8 0.1 1.2 0.7 96.5 79.4 174.8 176 174.8h361.8v8c0 13.2 10.8 24 24 24h70c13.2 0 24-10.8 24-24v-8H897c33.4 0 60.6-27.2 60.6-60.6-0.1-34.6-14.6-65.8-41.1-87.9z m-113.4-19.7c42.5 0 78.2 11 103.1 31.9 20.9 17.5 33.1 41.4 35 68.1H572.8l-85.7-51.5c2-0.8 3.4-2.5 3.4-4.5v-10c0-2.8-2.7-5-6-5h-4c-3.3 0-6 2.2-6 5v6.9l-68-40.9h396.6z m-718.5-168h31l71.6 152H85.4l-0.8-152z m1.1 168H292.8l28.9 30.2c-1.3 0.9-2.1 2.3-2.1 3.8v10c0 2.8 2.7 5 6 5h4c3.1 0 5.6-1.9 5.9-4.4l53 55.4H127.6c-24.4-26.7-40-61.6-41.9-100z m222.6 151.6h-62.8c-37.2 0-72.3-12.5-100.7-35.6h258.8l34.2 35.7-129.5-0.1z m299-3.6v3.5H459.8L281 457.2h35.4l292.2 175.7c-0.8 2.4-1.3 5-1.3 7.8z m102 28c0 4.4-3.6 8-8 8h-70c-4.4 0-8-3.6-8-8v-28c0-4.4 3.6-8 8-8h70c4.4 0 8 3.6 8 8v28zM897 644.3l-171.7 0.4v-4c0-13.2-10.8-24-24-24h-70c-4.6 0-8.9 1.3-12.6 3.6l-19.3-11.6h341.1c-4.1 20.2-22.2 35.6-43.5 35.6z"
            fill="#9A2D2F"></path>
        </g>
      </svg>
      <p>
        Search
      </p>
    </button>
  </form>
  <div v-if="flight_data">
    <FlightData :flight_data_obj=flight_data_obj />
  </div>
  <div>
    <div id="map" class="map-container"></div>
  </div>
</template>

<script>
/* eslint-disable */
import FlightData from './FlightData.vue'
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = 'pk.eyJ1IjoidGxhdWZmcyIsImEiOiJjbHBuazNoYmYwbGZrMnFxbng3Zml3eDdnIn0.LoGnEoJzmONuMdKIAWgt5A';
export default {
  name: 'FlightMap',
  components: {
    FlightData
  },
  data() {
    return {
      map: null,
      colors: [],
      flightNumber: null,
      flight_data: false,
      flight_data_obj: {}
    };
  },
  mounted() {
    this.colors = [
      '#ff6961',
      '#ffb480',
      '#f8f38d',
      '#42d6a4',
      '#08cad1',
      '#59adf6',
      '#9d94ff',
      '#c780e8',
    ];
    // Initialize Mapbox GL JS map
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/tlauffs/clpnn3kno010401o99l3wdj7t',
      center: [8.52, 52.02],
      zoom: 3.5,
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.fetchFlightData();
  },
  methods: {
    async fetchFlightData() {
      try {
        const response = await fetch('/all_flights');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.handleOpenSkyData(data);
      }
      catch {
        console.error('Error fetching Flight data:', error);
      }
    },
    handleOpenSkyData(data) {
      const aircraftStates = data.data;
      const zoom = this.map.getZoom();
      const baseSize = 2;
      const minSize = 0.75;
      const adjustedSize = baseSize - (12 - zoom) * 0.1;
      const size = Math.max(adjustedSize, minSize);
      aircraftStates.forEach((state, index) => {

        if (state.live == null) {
          return;
        }

        let el = document.createElement('div');
        el.innerHTML = `
        <?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <svg width="${size}rem" height="${size}rem" viewBox="0 0 32 32" version="1.1"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
        <title>airplane</title>
        <desc>Created with Sketch Beta.</desc>
        <defs>
        </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
            sketch:type="MSPage">
            <g id="Icon-Set-Filled" sketch:type="MSLayerGroup"
                transform="translate(-310.000000, -309.000000)" fill="${this.colors[index % this.colors.length]}">
                <path
                    d="M341.207,309.82 C339.961,308.57 337.771,308.863 336.518,310.119 L330.141,316.481 L318.313,312.061 C317.18,311.768 316.039,311.389 314.634,312.798 C313.917,313.516 312.427,315.01 314.634,317.221 L322.744,323.861 L317.467,329.127 L312.543,327.896 C311.813,327.708 311.321,327.855 310.946,328.269 C310.757,328.505 309.386,329.521 310.342,330.479 L316.067,334.933 L320.521,340.658 C321.213,341.352 321.856,340.919 322.735,340.084 C323.292,339.526 323.172,339.239 323.004,338.426 L321.892,333.536 L327.133,328.277 L333.763,336.389 C335.969,338.6 337.46,337.105 338.177,336.389 C339.583,334.979 339.205,333.837 338.912,332.702 L334.529,320.854 L340.88,314.481 C342.133,313.226 342.454,311.069 341.207,309.82"
                    id="airplane" sketch:type="MSShapeGroup">
 
                </path>
            </g>
        </g>
      </svg>
      `
        const lon = state.live.longitude;
        const lat = state.live.latitude;
        const altitude = state.live.altitude;
        const callsign = state.flight.icao;


        new mapboxgl.Marker(el).setLngLat([lon, lat])
          .setPopup(new mapboxgl.Popup().setHTML(`<p>${callsign}</p><p>Altitude: ${altitude} meters</p>`))
          .addTo(this.map);
      });

    },
    async searchFlight() {
      try {
        const response = await fetch(`/flight_number/${this.flightNumber}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.showFlightData(data)
      }
      catch {
        console.error('Error fetching Flight data');
      }
    },
    showFlightData(data) {
      this.data = data[0];

      const calculateDelay = (scheduled, estimated) => {
        const scheduledTime = new Date(scheduled);
        const estimatedTime = new Date(estimated);
        const delayInMinutes = Math.floor((estimatedTime - scheduledTime) / (1000 * 60));
        return delayInMinutes >= 4 ? `${delayInMinutes} minutes late` : 'On Time';

      };
      this.flight_data_obj = {
        status: this.data.flight_status || '-' === 'active' ? 'Airborne' : this.data.flight_status || '-',
        on_time: this.data.arrival?.scheduled && this.data.arrival?.estimated
          ? calculateDelay(this.data.arrival.scheduled, this.data.arrival.estimated)
          : '-',
        airline: this.data.airline?.name || '-',
        airline_iata: this.data.airline?.iata || '-',
        flight_iata: this.data.flight?.iata || '-',
        aircraft: this.data.aircraft?.iata || '-',
        altitude: this.live?.altitude || '-',
        speed: this.live?.speed_horizontal || '-',
        lat: this.live?.latitude || '-',
        lon: this.live?.longitude || '-',
        dep_airport: this.data.departure?.airport || '-',
        dep_airport_iata: this.data.departure?.iata || '-',
        dep_airport_terminal: this.data.departure?.terminal || '-',
        dep_airport_gate: this.data.departure?.gate || '-',
        dep_time_scheduled: this.data.departure?.scheduled || '-',
        dep_time_est: this.data.departure?.estimated || '-',
        dep_time_actual: this.data.departure?.actual || '-',
        arr_airport: this.data.arrival?.airport || '-',
        arr_airport_iata: this.data.arrival?.iata || '-',
        arr_airport_terminal: this.data.arrival?.terminal || '-',
        arr_airport_gate: this.data.arrival?.gate || '-',
        arr_time_scheduled: this.data.arrival?.scheduled || '-',
        arr_time_est: this.data.arrival?.estimated || '-',
        arr_time_actual: this.data.arrival?.actual || '-',
      }
      console.log(this.flight_data_obj);
      this.flight_data = true;
    },
  }
}

</script>

<style scoped>
.map-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.search-form {
  display: flex;
  justify-content: center;
  max-width: 30rem;
  margin: 0 auto;
  margin-top: 5rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 0px 22px 12px rgba(12, 23, 46, 0.8);
  box-shadow: 0px 0px 22px 12px rgba(12, 23, 46, 0.8);
}

.search-form>input {
  flex-grow: 1;
  border-right: none;
  padding-left: 0.5rem;
  border: 1px solid black;
  border-radius: 0.25rem 0 0 0.25rem;
}

.submit-button {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
  border-left: none;
  border: 1px solid black;
  border-left: none;
  border-radius: 0 0.25rem 0.25rem 0;
}

.submit-button>svg {
  width: 2rem;
}

.submit-button>p {
  font-size: 1rem;
  margin: 0 0.25rem;
}
</style>

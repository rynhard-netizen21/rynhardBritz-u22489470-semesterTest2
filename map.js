async function loadGeoJsonBFP() {
    const respons = await fetch("layers_geojson-20261027T080422Z-1-001/layers_geojson/buildings_projected.geojson");
    const building_footprint = await respons.geojson();
    return building_footprint;
}

async function loadGeoJsonIrr() {
    const respons = await fetch("layers_geojson-20261027T080422Z-1-001/layers_geojson/irrigation_projected.geojson");
    const irrigation = await respons.geojson();
    return irrigation;
}

async function loadGeoJsonRain() {
    const respons = await fetch("layers_geojson-20261027T080422Z-1-001/layers_geojson/rainwater_tank_projected.geojson");
    const rainwater_tank = await respons.geojson();
    return rainwater_tank;
}

async function loadGeoJsonSen() {    
    const respons = await fetch("layers_geojson-20261027T080422Z-1-001/layers_geojson/sensors_projected.geojson");
    const sensors = await respons.geojson();
    return sensors;
}

async function loadGeoJsonTree() {
    const respons = await fetch("layers_geojson-20261027T080422Z-1-001/layers_geojson/tree_projected.geojson");
    const tree = await respons.geojson();
    return tree;
}

async function loadGeoJsonRoads() {
    const respons = await fetch("farm_up_roads_new_geojson-20261027T080155Z-1-001/farm_up_roads_new_geojson/farm_up_roads.geojson");
    const roads = await respons.geojson();
    return roads;
}

async function loadAllGeoJson() {
    const building_footprint = await loadGeoJsonBFP();
    const irrigation = await loadGeoJsonIrr();
    const rainwater_tank = await loadGeoJsonRain();
    const sensors = await loadGeoJsonSen();
    const tree = await loadGeoJsonTree();
    const roads = await loadGeoJsonRoads();
    return {
        building_footprint,
        irrigation,
        rainwater_tank,
        sensors,
        tree,
        roads
    };
}

loadAllGeoJson();

/*import {building_footprint, irrigation, rainwater_tank, sensors, tree, roads} from './main.js';*/

var map =L.map('map').setView([-25.75, 28.26],14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


/*
var building_footprint_layer = L.geoJSON(building_footprint, {
    style: function (feature) {
        return {color: "#ff0000"};
    }
}).addTo(map);
*/
/*
var building_footprint_layer = [{
    "type"
}]*/



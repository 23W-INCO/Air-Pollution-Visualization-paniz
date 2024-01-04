const width = 800;
const height = 600;

const svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height);

// Load GeoJSON data
d3.json('2_hoch.geo.json').then(geojson => {
    const apiUrl = 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52,53.55,48.14,51.23,50.07,48.77,53.08,51.05,52.37,50.98,54.32,52.12,49.99,52.39,49.24,53.64&longitude=13.41,9.99,11.58,6.78,8.23,9.18,8.8,13.74,9.73,11.03,10.12,11.63,8.25,13.06,6.99,11.4&current=european_aqi&forecast_days=1&domains=cams_europe'

    fetch(apiUrl)
        .then(response = response.json())
        .then(airQualityData => {
            renderMap(geojson, airQualityData);
        })
        .catch(error => console.error('Error fetching air quality data:'. error));

        function renderMap(geoJson, airQualityData) {
            const colorScale = d3.scaleSequential(d3.interpolateOrRd)
                .domain([0, 100]);

            
        }
});
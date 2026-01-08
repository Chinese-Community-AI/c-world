// Real navigation-style map using Leaflet
let map;
let markers = [];
let markerLayer;

// Chinatown NYC center coordinates
const CENTER_LAT = 40.7150;
const CENTER_LNG = -73.9980;
const DEFAULT_ZOOM = 16;

// Initialize the map
function initMap() {
    const container = document.getElementById('mapContainer');
    if (!container) return;

    // Initialize Leaflet map
    map = L.map('mapContainer', {
        center: [CENTER_LAT, CENTER_LNG],
        zoom: DEFAULT_ZOOM,
        zoomControl: true,
        attributionControl: true
    });

    // Add OpenStreetMap tiles (real street map)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Alternative: Use CartoDB Positron style for a cleaner navigation look
    // L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    //     attribution: '© OpenStreetMap contributors © CARTO',
    //     subdomains: 'abcd',
    //     maxZoom: 19
    // }).addTo(map);

    // Create a layer group for markers
    markerLayer = L.layerGroup().addTo(map);

    // Add restaurant markers
    addBusinessMarkers();

    // Fit map to show all markers
    if (markers.length > 0) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

// Create custom icon based on category
function createCustomIcon(business) {
    const colors = {
        restaurant: '#d32f2f',  // Red
        bakery: '#ff6f00',       // Orange
        shop: '#1976d2',         // Blue
        market: '#388e3c',       // Green
        dessert: '#e91e63'       // Pink
    };

    const color = colors[business.category] || '#757575';
    
    // Create a custom HTML icon that looks like a navigation pin
    const html = `
        <div style="
            width: 24px;
            height: 24px;
            background-color: ${color};
            border: 3px solid white;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            position: relative;
        ">
            <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(45deg);
                width: 8px;
                height: 8px;
                background-color: white;
                border-radius: 50%;
            "></div>
        </div>
    `;

    return L.divIcon({
        html: html,
        className: 'custom-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 24],
        popupAnchor: [0, -24]
    });
}

// Add business markers to the map
function addBusinessMarkers() {
    businesses.forEach(business => {
        if (business.lat && business.lng) {
            const marker = createMarker(business);
            markers.push(marker);
        }
    });
}

// Create a marker for a business
function createMarker(business) {
    const icon = createCustomIcon(business);
    
    const marker = L.marker([business.lat, business.lng], {
        icon: icon
    }).addTo(markerLayer);

    // Add popup with business info
    const popupContent = `
        <div style="min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">${business.name}</h3>
            <div style="color: #ff6f00; font-weight: 600; margin-bottom: 4px;">
                ★ ${business.rating} (${business.reviewCount.toLocaleString()} reviews)
            </div>
            <div style="color: #757575; font-size: 14px; margin-bottom: 4px;">
                ${business.category.charAt(0).toUpperCase() + business.category.slice(1)}
            </div>
            <div style="color: #757575; font-size: 12px;">
                ${business.address}
            </div>
            <a href="business.html?id=${business.id}" 
               style="display: inline-block; margin-top: 8px; color: #d32f2f; text-decoration: none; font-weight: 500;">
                View Details →
            </a>
        </div>
    `;

    marker.bindPopup(popupContent);
    
    // Store business data
    marker.business = business;
    
    // Click handler to navigate to business page
    marker.on('click', function() {
        window.location.href = `business.html?id=${business.id}`;
    });

    return marker;
}

// Update map markers based on filtered businesses
function updateMapMarkers(filteredBusinesses) {
    if (!map || !markerLayer) return;

    // Clear all existing markers
    markerLayer.clearLayers();
    markers = [];

    // Add markers for filtered businesses
    filteredBusinesses.forEach(business => {
        if (business.lat && business.lng) {
            const marker = createMarker(business);
            markers.push(marker);
        }
    });

    // Fit map to show all visible markers
    if (markers.length > 0) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));
    } else {
        // If no markers, reset to default view
        map.setView([CENTER_LAT, CENTER_LNG], DEFAULT_ZOOM);
    }
}

// Initialize map when DOM is ready
function initializeMapWhenReady() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(initMap, 100);
        });
    } else {
        setTimeout(initMap, 100);
    }
}

initializeMapWhenReady();

// Main application logic for homepage

let currentCategory = 'all';
let currentSort = 'popular';
let currentBusinesses = businesses;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderBusinesses();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Category filters
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            filterAndRender();
        });
    });

    // Ranking tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentSort = e.target.dataset.tab;
            filterAndRender();
        });
    });

    // Search
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

// Handle search
function handleSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        currentBusinesses = searchBusinesses(query);
        renderBusinesses();
        updateMap();
    } else {
        filterAndRender();
    }
}

// Filter and render businesses
function filterAndRender() {
    let filtered = getBusinessesByCategory(currentCategory);
    filtered = sortBusinesses(filtered, currentSort);
    currentBusinesses = filtered;
    renderBusinesses();
    updateMap();
}

// Update map markers based on current filtered businesses
function updateMap() {
    if (typeof updateMapMarkers === 'function') {
        updateMapMarkers(currentBusinesses);
    }
}

// Render businesses to the page
function renderBusinesses() {
    const businessList = document.getElementById('businessList');
    
    if (currentBusinesses.length === 0) {
        businessList.innerHTML = `
            <div class="empty-state">
                <h3>No businesses found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }

    businessList.innerHTML = currentBusinesses.map(business => `
        <a href="business.html?id=${business.id}" class="business-card">
            <img src="${business.image}" alt="${business.name}" class="business-card-image" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/400x200/cccccc/666666?text=${encodeURIComponent(business.name)}'">
            <div class="business-card-content">
                <div class="business-card-header">
                    <div>
                        <h3 class="business-card-name">${business.name}</h3>
                        <div class="business-card-rating">
                            <span class="star">★</span>
                            <span>${business.rating}</span>
                            <span>(${business.reviewCount.toLocaleString()} reviews)</span>
                        </div>
                    </div>
                </div>
                <span class="business-card-category">${business.category}</span>
                ${business.trending ? '<span class="trending-badge">🔥 Trending</span>' : ''}
                <p class="business-card-description">${business.description}</p>
                <div class="business-card-footer">
                    <span class="business-card-price">${business.priceRange}</span>
                    <span>${business.address}</span>
                </div>
            </div>
        </a>
    `).join('');
}

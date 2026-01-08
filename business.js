// Business detail page logic

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const businessId = urlParams.get('id');
    
    if (businessId) {
        const business = getBusinessById(businessId);
        if (business) {
            renderBusinessDetail(business);
        } else {
            renderError();
        }
    } else {
        renderError();
    }
});

// Render business detail
function renderBusinessDetail(business) {
    // Update page title
    document.getElementById('businessTitle').textContent = `${business.name} - Chinatown Street Guide`;
    
    const businessDetail = document.getElementById('businessDetail');
    
    businessDetail.innerHTML = `
        <div class="business-detail-header">
            <img src="${business.image}" alt="${business.name}" class="business-detail-image"
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/1200x400/cccccc/666666?text=${encodeURIComponent(business.name)}'">
        </div>
        <div class="business-detail-content">
            <div class="business-detail-title">
                <div>
                    <h1 class="business-detail-name">${business.name}</h1>
                    <div class="business-detail-rating">
                        <span class="star">★</span>
                        <span>${business.rating}</span>
                        <span>(${business.reviewCount.toLocaleString()} reviews)</span>
                        ${business.trending ? '<span class="trending-badge">🔥 Trending</span>' : ''}
                    </div>
                </div>
            </div>
            
            <div class="business-detail-meta">
                <div class="meta-item">
                    <span class="meta-label">Category</span>
                    <span class="meta-value" style="text-transform: capitalize;">${business.category}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Price Range</span>
                    <span class="meta-value">${business.priceRange}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Hours</span>
                    <span class="meta-value">${business.hours}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Phone</span>
                    <span class="meta-value">${business.phone}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Ranking</span>
                    <span class="meta-value">#${business.ranking}</span>
                </div>
            </div>
            
            <div class="business-detail-description">
                ${business.description}
            </div>
            
            <div class="business-detail-address">
                <div class="meta-item">
                    <span class="meta-label">Address</span>
                    <span class="meta-value">${business.address}</span>
                </div>
            </div>
            
            <div class="business-detail-specialties">
                <h3 class="specialties-title">Specialties</h3>
                <div class="specialties-list">
                    ${business.specialties.map(specialty => 
                        `<span class="specialty-tag">${specialty}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;
}

// Render error state
function renderError() {
    const businessDetail = document.getElementById('businessDetail');
    businessDetail.innerHTML = `
        <div class="empty-state">
            <h3>Business not found</h3>
            <p>The business you're looking for doesn't exist or has been removed.</p>
            <a href="index.html" class="back-link" style="margin-top: 1rem; display: inline-block;">← Back to listings</a>
        </div>
    `;
}

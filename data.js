// Fake data for Chinatown NYC businesses
const businesses = [
    {
        id: 1,
        name: "Joe's Shanghai",
        category: "restaurant",
        rating: 4.8,
        reviewCount: 2847,
        address: "9 Pell St, New York, NY 10013",
        phone: "(212) 233-8888",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
        description: "Famous for their soup dumplings (xiao long bao). A must-visit for authentic Shanghainese cuisine.",
        priceRange: "$$",
        hours: "11:00 AM - 10:00 PM",
        specialties: ["Soup Dumplings", "Shanghainese Cuisine", "Dim Sum"],
        ranking: 1,
        trending: true,
        lat: 40.7143,
        lng: -73.9981
    },
    {
        id: 2,
        name: "Nom Wah Tea Parlor",
        category: "restaurant",
        rating: 4.6,
        reviewCount: 1923,
        address: "13 Doyers St, New York, NY 10013",
        phone: "(212) 962-6047",
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800",
        description: "NYC's oldest dim sum parlor, serving traditional Cantonese dim sum since 1920.",
        priceRange: "$$",
        hours: "10:30 AM - 9:00 PM",
        specialties: ["Dim Sum", "Traditional Cantonese", "Tea"],
        ranking: 2,
        trending: false,
        lat: 40.7148,
        lng: -73.9980
    },
    {
        id: 3,
        name: "Golden Unicorn",
        category: "restaurant",
        rating: 4.5,
        reviewCount: 3456,
        address: "18 E Broadway, New York, NY 10002",
        phone: "(212) 941-0911",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
        description: "Upscale dim sum restaurant with elegant atmosphere and extensive menu.",
        priceRange: "$$$",
        hours: "10:00 AM - 10:30 PM",
        specialties: ["Dim Sum", "Seafood", "Banquet Style"],
        ranking: 3,
        trending: true,
        lat: 40.7140,
        lng: -73.9965
    },
    {
        id: 4,
        name: "Xi'an Famous Foods",
        category: "restaurant",
        rating: 4.7,
        reviewCount: 4567,
        address: "45 Bayard St, New York, NY 10013",
        phone: "(212) 786-2068",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
        description: "Authentic Northwestern Chinese cuisine, famous for hand-pulled noodles and lamb burgers.",
        priceRange: "$",
        hours: "11:00 AM - 9:00 PM",
        specialties: ["Hand-Pulled Noodles", "Lamb Burgers", "Spicy Cumin"],
        ranking: 4,
        trending: true,
        lat: 40.7155,
        lng: -73.9985
    },
    {
        id: 5,
        name: "Fay Da Bakery",
        category: "bakery",
        rating: 4.4,
        reviewCount: 1234,
        address: "83 Mott St, New York, NY 10013",
        phone: "(212) 219-8888",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800",
        description: "Popular Chinese bakery chain offering fresh buns, pastries, and cakes.",
        priceRange: "$",
        hours: "7:00 AM - 8:00 PM",
        specialties: ["Pineapple Buns", "Egg Tarts", "Pork Buns"],
        ranking: 5,
        trending: false,
        lat: 40.7160,
        lng: -73.9975
    },
    {
        id: 6,
        name: "Tai Pan Bakery",
        category: "bakery",
        rating: 4.3,
        reviewCount: 987,
        address: "194 Canal St, New York, NY 10013",
        phone: "(212) 219-8888",
        image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800",
        description: "Traditional Chinese bakery with wide selection of buns, cakes, and pastries.",
        priceRange: "$",
        hours: "7:30 AM - 8:30 PM",
        specialties: ["Custard Buns", "Coconut Buns", "Red Bean Buns"],
        ranking: 6,
        trending: false,
        lat: 40.7170,
        lng: -73.9990
    },
    {
        id: 7,
        name: "Kam Man Food",
        category: "market",
        rating: 4.2,
        reviewCount: 2345,
        address: "200 Canal St, New York, NY 10013",
        phone: "(212) 571-0330",
        image: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800",
        description: "Large Asian supermarket with extensive selection of Chinese ingredients, snacks, and household items.",
        priceRange: "$$",
        hours: "9:00 AM - 9:00 PM",
        specialties: ["Asian Groceries", "Fresh Produce", "Household Items"],
        ranking: 7,
        trending: false,
        lat: 40.7175,
        lng: -73.9995
    },
    {
        id: 8,
        name: "Big Wong King",
        category: "restaurant",
        rating: 4.5,
        reviewCount: 1789,
        address: "67 Mott St, New York, NY 10013",
        phone: "(212) 964-0540",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        description: "Classic Cantonese restaurant known for roast duck, BBQ pork, and congee.",
        priceRange: "$$",
        hours: "8:00 AM - 10:00 PM",
        specialties: ["Roast Duck", "BBQ Pork", "Congee"],
        ranking: 8,
        trending: false,
        lat: 40.7158,
        lng: -73.9978
    },
    {
        id: 9,
        name: "Eggloo",
        category: "dessert",
        rating: 4.6,
        reviewCount: 3456,
        address: "60 Mulberry St, New York, NY 10013",
        phone: "(646) 590-3988",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
        description: "Modern egg waffle shop with creative toppings and flavors.",
        priceRange: "$",
        hours: "12:00 PM - 10:00 PM",
        specialties: ["Egg Waffles", "Ice Cream", "Bubble Tea"],
        ranking: 9,
        trending: true,
        lat: 40.7152,
        lng: -73.9982
    },
    {
        id: 10,
        name: "Tasty Hand-Pulled Noodles",
        category: "restaurant",
        rating: 4.4,
        reviewCount: 2134,
        address: "1 Doyers St, New York, NY 10013",
        phone: "(212) 791-1817",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
        description: "Authentic hand-pulled noodles made fresh daily. Watch the chefs work their magic.",
        priceRange: "$",
        hours: "11:00 AM - 9:30 PM",
        specialties: ["Hand-Pulled Noodles", "Beef Noodle Soup", "Dumplings"],
        ranking: 10,
        trending: false,
        lat: 40.7149,
        lng: -73.9979
    },
    {
        id: 11,
        name: "Aji Ichiban",
        category: "shop",
        rating: 4.3,
        reviewCount: 1567,
        address: "37 Mott St, New York, NY 10013",
        phone: "(212) 233-7650",
        image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800",
        description: "Japanese and Asian candy shop with unique snacks, dried fruits, and treats.",
        priceRange: "$",
        hours: "10:00 AM - 9:00 PM",
        specialties: ["Asian Candy", "Dried Fruits", "Unique Snacks"],
        ranking: 11,
        trending: false,
        lat: 40.7157,
        lng: -73.9976
    },
    {
        id: 12,
        name: "Wo Hop",
        category: "restaurant",
        rating: 4.2,
        reviewCount: 3456,
        address: "17 Mott St, New York, NY 10013",
        phone: "(212) 267-2536",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
        description: "Legendary late-night Chinese restaurant, a Chinatown institution since 1938.",
        priceRange: "$",
        hours: "10:00 AM - 4:00 AM",
        specialties: ["Late Night Dining", "American Chinese", "Classic Dishes"],
        ranking: 12,
        trending: false,
        lat: 40.7155,
        lng: -73.9977
    }
];

// Helper function to get business by ID
function getBusinessById(id) {
    return businesses.find(b => b.id === parseInt(id));
}

// Helper function to get businesses by category
function getBusinessesByCategory(category) {
    if (category === 'all') return businesses;
    return businesses.filter(b => b.category === category);
}

// Helper function to search businesses
function searchBusinesses(query) {
    const lowerQuery = query.toLowerCase();
    return businesses.filter(b => 
        b.name.toLowerCase().includes(lowerQuery) ||
        b.description.toLowerCase().includes(lowerQuery) ||
        b.specialties.some(s => s.toLowerCase().includes(lowerQuery))
    );
}

// Helper function to sort by ranking type
function sortBusinesses(businesses, sortType) {
    const sorted = [...businesses];
    switch(sortType) {
        case 'popular':
            return sorted.sort((a, b) => b.reviewCount - a.reviewCount);
        case 'rated':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'trending':
            return sorted.sort((a, b) => {
                if (a.trending && !b.trending) return -1;
                if (!a.trending && b.trending) return 1;
                return b.rating - a.rating;
            });
        default:
            return sorted.sort((a, b) => a.ranking - b.ranking);
    }
}

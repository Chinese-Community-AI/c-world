# Chinatown Street Guide

A Yelp-like website for discovering and ranking businesses in Chinatown, New York City. Similar to the "高德扫街榜" concept, this platform helps users find the best restaurants, shops, bakeries, and more in Chinatown.

## Features

- **Business Listings**: Browse restaurants, bakeries, shops, markets, and dessert places
- **Rankings**: View businesses sorted by popularity, ratings, or trending status
- **Category Filtering**: Filter businesses by category (Restaurants, Bakeries, Shops, Markets, Desserts)
- **Search**: Search for businesses by name, description, or specialties
- **Business Details**: View detailed information including ratings, reviews, hours, address, and specialties
- **Modern UI**: Beautiful, responsive design with smooth interactions

## Getting Started

### Running Locally

1. Start a local web server:
   ```bash
   python3 -m http.server 8000
   ```
   
   Or using Node.js:
   ```bash
   npx http-server -p 8000
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Project Structure

- `index.html` - Homepage with business listings
- `business.html` - Business detail page
- `styles.css` - All styling
- `app.js` - Homepage functionality
- `business.js` - Business detail page functionality
- `data.js` - Fake data for Chinatown businesses

## Current Data

The application includes 12 sample businesses in Chinatown, NYC:
- Restaurants (Joe's Shanghai, Nom Wah Tea Parlor, Xi'an Famous Foods, etc.)
- Bakeries (Fay Da Bakery, Tai Pan Bakery)
- Markets (Kam Man Food)
- Dessert shops (Eggloo)
- Specialty shops (Aji Ichiban)

All data is currently fake/mock data for demonstration purposes.

## Future Enhancements

- Real API integration
- User reviews and ratings
- Image upload functionality
- Street view integration (similar to "飞行街景")
- User accounts and friend features
- Personal lists and rankings

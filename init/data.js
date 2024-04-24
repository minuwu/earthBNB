const sampledata = [
  {
    "title": "Serenity Cottage",
    "description": "A cozy cottage nestled in the heart of nature, perfect for a peaceful getaway.",
    "image": "https://example.com/serenity-cottage.jpg",
    "price": 1500,
    "location": "New Bridge, Kathalpara",
    "country": "Bangladesh"
  },
  {
    "title": "Oceanview Retreat",
    "description": "A luxurious retreat with stunning ocean views, ideal for a relaxing vacation.",
    "image": "https://example.com/oceanview-retreat.jpg",
    "price": 2500,
    "location": "Seaside Avenue, Coastal City",
    "country": "United States"
  },
  {
    "title": "Mountain Haven",
    "description": "An idyllic mountain retreat surrounded by breathtaking scenery, perfect for nature lovers.",
    "image": "https://example.com/mountain-haven.jpg",
    "price": 1800,
    "location": "Alpine Valley, Snowpeak",
    "country": "Canada"
  },
  {
    "title": "Riverside Oasis",
    "description": "A tranquil oasis by the river, offering a peaceful escape from city life.",
    "image": "https://example.com/riverside-oasis.jpg",
    "price": 1200,
    "location": "Riverbank Road, Willow Creek",
    "country": "Australia"
  },
  {
    "title": "Enchanted Hideaway",
    "description": "A magical retreat surrounded by enchanted forests and mystical creatures.",
    "image": "https://example.com/enchanted-hideaway.jpg",
    "price": 2000,
    "location": "Fairy Glen, Whispering Woods",
    "country": "Ireland"
  },
  {
    "title": "Urban Loft",
    "description": "A modern loft in the heart of the city, offering chic urban living.",
    "image": "https://example.com/urban-loft.jpg",
    "price": 1800,
    "location": "Downtown District, Metropolis",
    "country": "United States"
  },
  {
    "title": "Tropical Paradise Villa",
    "description": "A luxurious villa nestled amidst palm trees and turquoise waters.",
    "image": "https://example.com/tropical-paradise-villa.jpg",
    "price": 3000,
    "location": "Coconut Bay, Azure Coast",
    "country": "Maldives"
  },
  {
    "title": "Rustic Cabin Retreat",
    "description": "A cozy cabin retreat with a crackling fireplace, perfect for winter getaways.",
    "image": "https://example.com/rustic-cabin-retreat.jpg",
    "price": 1500,
    "location": "Woodland Trail, Pine Forest",
    "country": "Canada"
  },
  {
    "title": "Secluded Beach Bungalow",
    "description": "A secluded bungalow on a pristine beach, offering ultimate relaxation.",
    "image": "https://example.com/secluded-beach-bungalow.jpg",
    "price": 2200,
    "location": "Sandy Cove, Tranquil Bay",
    "country": "Thailand"
  },
  {
    "title": "Elegant Chateau",
    "description": "An elegant chateau with historical charm and luxurious amenities.",
    "image": "https://example.com/elegant-chateau.jpg",
    "price": 4000,
    "location": "Chateau Lane, Grand Valley",
    "country": "France"
  },
  {
    "title": "Mountain Lodge Retreat",
    "description": "A mountain lodge retreat with panoramic views and outdoor adventures.",
    "image": "https://example.com/mountain-lodge-retreat.jpg",
    "price": 2800,
    "location": "Alpine Peak, Snowy Range",
    "country": "Switzerland"
  },
  {
    "title": "Desert Oasis Villa",
    "description": "A luxurious villa oasis amidst desert dunes, offering serenity and luxury.",
    "image": "https://example.com/desert-oasis-villa.jpg",
    "price": 3200,
    "location": "Sahara Ridge, Golden Sands",
    "country": "United Arab Emirates"
  },
  {
    "title": "Historic Manor House",
    "description": "A historic manor house with period charm and beautiful gardens.",
    "image": "https://example.com/historic-manor-house.jpg",
    "price": 3500,
    "location": "Heritage Lane, Oakwood Estate",
    "country": "United Kingdom"
  },
  {
    "title": "Lakeside Cabin Retreat",
    "description": "A charming cabin retreat by the lake, perfect for fishing and relaxation.",
    "image": "https://example.com/lakeside-cabin-retreat.jpg",
    "price": 1700,
    "location": "Lakeview Drive, Tranquil Waters",
    "country": "Sweden"
  },
  {
    "title": "Zen Garden Villa",
    "description": "A villa with a serene Zen garden, ideal for meditation and peaceful retreats.",
    "image": "https://example.com/zen-garden-villa.jpg",
    "price": 2600,
    "location": "Zen Boulevard, Harmony Haven",
    "country": "Japan"
  },
  {
    "title": "Rooftop Penthouse",
    "description": "A luxurious penthouse with a rooftop terrace and stunning city views.",
    "image": "https://example.com/rooftop-penthouse.jpg",
    "price": 3800,
    "location": "Skyline Avenue, Downtown Metropolis",
    "country": "Singapore"
  },
  {
    "title": "Coastal Cliff Cottage",
    "description": "A charming cottage perched on a coastal cliff, offering breathtaking ocean views.",
    "image": "https://example.com/coastal-cliff-cottage.jpg",
    "price": 1900,
    "location": "Clifftop Lane, Seaview Bluff",
    "country": "New Zealand"
  },
  {
    "title": "Safari Lodge",
    "description": "A luxurious safari lodge with wildlife adventures and luxurious accommodations.",
    "image": "https://example.com/safari-lodge.jpg",
    "price": 2900,
    "location": "Savannah Plains, Wild Kingdom",
    "country": "Kenya"
  },
  {
    "title": "Modern Beachfront Villa",
    "description": "A modern villa with direct beach access and contemporary design.",
    "image": "https://example.com/modern-beachfront-villa.jpg",
    "price": 2700,
    "location": "Beachfront Boulevard, Oceanview Bay",
    "country": "Spain"
  },
  {
    "title": "Alpine Chalet",
    "description": "A cozy chalet nestled in the Alps, perfect for skiing and winter vacations.",
    "image": "https://example.com/alpine-chalet.jpg",
    "price": 2300,
    "location": "Alpine Meadows, Snowy Peaks",
    "country": "Austria"
  },
  {
    "title": "Island Paradise Retreat",
    "description": "A secluded retreat on a private island, offering exclusivity and luxury.",
    "image": "https://example.com/island-paradise-retreat.jpg",
    "price": 4200,
    "location": "Paradise Island, Crystal Waters",
    "country": "Bahamas"
  },
  {
    "title": "Artistic Loft",
    "description": "An artistic loft space with creative vibes and inspiring views.",
    "image": "https://example.com/artistic-loft.jpg",
    "price": 2000,
    "location": "Art District, Bohemian Avenue",
    "country": "Italy"
  },
  {
    "title": "Historic Castle",
    "description": "A majestic castle steeped in history and grandeur, fit for royalty.",
    "image": "https://example.com/historic-castle.jpg",
    "price": 5000,
    "location": "Castle Hill, Royal Estate",
    "country": "Germany"
  },
  {
    "title": "Countryside Farmhouse",
    "description": "A charming farmhouse in the countryside, surrounded by rolling hills.",
    "image": "https://example.com/countryside-farmhouse.jpg",
    "price": 1600,
    "location": "Meadow Lane, Green Acres",
    "country": "Iceland"
  },
  {
    "title": "Riverfront Villa",
    "description": "A luxurious villa overlooking a serene river, perfect for peaceful retreats.",
    "image": "https://example.com/riverfront-villa.jpg",
    "price": 3000,
    "location": "Riverside Avenue, Dhaka",
    "country": "Bangladesh"
  },
  {
    "title": "Himalayan View Retreat",
    "description": "A retreat with breathtaking views of the Himalayas, ideal for nature enthusiasts.",
    "image": "https://example.com/himalayan-view-retreat.jpg",
    "price": 3500,
    "location": "Mountain Peak, Darjeeling",
    "country": "India"
  },
  {
    "title": "Beachside Bungalow",
    "description": "A cozy bungalow just steps away from the beach, offering seaside relaxation.",
    "image": "https://example.com/beachside-bungalow.jpg",
    "price": 2500,
    "location": "Coastal Road, Mumbai",
    "country": "India"
  },
  {
    "title": "Lakeside Cabin",
    "description": "A charming cabin by the lake, perfect for fishing and tranquility.",
    "image": "https://example.com/lakeside-cabin.jpg",
    "price": 2000,
    "location": "Lakeview Retreat, Srinagar",
    "country": "India"
  },
  {
    "title": "Tea Plantation Cottage",
    "description": "A cottage amidst lush tea plantations, offering a serene escape.",
    "image": "https://example.com/tea-plantation-cottage.jpg",
    "price": 1800,
    "location": "Tea Gardens, Assam",
    "country": "India"
  },
  {
    "title": "City Center Apartment",
    "description": "An apartment in the bustling city center, perfect for urban exploration.",
    "image": "https://example.com/city-center-apartment.jpg",
    "price": 1500,
    "location": "City Tower, Karachi",
    "country": "Pakistan"
  },
  {
    "title": "Historic Haveli",
    "description": "A traditional haveli with historical charm and cultural richness.",
    "image": "https://example.com/historic-haveli.jpg",
    "price": 2200,
    "location": "Old City, Lahore",
    "country": "Pakistan"
  },
  {
    "title": "Mountain View Chalet",
    "description": "A chalet with panoramic mountain views, perfect for alpine getaways.",
    "image": "https://example.com/mountain-view-chalet.jpg",
    "price": 2800,
    "location": "Himalayan Foothills, Islamabad",
    "country": "Pakistan"
  },
  {
    "title": "Heritage Mansion",
    "description": "A grand mansion showcasing heritage architecture and opulent interiors.",
    "image": "https://example.com/heritage-mansion.jpg",
    "price": 4000,
    "location": "Heritage Lane, Jaipur",
    "country": "India"
  },
  {
    "title": "Riverbank Resort",
    "description": "A resort nestled along the riverbank, offering scenic views and relaxation.",
    "image": "https://example.com/riverbank-resort.jpg",
    "price": 3200,
    "location": "Riverfront Road, Dhaka",
    "country": "Bangladesh"
  },
  {
    "title": "Coastal Retreat Villa",
    "description": "A villa overlooking the coast, offering beachside luxury and tranquility.",
    "image": "https://example.com/coastal-retreat-villa.jpg",
    "price": 3500,
    "location": "Beachfront Avenue, Goa",
    "country": "India"
  },
  {
    "title": "Bengal Tiger Lodge",
    "description": "A lodge amidst wildlife reserves, offering safari adventures and nature experiences.",
    "image": "https://example.com/bengal-tiger-lodge.jpg",
    "price": 2900,
    "location": "Sundarbans National Park, Khulna",
    "country": "Bangladesh"
  },
  {
    "title": "Cityscape Penthouse",
    "description": "A penthouse with panoramic city views, perfect for luxury urban living.",
    "image": "https://example.com/cityscape-penthouse.jpg",
    "price": 3800,
    "location": "Skyline Tower, Mumbai",
    "country": "India"
  },
  {
    "title": "Riverfront Retreat",
    "description": "A peaceful retreat by the river, offering serenity and natural beauty.",
    "image": "https://example.com/riverfront-retreat.jpg",
    "price": 2700,
    "location": "Riverside Boulevard, Dhaka",
    "country": "Bangladesh"
  },
  {
    "title": "Hilltop Villa",
    "description": "A villa perched atop a hill, offering panoramic views and tranquility.",
    "image": "https://example.com/hilltop-villa.jpg",
    "price": 2300,
    "location": "Hillcrest Drive, Islamabad",
    "country": "Pakistan"
  },
  {
    "title": "Alpine Luxury Chalet",
    "description": "A luxurious chalet nestled in the Swiss Alps, offering breathtaking mountain views.",
    "image": "https://example.com/alpine-luxury-chalet.jpg",
    "price": 35000,
    "location": "Zermatt, Switzerland",
    "country": "Switzerland"
  },
  {
    "title": "Lakefront Mansion",
    "description": "A grand mansion overlooking a tranquil lake in Canada, perfect for luxury living.",
    "image": "https://example.com/lakefront-mansion.jpg",
    "price": 45000,
    "location": "Lake Louise, Alberta, Canada",
    "country": "Canada"
  },
  {
    "title": "Traditional Ryokan",
    "description": "A traditional Japanese ryokan with tatami rooms and serene gardens.",
    "image": "https://example.com/traditional-ryokan.jpg",
    "price": 30000,
    "location": "Kyoto, Japan",
    "country": "Japan"
  },
  {
    "title": "Mountain View Lodge",
    "description": "A cozy lodge with panoramic mountain views in the Canadian Rockies.",
    "image": "https://example.com/mountain-view-lodge.jpg",
    "price": 25000,
    "location": "Banff, Alberta, Canada",
    "country": "Canada"
  },
  {
    "title": "Modern City Apartment",
    "description": "A modern apartment with city skyline views in downtown Tokyo.",
    "image": "https://example.com/modern-city-apartment.jpg",
    "price": 20000,
    "location": "Tokyo, Japan",
    "country": "Japan"
  },
  {
    "title": "Luxury Villa with Lake Views",
    "description": "A luxurious villa overlooking a serene lake in Switzerland.",
    "image": "https://example.com/luxury-villa-lake-views.jpg",
    "price": 40000,
    "location": "Lake Geneva, Switzerland",
    "country": "Switzerland"
  },
  {
    "title": "Historic Hut in the Alps",
    "description": "A charming historic hut nestled in the Swiss Alps, perfect for alpine adventures.",
    "image": "https://example.com/historic-hut-alps.jpg",
    "price": 15000,
    "location": "Interlaken, Switzerland",
    "country": "Switzerland"
  },
  {
    "title": "Bamboo Forest Retreat",
    "description": "A tranquil retreat surrounded by bamboo forests in China.",
    "image": "https://example.com/bamboo-forest-retreat.jpg",
    "price": 30000,
    "location": "Hangzhou, China",
    "country": "China"
  },
  {
    "title": "Ski-In/Ski-Out Chalet",
    "description": "A ski-in/ski-out chalet with direct access to the slopes in Canada.",
    "image": "https://example.com/ski-in-ski-out-chalet.jpg",
    "price": 35000,
    "location": "Whistler, British Columbia, Canada",
    "country": "Canada"
  },
  {
    "title": "Zen Garden Villa",
    "description": "A villa with a serene Zen garden in Kyoto, Japan, perfect for relaxation.",
    "image": "https://example.com/zen-garden-villa-japan.jpg",
    "price": 40000,
    "location": "Kyoto, Japan",
    "country": "Japan"
  },
  {
    "title": "Mountain View Resort",
    "description": "A resort with panoramic mountain views in the Swiss Alps.",
    "image": "https://example.com/mountain-view-resort-switzerland.jpg",
    "price": 45000,
    "location": "Davos, Switzerland",
    "country": "Switzerland"
  },
  {
    "title": "Lakeside Retreat in Canada",
    "description": "A lakeside retreat offering tranquility and nature in Canada.",
    "image": "https://example.com/lakeside-retreat-canada.jpg",
    "price": 30000,
    "location": "Jasper, Alberta, Canada",
    "country": "Canada"
  },
  {
    "title": "Traditional Chinese Courtyard House",
    "description": "A traditional Chinese courtyard house in Beijing, China, showcasing cultural heritage.",
    "image": "https://example.com/traditional-chinese-courtyard.jpg",
    "price": 20000,
    "location": "Beijing, China",
    "country": "China"
  },
  {
    "title": "Luxury Riverside Villa",
    "description": "A luxurious villa overlooking a scenic river in Switzerland.",
    "image": "https://example.com/luxury-riverside-villa-switzerland.jpg",
    "price": 50000,
    "location": "Lucerne, Switzerland",
    "country": "Switzerland"
  },
  {
    "title": "Historic Samurai Residence",
    "description": "A historic samurai residence in Japan, offering a glimpse into the past.",
    "image": "https://example.com/historic-samurai-residence.jpg",
    "price": 40000,
    "location": "Kanazawa, Japan",
    "country": "Japan"
  },
  {
    "title": "Modern Skyline Apartment",
    "description": "A modern apartment with stunning city skyline views in Shanghai, China.",
    "image": "https://example.com/modern-skyline-apartment-china.jpg",
    "price": 25000,
    "location": "Shanghai, China",
    "country": "China"
  },
  {
    "title": "Ski Chalet with Mountain Views",
    "description": "A cozy ski chalet with panoramic mountain views in Switzerland.",
    "image": "https://example.com/ski-chalet-mountain-views-switzerland.jpg",
    "price": 35000,
    "location": "Verbier, Switzerland",
    "country": "Switzerland"
  },
  {
    "title": "Luxury Lakeside Cabin",
    "description": "A luxurious lakeside cabin retreat in Canada, perfect for nature lovers.",
    "image": "https://example.com/luxury-lakeside-cabin-canada.jpg",
    "price": 30000,
    "location": "Muskoka, Ontario, Canada",
    "country": "Canada"
  },
  {
    "title": "Traditional Tea House",
    "description": "A traditional Japanese tea house in Kyoto, offering tea ceremonies and cultural experiences.",
    "image": "https://example.com/traditional-tea-house.jpg",
    "price": 20000,
    "location": "Kyoto, Japan",
    "country": "Japan"
  },
  {
    "title": "Luxury Cityscape Penthouse",
    "description": "A luxury penthouse with stunning city views in Tokyo, Japan.",
    "image": "https://example.com/luxury-cityscape-penthouse-japan.jpg",
    "price": 50000,
    "location": "Tokyo, Japan",
    "country": "Japan"
  },
  {
    "title": "Mountain Retreat",
    "description": "A secluded mountain retreat in Switzerland, perfect for relaxation and outdoor activities.",
    "image": "https://example.com/mountain-retreat-switzerland.jpg",
    "price": 40000,
    "location": "Gstaad, Switzerland",
    "country": "Switzerland"
  },
  {
    "title": "Riverside Mansion",
    "description": "A luxurious riverside mansion in China, offering waterfront living.",
    "image": "https://example.com/riverside-mansion-china.jpg",
    "price": 45000,
    "location": "Hangzhou, China",
    "country": "China"
  },
  {
    "title": "Mountain View Cabin",
    "description": "A cozy cabin with panoramic mountain views in Canada, perfect for nature retreats.",
    "image": "https://example.com/mountain-view-cabin-canada.jpg",
    "price": 30000,
    "location": "Whistler, British Columbia, Canada",
    "country": "Canada"
  },
  {
    "title": "Traditional Japanese Inn",
    "description": "A traditional Japanese inn (ryokan) in Kyoto, offering tatami rooms and hot springs.",
    "image": "https://example.com/traditional-japanese-inn.jpg",
    "price": 25000,
    "location": "Kyoto, Japan",
    "country": "Japan"
  },
  {
    "title": "Luxury Lakeside Villa",
    "description": "A luxurious lakeside villa in Switzerland, offering stunning lake views and tranquility.",
    "image": "https://example.com/luxury-lakeside-villa-switzerland.jpg",
    "price": 45000,
    "location": "Lake Zurich, Switzerland",
    "country": "Switzerland"
  },
  {
    "title": "Riverside Retreat",
    "description": "A tranquil riverside retreat in China, perfect for relaxation and meditation.",
    "image": "https://example.com/riverside-retreat-china.jpg",
    "price": 30000,
    "location": "Hangzhou, China",
    "country": "China"
  },
  {
    "title": "Ski Chalet with Alpine Views",
    "description": "A cozy ski chalet with stunning alpine views in Switzerland.",
    "image": "https://example.com/ski-chalet-alpine-views-switzerland.jpg",
    "price": 35000,
    "location": "St. Moritz, Switzerland",
    "country": "Switzerland"
  },
  {
    "title": "Luxury Mountain Lodge",
    "description": "A luxury mountain lodge in Canada, offering panoramic mountain views and upscale amenities.",
    "image": "https://example.com/luxury-mountain-lodge-canada.jpg",
    "price": 40000,
    "location": "Whistler, British Columbia, Canada",
    "country": "Canada"
  }
]

module.exports = {data:sampledata};
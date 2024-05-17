const sampledata = 
[
  {
      "title": "Serenity Cottage",
      "description": "A cozy cottage nestled in the heart of nature, perfect for a peaceful getaway.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8MHwwfHx8Mg%3D%3D"
      },
      "price": 1500,
      "location": "New Bridge, Kathalpara",
      "country": "Bangladesh"
  },
  {
      "title": "Oceanview Retreat",
      "description": "A luxurious retreat with stunning ocean views, ideal for a relaxing vacation.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FsbHBhcGVyfGVufDB8MHwwfHx8Mg%3D%3D"
      },
      "price": 2500,
      "location": "Seaside Avenue, Coastal City",
      "country": "United States"
  },
  {
      "title": "Mountain Haven",
      "description": "An idyllic mountain retreat surrounded by breathtaking scenery, perfect for nature lovers.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2FsbHBhcGVyfGVufDB8MHwwfHx8Mg%3D%3D"
      },
      "price": 1800,
      "location": "Alpine Valley, Snowpeak",
      "country": "Canada"
  },
  {
      "title": "Riverside Oasis",
      "description": "A tranquil oasis by the river, offering a peaceful escape from city life.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1554034483-04fda0d3507b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 1200,
      "location": "Riverbank Road, Willow Creek",
      "country": "Australia"
  },
  {
      "title": "Enchanted Hideaway",
      "description": "A magical retreat surrounded by enchanted forests and mystical creatures.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 2000,
      "location": "Fairy Glen, Whispering Woods",
      "country": "Ireland"
  },
  {
      "title": "Urban Loft",
      "description": "A modern loft in the heart of the city, offering chic urban living.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 1800,
      "location": "Downtown District, Metropolis",
      "country": "United States"
  },
  {
      "title": "Tropical Paradise Villa",
      "description": "A luxurious villa nestled amidst palm trees and turquoise waters.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1479030160180-b1860951d696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 3000,
      "location": "Coconut Bay, Azure Coast",
      "country": "Maldives"
  },
  {
      "title": "Rustic Cabin Retreat",
      "description": "A cozy cabin retreat with a crackling fireplace, perfect for winter getaways.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 1500,
      "location": "Woodland Trail, Pine Forest",
      "country": "Canada"
  },
  {
      "title": "Secluded Beach Bungalow",
      "description": "A secluded bungalow on a pristine beach, offering ultimate relaxation.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 2200,
      "location": "Sandy Cove, Tranquil Bay",
      "country": "Thailand"
  },
  {
      "title": "Elegant Chateau",
      "description": "An elegant chateau with historical charm and luxurious amenities.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 4000,
      "location": "Chateau Lane, Grand Valley",
      "country": "France"
  },
  {
      "title": "Mountain Lodge Retreat",
      "description": "A mountain lodge retreat with panoramic views and outdoor adventures.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1494200483035-db7bc6aa5739?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 2800,
      "location": "Alpine Peak, Snowy Range",
      "country": "Switzerland"
  },
  {
      "title": "Desert Oasis Villa",
      "description": "A luxurious villa oasis amidst desert dunes, offering serenity and luxury.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1507187632231-5beb21a654a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 3200,
      "location": "Sahara Ridge, Golden Sands",
      "country": "United Arab Emirates"
  },
  {
      "title": "Historic Manor House",
      "description": "A historic manor house with period charm and beautiful gardens.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 3500,
      "location": "Heritage Lane, Oakwood Estate",
      "country": "United Kingdom"
  },
  {
      "title": "Lakeside Cabin Retreat",
      "description": "A charming cabin retreat by the lake, perfect for fishing and relaxation.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1502657877623-f66bf489d236?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 1700,
      "location": "Lakeview Drive, Tranquil Waters",
      "country": "Sweden"
  },
  {
      "title": "Zen Garden Villa",
      "description": "A villa with a serene Zen garden, ideal for meditation and peaceful retreats.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 2600,
      "location": "Zen Boulevard, Harmony Haven",
      "country": "Japan"
  },
  {
      "title": "Rooftop Penthouse",
      "description": "A luxurious penthouse with a rooftop terrace and stunning city views.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 3800,
      "location": "Skyline Avenue, Downtown Metropolis",
      "country": "Singapore"
  },
  {
      "title": "Coastal Cliff Cottage",
      "description": "A charming cottage perched on a coastal cliff, offering breathtaking ocean views.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1533109721025-d1ae7ee7c1e1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 1900,
      "location": "Clifftop Lane, Seaview Bluff",
      "country": "New Zealand"
  },
  {
      "title": "Safari Lodge",
      "description": "A luxurious safari lodge with wildlife adventures and luxurious accommodations.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 2900,
      "location": "Savannah Plains, Wild Kingdom",
      "country": "Kenya"
  },
  {
      "title": "Modern Beachfront Villa",
      "description": "A modern villa with direct beach access and contemporary design.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 2700,
      "location": "Beachfront Boulevard, Oceanview Bay",
      "country": "Spain"
  },
  {
      "title": "Alpine Chalet",
      "description": "A cozy chalet nestled in the Alps, perfect for skiing and winter vacations.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 2300,
      "location": "Alpine Meadows, Snowy Peaks",
      "country": "Austria"
  },
  {
      "title": "Island Paradise Retreat",
      "description": "A secluded retreat on a private island, offering exclusivity and luxury.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 4200,
      "location": "Paradise Island, Crystal Waters",
      "country": "Bahamas"
  },
  {
      "title": "Artistic Loft",
      "description": "An artistic loft space with creative vibes and inspiring views.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 2000,
      "location": "Art District, Bohemian Avenue",
      "country": "Italy"
  },
  {
      "title": "Historic Castle",
      "description": "A majestic castle steeped in history and grandeur, fit for royalty.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 5000,
      "location": "Castle Hill, Royal Estate",
      "country": "Germany"
  },
  {
      "title": "Countryside Farmhouse",
      "description": "A charming farmhouse in the countryside, surrounded by rolling hills.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 1600,
      "location": "Meadow Lane, Green Acres",
      "country": "Iceland"
  },
  {
      "title": "Riverfront Villa",
      "description": "A luxurious villa overlooking a serene river, perfect for peaceful retreats.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 3000,
      "location": "Riverside Avenue, Dhaka",
      "country": "Bangladesh"
  },
  {
      "title": "Himalayan View Retreat",
      "description": "A retreat with breathtaking views of the Himalayas, ideal for nature enthusiasts.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 3500,
      "location": "Mountain Peak, Darjeeling",
      "country": "India"
  },
  {
      "title": "Beachside Bungalow",
      "description": "A cozy bungalow just steps away from the beach, offering seaside relaxation.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1541450805268-4822a3a774ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 2500,
      "location": "Coastal Road, Mumbai",
      "country": "India"
  },
  {
      "title": "Lakeside Cabin",
      "description": "A charming cabin by the lake, perfect for fishing and tranquility.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 2000,
      "location": "Lakeview Retreat, Srinagar",
      "country": "India"
  },
  {
      "title": "Tea Plantation Cottage",
      "description": "A cottage amidst lush tea plantations, offering a serene escape.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1495420378468-78588a508652?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 1800,
      "location": "Tea Gardens, Assam",
      "country": "India"
  },
  {
      "title": "City Center Apartment",
      "description": "An apartment in the bustling city center, perfect for urban exploration.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1512923927402-a9867a68180e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 1500,
      "location": "City Tower, Karachi",
      "country": "Pakistan"
  },
  {
      "title": "Historic Haveli",
      "description": "A traditional haveli with historical charm and cultural richness.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1541832039-cab7e4310f28?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 2200,
      "location": "Old City, Lahore",
      "country": "Pakistan"
  },
  {
      "title": "Mountain View Chalet",
      "description": "A chalet with panoramic mountain views, perfect for alpine getaways.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1501908734255-16579c18c25f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 2800,
      "location": "Himalayan Foothills, Islamabad",
      "country": "Pakistan"
  },
  {
      "title": "Heritage Mansion",
      "description": "A grand mansion showcasing heritage architecture and opulent interiors.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1524946274118-e7680e33ccc5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHdhbGxwYXBlcnxlbnwwfDB8MHx8fDI%3D"
      },
      "price": 4000,
      "location": "Heritage Lane, Jaipur",
      "country": "India"
  },
  {
      "title": "Riverbank Resort",
      "description": "A resort nestled along the riverbank, offering scenic views and relaxation.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 3200,
      "location": "Riverfront Road, Dhaka",
      "country": "Bangladesh"
  },
  {
      "title": "Coastal Retreat Villa",
      "description": "A villa overlooking the coast, offering beachside luxury and tranquility.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 3500,
      "location": "Beachfront Avenue, Goa",
      "country": "India"
  },
  {
      "title": "Bengal Tiger Lodge",
      "description": "A lodge amidst wildlife reserves, offering safari adventures and nature experiences.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1533139143976-30918502365b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 2900,
      "location": "Sundarbans National Park, Khulna",
      "country": "Bangladesh"
  },
  {
      "title": "Cityscape Penthouse",
      "description": "A penthouse with panoramic city views, perfect for luxury urban living.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 3800,
      "location": "Skyline Tower, Mumbai",
      "country": "India"
  },
  {
      "title": "Riverfront Retreat",
      "description": "A peaceful retreat by the river, offering serenity and natural beauty.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 2700,
      "location": "Riverside Boulevard, Dhaka",
      "country": "Bangladesh"
  },
  {
      "title": "Hilltop Villa",
      "description": "A villa perched atop a hill, offering panoramic views and tranquility.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 2300,
      "location": "Hillcrest Drive, Islamabad",
      "country": "Pakistan"
  },
  {
      "title": "Alpine Luxury Chalet",
      "description": "A luxurious chalet nestled in the Swiss Alps, offering breathtaking mountain views.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1508108712903-49b7ef9b1df8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 35000,
      "location": "Zermatt, Switzerland",
      "country": "Switzerland"
  },
  {
      "title": "Lakefront Mansion",
      "description": "A grand mansion overlooking a tranquil lake in Canada, perfect for luxury living.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1529573813483-53bd9ede667e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 45000,
      "location": "Lake Louise, Alberta, Canada",
      "country": "Canada"
  },
  {
      "title": "Traditional Ryokan",
      "description": "A traditional Japanese ryokan with tatami rooms and serene gardens.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1548983965-416c1920352e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 30000,
      "location": "Kyoto, Japan",
      "country": "Japan"
  },
  {
      "title": "Mountain View Lodge",
      "description": "A cozy lodge with panoramic mountain views in the Canadian Rockies.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 25000,
      "location": "Banff, Alberta, Canada",
      "country": "Canada"
  },
  {
      "title": "Modern City Apartment",
      "description": "A modern apartment with city skyline views in downtown Tokyo.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1504006833117-8886a355efbf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 20000,
      "location": "Tokyo, Japan",
      "country": "Japan"
  },
  {
      "title": "Luxury Villa with Lake Views",
      "description": "A luxurious villa overlooking a serene lake in Switzerland.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 40000,
      "location": "Lake Geneva, Switzerland",
      "country": "Switzerland"
  },
  {
      "title": "Historic Hut in the Alps",
      "description": "A charming historic hut nestled in the Swiss Alps, perfect for alpine adventures.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1620121684840-edffcfc4b878?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 15000,
      "location": "Interlaken, Switzerland",
      "country": "Switzerland"
  },
  {
      "title": "Bamboo Forest Retreat",
      "description": "A tranquil retreat surrounded by bamboo forests in China.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 30000,
      "location": "Hangzhou, China",
      "country": "China"
  },
  {
      "title": "Ski-In/Ski-Out Chalet",
      "description": "A ski-in/ski-out chalet with direct access to the slopes in Canada.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1510776632413-f3e527a8dc42?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 35000,
      "location": "Whistler, British Columbia, Canada",
      "country": "Canada"
  },
  {
      "title": "Zen Garden Villa",
      "description": "A villa with a serene Zen garden in Kyoto, Japan, perfect for relaxation.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 40000,
      "location": "Kyoto, Japan",
      "country": "Japan"
  },
  {
      "title": "Mountain View Resort",
      "description": "A resort with panoramic mountain views in the Swiss Alps.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 45000,
      "location": "Davos, Switzerland",
      "country": "Switzerland"
  },
  {
      "title": "Lakeside Retreat in Canada",
      "description": "A lakeside retreat offering tranquility and nature in Canada.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1584148721201-b6432e0d5106?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 30000,
      "location": "Jasper, Alberta, Canada",
      "country": "Canada"
  },
  {
      "title": "Traditional Chinese Courtyard House",
      "description": "A traditional Chinese courtyard house in Beijing, China, showcasing cultural heritage.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1494879540385-bc170b0878a7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 20000,
      "location": "Beijing, China",
      "country": "China"
  },
  {
      "title": "Luxury Riverside Villa",
      "description": "A luxurious villa overlooking a scenic river in Switzerland.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 50000,
      "location": "Lucerne, Switzerland",
      "country": "Switzerland"
  },
  {
      "title": "Historic Samurai Residence",
      "description": "A historic samurai residence in Japan, offering a glimpse into the past.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1516834474-48c0abc2a902?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 40000,
      "location": "Kanazawa, Japan",
      "country": "Japan"
  },
  {
      "title": "Modern Skyline Apartment",
      "description": "A modern apartment with stunning city skyline views in Shanghai, China.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1503876466-1fc5143eda57?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 25000,
      "location": "Shanghai, China",
      "country": "China"
  },
  {
      "title": "Ski Chalet with Mountain Views",
      "description": "A cozy ski chalet with panoramic mountain views in Switzerland.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1536302829663-a460b9ec95b9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 35000,
      "location": "Verbier, Switzerland",
      "country": "Switzerland"
  },
  {
      "title": "Luxury Lakeside Cabin",
      "description": "A luxurious lakeside cabin retreat in Canada, perfect for nature lovers.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 30000,
      "location": "Muskoka, Ontario, Canada",
      "country": "Canada"
  },
  {
      "title": "Traditional Tea House",
      "description": "A traditional Japanese tea house in Kyoto, offering tea ceremonies and cultural experiences.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc0fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 20000,
      "location": "Kyoto, Japan",
      "country": "Japan"
  },
  {
      "title": "Luxury Cityscape Penthouse",
      "description": "A luxury penthouse with stunning city views in Tokyo, Japan.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1508796079212-a4b83cbf734d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 50000,
      "location": "Tokyo, Japan",
      "country": "Japan"
  },
  {
      "title": "Mountain Retreat",
      "description": "A secluded mountain retreat in Switzerland, perfect for relaxation and outdoor activities.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 40000,
      "location": "Gstaad, Switzerland",
      "country": "Switzerland"
  },
  {
      "title": "Riverside Mansion",
      "description": "A luxurious riverside mansion in China, offering waterfront living.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1552082919-e60010758c47?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgzfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 45000,
      "location": "Hangzhou, China",
      "country": "China"
  },
  {
      "title": "Mountain View Cabin",
      "description": "A cozy cabin with panoramic mountain views in Canada, perfect for nature retreats.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg2fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 30000,
      "location": "Whistler, British Columbia, Canada",
      "country": "Canada"
  },
  {
      "title": "Traditional Japanese Inn",
      "description": "A traditional Japanese inn (ryokan) in Kyoto, offering tatami rooms and hot springs.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1504548840739-580b10ae7715?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 25000,
      "location": "Kyoto, Japan",
      "country": "Japan"
  },
  {
      "title": "Luxury Lakeside Villa",
      "description": "A luxurious lakeside villa in Switzerland, offering stunning lake views and tranquility.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkyfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 45000,
      "location": "Lake Zurich, Switzerland",
      "country": "Switzerland"
  },
  {
      "title": "Riverside Retreat",
      "description": "A tranquil riverside retreat in China, perfect for relaxation and meditation.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1618397746666-63405ce5d015?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 30000,
      "location": "Hangzhou, China",
      "country": "China"
  },
  {
      "title": "Ski Chalet with Alpine Views",
      "description": "A cozy ski chalet with stunning alpine views in Switzerland.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1456415333674-42b11b9f5b7b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 35000,
      "location": "St. Moritz, Switzerland",
      "country": "Switzerland"
  },
  {
      "title": "Luxury Mountain Lodge",
      "description": "A luxury mountain lodge in Canada, offering panoramic mountain views and upscale amenities.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1491234323906-4f056ca415bc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 40000,
      "location": "Whistler, British Columbia, Canada",
      "country": "Canada"
  },
  {
      "title": "Luxury Mountain Lodge",
      "description": "A luxury mountain lodge in Canada, offering panoramic mountain views and upscale amenities.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1524721696987-b9527df9e512?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 40000,
      "location": "Whistler, British Columbia, Canada",
      "country": "Canada"
  },
  {
      "title": "Seaside Villa",
      "description": "A beautiful villa by the sea, perfect for relaxing vacations with stunning ocean views.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1571217668979-f46db8864f75?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA4fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 30000,
      "location": "Maui, Hawaii, USA",
      "country": "USA"
  },
  {
      "title": "Historic Castle",
      "description": "Step back in time with a stay at this historic castle, complete with medieval charm and modern comforts.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1461696114087-397271a7aedc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjExfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 50000,
      "location": "Edinburgh, Scotland, UK",
      "country": "UK"
  },
  {
      "title": "Tropical Paradise Resort",
      "description": "Embrace the laid-back luxury of this tropical paradise resort nestled on the shores of a pristine island. Bask in the warm sun on white sandy beaches, take a dip in crystal-clear waters, and indulge in spa treatments overlooking the ocean. Unwind in beachfront villas adorned with contemporary island-inspired decor and enjoy gourmet dining with ocean views.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1480241352829-e1573ff2414e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE0fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 60000,
      "location": "Bora Bora, French Polynesia",
      "country": "French Polynesia"
  },
  {
      "title": "Rustic Cabin Retreat",
      "description": "Escape to a cozy rustic cabin nestled in the heart of a dense forest. Surround yourself with towering pine trees, tranquil streams, and wildlife. The cabin features a stone fireplace, a hot tub under the stars, and hiking trails right outside your door. Disconnect from the world and reconnect with nature in this serene retreat.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE3fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 25000,
      "location": "Aspen, Colorado, USA",
      "country": "USA"
  },
  {
      "title": "Urban Chic Loft",
      "description": "Immerse yourself in the vibrant city life with a stay in this stylish urban loft. Located in the heart of a bustling metropolis, this loft offers modern design, city views, and access to trendy restaurants and nightlife. Relax in contemporary surroundings, explore local art galleries, and experience the pulse of the city from your doorstep.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 35000,
      "location": "New York City, New York, USA",
      "country": "USA"
  },
  {
      "title": "Serenity Lake House",
      "description": "Discover peace and tranquility at this charming lake house retreat. Surrounded by lush forests and overlooking a serene lake, this cozy house features a private dock, kayaks for exploring the water, and a bonfire pit for evenings under the stars. Enjoy fishing, birdwatching, or simply unwind with a book in nature's embrace.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1618472609777-b038f1f04b8d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIzfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 30000,
      "location": "Lake District, England, UK",
      "country": "UK"
  },
  {
      "title": "Luxury Mountain Lodge",
      "description": "Nestled in the heart of the Canadian Rockies, this luxury mountain lodge offers breathtaking panoramic views of snow-capped peaks. Unwind in spacious suites with cozy fireplaces and private balconies. Indulge in gourmet cuisine at the lodge's restaurant, or explore nearby hiking trails and ski slopes.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI2fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 40000,
      "location": "Whistler, British Columbia, Canada",
      "country": "Canada"
  },
  {
      "title": "Seaside Villa Retreat",
      "description": "Escape to a tranquil seaside villa overlooking the azure waters of the Pacific Ocean. This elegant retreat features lush gardens, a private infinity pool, and direct beach access. Relax in luxurious bedrooms with ocean-view balconies, and savor fresh seafood delights prepared by a private chef. Embark on scenic boat tours or simply bask in the sun on pristine white sands.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1484976063837-eab657a7aca7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI5fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 35000,
      "location": "Maui, Hawaii, USA",
      "country": "USA"
  },
  {
      "title": "Historic Castle Getaway",
      "description": "Experience a journey through centuries of history at this enchanting castle retreat. Admire intricate tapestries, antique furnishings, and majestic ballrooms. Stay in opulent suites with four-poster beds and ornate decor. Dine like royalty in grand dining halls and explore sprawling gardens with secret pathways and hidden fountains.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1493441883526-0ed85220dc0c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMyfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 50000,
      "location": "Edinburgh, Scotland, UK",
      "country": "UK"
  },
  {
      "title": "Tropical Paradise Resort",
      "description": "Embrace the laid-back luxury of this tropical paradise resort nestled on the shores of a pristine island. Bask in the warm sun on white sandy beaches, take a dip in crystal-clear waters, and indulge in spa treatments overlooking the ocean. Unwind in beachfront villas adorned with contemporary island-inspired decor and enjoy gourmet dining with ocean views.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1554110397-9bac083977c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM1fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 60000,
      "location": "Bora Bora, French Polynesia",
      "country": "French Polynesia"
  },
  {
      "title": "Rustic Cabin Retreat",
      "description": "Escape to a cozy rustic cabin nestled in the heart of a dense forest. Surround yourself with towering pine trees, tranquil streams, and wildlife. The cabin features a stone fireplace, a hot tub under the stars, and hiking trails right outside your door. Disconnect from the world and reconnect with nature in this serene retreat.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1515497957908-4d6377430754?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 25000,
      "location": "Aspen, Colorado, USA",
      "country": "USA"
  },
  {
      "title": "Urban Chic Loft",
      "description": "Immerse yourself in the vibrant city life with a stay in this stylish urban loft. Located in the heart of a bustling metropolis, this loft offers modern design, city views, and access to trendy restaurants and nightlife. Relax in contemporary surroundings, explore local art galleries, and experience the pulse of the city from your doorstep.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1558470570-c9a5a5ade867?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQxfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 35000,
      "location": "New York City, New York, USA",
      "country": "USA"
  },
  {
      "title": "Luxury Mountain Lodge",
      "description": "Nestled in the heart of the Canadian Rockies, this luxury mountain lodge offers breathtaking panoramic views of snow-capped peaks. Unwind in spacious suites with cozy fireplaces and private balconies. Indulge in gourmet cuisine at the lodge's restaurant, or explore nearby hiking trails and ski slopes.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ0fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 40000,
      "location": "Whistler, British Columbia, Canada",
      "country": "Canada"
  },
  {
      "title": "Seaside Villa Retreat",
      "description": "Escape to a tranquil seaside villa overlooking the azure waters of the Pacific Ocean. This elegant retreat features lush gardens, a private infinity pool, and direct beach access. Relax in luxurious bedrooms with ocean-view balconies, and savor fresh seafood delights prepared by a private chef. Embark on scenic boat tours or simply bask in the sun on pristine white sands.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1556139902-7367723b7e9e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ2fHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 35000,
      "location": "Maui, Hawaii, USA",
      "country": "USA"
  },
  {
      "title": "Historic Castle Getaway",
      "description": "Experience a journey through centuries of history at this enchanting castle retreat. Admire intricate tapestries, antique furnishings, and majestic ballrooms. Stay in opulent suites with four-poster beds and ornate decor. Dine like royalty in grand dining halls and explore sprawling gardens with secret pathways and hidden fountains.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUwfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 50000,
      "location": "Edinburgh, Scotland, UK",
      "country": "UK"
  },
  {
      "title": "Tropical Paradise Resort",
      "description": "Embrace the laid-back luxury of this tropical paradise resort nestled on the shores of a pristine island. Bask in the warm sun on white sandy beaches, take a dip in crystal-clear waters, and indulge in spa treatments overlooking the ocean. Unwind in beachfront villas adorned with contemporary island-inspired decor and enjoy gourmet dining with ocean views.",
      "image": {
          "filename": "image",
          "url": "https://images.unsplash.com/photo-1545105511-839f4a45a030?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUzfHx3YWxscGFwZXJ8ZW58MHwwfDB8fHwy"
      },
      "price": 60000,
      "location": "Bora Bora, French Polynesia",
      "country": "French Polynesia"
  }
]
module.exports = {data:sampledata};


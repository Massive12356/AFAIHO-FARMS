export interface Product {
  id: number;
  name: string;
  category: 'Crops' | 'Livestock' | 'Dairy' | 'Poultry';
  description: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    category: 'Crops',
    description: 'Vine-ripened organic tomatoes with exceptional flavor. Grown using sustainable methods that enhance soil health and promote biodiversity. Hand-picked at peak ripeness for optimal taste and nutritional value.',
    price: '$4.99/lb',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Free-Range Eggs',
    category: 'Poultry',
    description: 'Premium quality eggs from hens raised in open pastures with access to natural foraging. Our ethical farming practices ensure the highest nutritional value while supporting animal welfare and environmental sustainability.',
    price: '$6.99/dozen',
    image: 'https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'Raw Honey',
    category: 'Crops',
    description: 'Pure, unfiltered honey harvested from our on-farm beehives. Produced sustainably to support pollinator health while maintaining the natural enzymes and nutrients that make honey a superfood.',
    price: '$12.99/jar',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    name: 'Grass-Fed Beef',
    category: 'Livestock',
    description: 'Premium quality beef from cattle raised on open pastures with a natural grass diet. Our regenerative grazing practices improve soil health while producing lean, flavorful meat with superior nutritional profile.',
    price: '$8.99/lb',
    image: 'https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    name: 'Fresh Milk',
    category: 'Dairy',
    description: 'Whole milk from grass-fed dairy cows raised with compassionate care. Our dairy operation integrates with our crop production to create a sustainable cycle that benefits both animal welfare and environmental health.',
    price: '$5.99/gallon',
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    name: 'Organic Carrots',
    category: 'Crops',
    description: 'Sweet, crunchy organic carrots grown without synthetic pesticides or fertilizers. Cultivated using crop rotation techniques that maintain soil fertility and promote beneficial microbial activity for optimal nutrition.',
    price: '$3.99/lb',
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 7,
    name: 'Farm Chicken',
    category: 'Poultry',
    description: 'Free-range chicken raised naturally on our farm with access to open pastures. Our mixed farming system allows chickens to forage naturally while contributing to pest control and soil fertilization.',
    price: '$7.99/lb',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 8,
    name: 'Fresh Cheese',
    category: 'Dairy',
    description: 'Handcrafted artisan cheese made from milk of our grass-fed dairy cows. Produced using traditional methods combined with modern food safety standards to create exceptional flavor while supporting sustainable dairy farming.',
    price: '$9.99/lb',
    image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 9,
    name: 'Sweet Corn',
    category: 'Crops',
    description: 'Freshly picked sweet corn with exceptional tenderness and natural sweetness. Grown using companion planting techniques that enhance growth while naturally deterring pests without chemical interventions.',
    price: '$5.99/dozen',
    image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 10,
    name: 'Lamb Meat',
    category: 'Livestock',
    description: 'Tender lamb from pasture-raised sheep that graze on our diverse pastures. Our rotational grazing system ensures optimal nutrition for the animals while promoting grassland health and carbon sequestration.',
    price: '$11.99/lb',
    image: 'https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 11,
    name: 'Greek Yogurt',
    category: 'Dairy',
    description: 'Creamy, probiotic-rich yogurt made fresh daily using traditional fermentation methods. Our dairy operation supports the farm ecosystem by integrating with our crop and livestock systems for maximum sustainability.',
    price: '$4.99/container',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 12,
    name: 'Fresh Lettuce',
    category: 'Crops',
    description: 'Crisp, organic lettuce varieties grown using protective cover cropping and natural pest management. Harvested at dawn for maximum freshness and nutritional content, ensuring the best possible flavor and texture.',
    price: '$2.99/head',
    image: 'https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];
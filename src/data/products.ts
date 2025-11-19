// livestock
import livesctock1 from '../public/images/29.jpeg'
import livesctock2 from '../public/images/25.jpeg'
import livesctock3 from '../public/images/26.jpeg'
import livesctock4 from '../public/images/27.jpeg'
import livesctock5 from '../public/images/28.jpeg'
import livesctock6 from '../public/images/29.jpeg'

// crops
import tomatoes1 from '../public/images/toamtoes1.jpg'
import tomatoes2 from '../public/images/toamtoes2.jpg'
import tomatoes3 from '../public/images/tomatoes3.jpg'
import maize1 from  '../public/images/maize1.jpg'
import maize2 from  '../public/images/maize2.jpg'
import lettuce1 from  '../public/images/lettuce1.jpg'
import lettuce2 from  '../public/images/lettuce2.jpg'
import carrots1 from '../public/images/carrots1.jpg'
import carrots2 from '../public/images/carrot2.jpg'

// dairy
import cowmilk1 from '../public/images/cowMilk1.jpg'
import cowmilk2 from '../public/images/cowMilk2.jpg'

// poultry 
import chicken1 from '../public/images/chicken1.jpg'
import chicken2 from '../public/images/chicken2.jpg'
import chicken3 from '../public/images/chicken3.jpg'
import eggs1 from '../public/images/eggs1.jpg'
import eggs2 from '../public/images/egg2.jpg'

// honey 
import honey from '../public/images/honey1.jpg'

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
    name: "Fresh Tomatoes",
    category: "Crops",
    description:
      "Vine-ripened organic tomatoes with exceptional flavor. Grown using sustainable methods that enhance soil health and promote biodiversity. Hand-picked at peak ripeness for optimal taste and nutritional value.",
    price: "$4.99/lb",
    image: tomatoes1,
  },
  {
    id: 2,
    name: "Free-Range Eggs",
    category: "Poultry",
    description:
      "Premium quality eggs from hens raised in open pastures with access to natural foraging. Our ethical farming practices ensure the highest nutritional value while supporting animal welfare and environmental sustainability.",
    price: "$6.99/dozen",
    image: eggs1,
  },
  {
    id: 3,
    name: "Raw Honey",
    category: "Crops",
    description:
      "Pure, unfiltered honey harvested from our on-farm beehives. Produced sustainably to support pollinator health while maintaining the natural enzymes and nutrients that make honey a superfood.",
    price: "$12.99/jar",
    image: honey,
  },
  {
    id: 4,
    name: "Grass-Fed Beef",
    category: "Livestock",
    description:
      "Premium quality beef from cattle raised on open pastures with a natural grass diet. Our regenerative grazing practices improve soil health while producing lean, flavorful meat with superior nutritional profile.",
    price: "$8.99/lb",
    image: livesctock1,
  },
  {
    id: 5,
    name: "Ghanaian Natural Yogurt",
    category: "Dairy",
    description:
      "Creamy, probiotic-rich yogurt made fresh daily using traditional fermentation methods with natural cow milk from our grass-fed Ghanaian cattle. Our dairy operation supports the local ecosystem by integrating with our crop and livestock systems for maximum sustainability.",
    price: "₵45.00/container",
    image: cowmilk2,
  },
  {
    id: 6,
    name: "Organic Carrots",
    category: "Crops",
    description:
      "Sweet, crunchy organic carrots grown without synthetic pesticides or fertilizers. Cultivated using crop rotation techniques that maintain soil fertility and promote beneficial microbial activity for optimal nutrition.",
    price: "$3.99/lb",
    image: carrots1,
  },
  {
    id: 7,
    name: "Farm Chicken",
    category: "Poultry",
    description:
      "Free-range chicken raised naturally on our farm with access to open pastures. Our mixed farming system allows chickens to forage naturally while contributing to pest control and soil fertilization.",
    price: "$7.99/lb",
    image: eggs2,
  },
  {
    id: 8,
    name: "Farm Chicken",
    category: "Poultry",
    description:
      "Handcrafted artisan cheese made from milk of our grass-fed dairy cows. Produced using traditional methods combined with modern food safety standards to create exceptional flavor while supporting sustainable dairy farming.",
    price: "$9.99/lb",
    image: chicken1,
  },
  {
    id: 9,
    name: "Sweet Corn",
    category: "Crops",
    description:
      "Freshly picked sweet corn with exceptional tenderness and natural sweetness. Grown using companion planting techniques that enhance growth while naturally deterring pests without chemical interventions.",
    price: "$5.99/dozen",
    image: maize1,
  },
  {
    id: 10,
    name: "Cow Meat",
    category: "Livestock",
    description:
      "Tender Cow from pasture-raised sheep that graze on our diverse pastures. Our rotational grazing system ensures optimal nutrition for the animals while promoting grassland health and carbon sequestration.",
    price: "$11.99/lb",
    image: livesctock2,
  },
  {
    id: 11,
    name: "Cow Meat",
    category: "Livestock",
    description:
      "Tender Cow from pasture-raised sheep that graze on our diverse pastures. Our rotational grazing system ensures optimal nutrition for the animals while promoting grassland health and carbon sequestration.",
    price: "$11.99/lb",
    image: livesctock3,
  },
  {
    id: 12,
    name: "Cow Meat",
    category: "Livestock",
    description:
      "Tender Cow from pasture-raised sheep that graze on our diverse pastures. Our rotational grazing system ensures optimal nutrition for the animals while promoting grassland health and carbon sequestration.",
    price: "$11.99/lb",
    image: livesctock4,
  },
  {
    id: 13,
    name: "Cow Meat",
    category: "Livestock",
    description:
      "Tender Cow from pasture-raised sheep that graze on our diverse pastures. Our rotational grazing system ensures optimal nutrition for the animals while promoting grassland health and carbon sequestration.",
    price: "$11.99/lb",
    image: livesctock5,
  },
  {
    id: 14,
    name: "Cow Meat",
    category: "Livestock",
    description:
      "Tender Cow from pasture-raised sheep that graze on our diverse pastures. Our rotational grazing system ensures optimal nutrition for the animals while promoting grassland health and carbon sequestration.",
    price: "$11.99/lb",
    image: livesctock6,
  },
  {
    id: 15,
    name: "Ghanaian Natural Yogurt",
    category: "Dairy",
    description:
      "Creamy, probiotic-rich yogurt made fresh daily using traditional fermentation methods with natural cow milk from our grass-fed Ghanaian cattle. Our dairy operation supports the local ecosystem by integrating with our crop and livestock systems for maximum sustainability.",
    price: "₵45.00/container",
    image: cowmilk1,
  },
  {
    id: 16,
    name: "Fresh Lettuce",
    category: "Crops",
    description:
      "Crisp, organic lettuce varieties grown using protective cover cropping and natural pest management. Harvested at dawn for maximum freshness and nutritional content, ensuring the best possible flavor and texture.",
    price: "$2.99/head",
    image: lettuce1,
  },
  {
    id: 17,
    name: "Fresh Lettuce",
    category: "Crops",
    description:
      "Crisp, organic lettuce varieties grown using protective cover cropping and natural pest management. Harvested at dawn for maximum freshness and nutritional content, ensuring the best possible flavor and texture.",
    price: "$2.99/head",
    image: lettuce2,
  },
  {
    id: 18,
    name: "Organic Carrots",
    category: "Crops",
    description:
      "Sweet, crunchy organic carrots grown without synthetic pesticides or fertilizers. Cultivated using crop rotation techniques that maintain soil fertility and promote beneficial microbial activity for optimal nutrition.",
    price: "$3.99/lb",
    image: carrots2,
  },
  {
    id: 19,
    name: "Sweet Corn",
    category: "Crops",
    description:
      "Freshly picked sweet corn with exceptional tenderness and natural sweetness. Grown using companion planting techniques that enhance growth while naturally deterring pests without chemical interventions.",
    price: "$5.99/dozen",
    image: maize2,
  },
  {
    id: 20,
    name: "Fresh Tomatoes",
    category: "Crops",
    description:
      "Vine-ripened organic tomatoes with exceptional flavor. Grown using sustainable methods that enhance soil health and promote biodiversity. Hand-picked at peak ripeness for optimal taste and nutritional value.",
    price: "$4.99/lb",
    image: tomatoes2,
  },
  {
    id: 21,
    name: "Fresh Tomatoes",
    category: "Crops",
    description:
      "Vine-ripened organic tomatoes with exceptional flavor. Grown using sustainable methods that enhance soil health and promote biodiversity. Hand-picked at peak ripeness for optimal taste and nutritional value.",
    price: "$4.99/lb",
    image: tomatoes3,
  },
  {
    id: 22,
    name: "Free-Range Eggs",
    category: "Poultry",
    description:
      "Premium quality eggs from hens raised in open pastures with access to natural foraging. Our ethical farming practices ensure the highest nutritional value while supporting animal welfare and environmental sustainability.",
    price: "$6.99/dozen",
    image: eggs2,
  },
  {
    id: 23,
    name: "Farm Chicken",
    category: "Poultry",
    description:
      "Handcrafted artisan cheese made from milk of our grass-fed dairy cows. Produced using traditional methods combined with modern food safety standards to create exceptional flavor while supporting sustainable dairy farming.",
    price: "$9.99/lb",
    image: chicken2,
  },
  {
    id: 24,
    name: "Farm Chicken",
    category: "Poultry",
    description:
      "Handcrafted artisan cheese made from milk of our grass-fed dairy cows. Produced using traditional methods combined with modern food safety standards to create exceptional flavor while supporting sustainable dairy farming.",
    price: "$9.99/lb",
    image: chicken3,
  },
];
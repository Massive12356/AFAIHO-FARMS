// Import all the local images
import livesctock1 from '../public/images/25.jpeg'
import livesctock2 from '../public/images/26.jpeg'
import livesctock3 from '../public/images/27.jpeg'
import livesctock4 from '../public/images/28.jpeg'
import livesctock5 from '../public/images/29.jpeg'

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

// Additional farm images
import farm1 from '../public/images/1.jpeg'
import farm2 from '../public/images/2.jpeg'
import farm3 from '../public/images/4.jpeg'
import farm4 from '../public/images/26.jpeg'
import farm5 from '../public/images/27.jpeg'

// Worker images
import worker3 from '../public/images/28.jpeg'
import worker4 from '../public/images/26.jpeg'
import worker5 from '../public/images/25.jpeg'
import worker6 from '../public/images/29.jpeg'
import worker7 from '../public/images/13.jpeg'

// Machinery images
import machinery1 from '../public/images/machinery1.jpg'
import machinery2 from '../public/images/machinery2.avif'
import machinery3 from '../public/images/machinery3.avif'
import machinery4 from '../public/images/machinery4.webp'
import machinery5 from '../public/images/machinery5.jpg'

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  // Farm category images
  {
    id: 1,
    url: farm1,
    alt: 'Farm landscape at sunrise',
    category: 'Farm'
  },
  {
    id: 2,
    url: farm2,
    alt: 'Farm fields during harvest',
    category: 'Farm'
  },
  {
    id: 3,
    url: farm3,
    alt: 'Farm barn and equipment',
    category: 'Farm'
  },
  {
    id: 4,
    url: farm4,
    alt: 'Farm greenhouse',
    category: 'Farm'
  },
  {
    id: 5,
    url: farm5,
    alt: 'Farm silo and buildings',
    category: 'Farm'
  },
  
  // Workers category images
  {
    id: 6,
    url: worker3,
    alt: 'Farm worker with produce',
    category: 'Workers'
  },
  {
    id: 7,
    url: worker4,
    alt: 'Farmers at market',
    category: 'Workers'
  },
  {
    id: 8,
    url: worker5,
    alt: 'Worker with fresh produce',
    category: 'Workers'
  },
  {
    id: 9,
    url: worker6,
    alt: 'Farm team working together',
    category: 'Workers'
  },
  {
    id: 10,
    url: worker7,
    alt: 'Worker in greenhouse',
    category: 'Workers'
  },
  
  // Produce category images (from products)
  {
    id: 11,
    url: tomatoes1,
    alt: 'Fresh organic tomatoes',
    category: 'Produce'
  },
  {
    id: 12,
    url: tomatoes2,
    alt: 'Vine-ripened tomatoes',
    category: 'Produce'
  },
  {
    id: 13,
    url: tomatoes3,
    alt: 'Heirloom tomatoes',
    category: 'Produce'
  },
  {
    id: 14,
    url: maize1,
    alt: 'Fresh sweet corn',
    category: 'Produce'
  },
  {
    id: 15,
    url: maize2,
    alt: 'Corn harvest',
    category: 'Produce'
  },
  {
    id: 16,
    url: lettuce1,
    alt: 'Crisp fresh lettuce',
    category: 'Produce'
  },
  {
    id: 17,
    url: lettuce2,
    alt: 'Organic lettuce varieties',
    category: 'Produce'
  },
  {
    id: 18,
    url: carrots1,
    alt: 'Fresh organic carrots',
    category: 'Produce'
  },
  {
    id: 19,
    url: carrots2,
    alt: 'Crunchy carrots',
    category: 'Produce'
  },
  {
    id: 20,
    url: honey,
    alt: 'Pure raw honey',
    category: 'Produce'
  },
  
  // Livestock category images (from products)
  {
    id: 21,
    url: livesctock1,
    alt: 'Grass-fed beef cattle',
    category: 'Livestock'
  },
  {
    id: 22,
    url: livesctock2,
    alt: 'Pasture-raised livestock',
    category: 'Livestock'
  },
  {
    id: 23,
    url: livesctock3,
    alt: 'Healthy farm animals',
    category: 'Livestock'
  },
  {
    id: 24,
    url: livesctock4,
    alt: 'Livestock grazing',
    category: 'Livestock'
  },
  {
    id: 25,
    url: livesctock5,
    alt: 'Farm livestock',
    category: 'Livestock'
  },
  
  // Dairy category images (from products)
  {
    id: 26,
    url: cowmilk1,
    alt: 'Fresh dairy products',
    category: 'Dairy'
  },
  {
    id: 27,
    url: cowmilk2,
    alt: 'Creamy yogurt and milk',
    category: 'Dairy'
  },
  
  // Poultry category images (from products)
  {
    id: 28,
    url: chicken1,
    alt: 'Free-range chickens',
    category: 'Poultry'
  },
  {
    id: 29,
    url: chicken2,
    alt: 'Farm-raised poultry',
    category: 'Poultry'
  },
  {
    id: 30,
    url: chicken3,
    alt: 'Healthy chickens',
    category: 'Poultry'
  },
  {
    id: 31,
    url: eggs1,
    alt: 'Fresh free-range eggs',
    category: 'Poultry'
  },
  {
    id: 32,
    url: eggs2,
    alt: 'Premium quality eggs',
    category: 'Poultry'
  },
  // Machinery category images
  {
    id: 33,
    url: machinery1,
    alt: 'Tractor plowing field',
    category: 'Machinery'
  },
  {
    id: 34,
    url: machinery2,
    alt: 'Harvesting equipment in action',
    category: 'Machinery'
  },
  {
    id: 35,
    url: machinery3,
    alt: 'Modern farming machinery',
    category: 'Machinery'
  },
  {
    id: 36,
    url: machinery4,
    alt: 'Irrigation system setup',
    category: 'Machinery'
  },
  {
    id: 37,
    url: machinery5,
    alt: 'Farm utility vehicle',
    category: 'Machinery'
  }
];

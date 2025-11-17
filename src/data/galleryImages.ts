// Import all the local images
import livesctock1 from '../public/images/8.jpeg'
import livesctock2 from '../public/images/5.jpeg'
import livesctock3 from '../public/images/16.jpeg'
import livesctock4 from '../public/images/3.jpeg'
import livesctock5 from '../public/images/21.jpeg'
import livesctock6 from '../public/images/21.jpeg'

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
import farm4 from '../public/images/6.jpeg'
import farm5 from '../public/images/7.jpeg'

// Worker images
import worker1 from '../public/images/abImage.jpeg'
import worker2 from '../public/images/pImage.jpeg'
import worker3 from '../public/images/9.jpeg'
import worker4 from '../public/images/10.jpeg'
import worker5 from '../public/images/11.jpeg'
import worker6 from '../public/images/12.jpeg'
import worker7 from '../public/images/13.jpeg'
import worker8 from '../public/images/14.jpeg'
import worker9 from '../public/images/15.jpeg'
import worker10 from '../public/images/17.jpeg'
import worker11 from '../public/images/18.jpeg'
import worker12 from '../public/images/19.jpeg'
import worker13 from '../public/images/20.jpeg'
import worker14 from '../public/images/22.jpeg'
import worker15 from '../public/images/23.jpeg'

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
    url: worker1,
    alt: 'Farmers working in field',
    category: 'Workers'
  },
  {
    id: 7,
    url: worker2,
    alt: 'Harvesting vegetables',
    category: 'Workers'
  },
  {
    id: 8,
    url: worker3,
    alt: 'Farm worker with produce',
    category: 'Workers'
  },
  {
    id: 9,
    url: worker4,
    alt: 'Farmers at market',
    category: 'Workers'
  },
  {
    id: 10,
    url: worker5,
    alt: 'Worker with fresh produce',
    category: 'Workers'
  },
  {
    id: 11,
    url: worker6,
    alt: 'Farm team working together',
    category: 'Workers'
  },
  {
    id: 12,
    url: worker7,
    alt: 'Worker in greenhouse',
    category: 'Workers'
  },
  {
    id: 13,
    url: worker8,
    alt: 'Farmers preparing for market',
    category: 'Workers'
  },
  {
    id: 14,
    url: worker9,
    alt: 'Worker with harvested crops',
    category: 'Workers'
  },
  {
    id: 15,
    url: worker10,
    alt: 'Farm worker tending to plants',
    category: 'Workers'
  },
  {
    id: 16,
    url: worker11,
    alt: 'Workers in vegetable garden',
    category: 'Workers'
  },
  {
    id: 17,
    url: worker12,
    alt: 'Farm worker with tools',
    category: 'Workers'
  },
  {
    id: 18,
    url: worker13,
    alt: 'Worker with farm animals',
    category: 'Workers'
  },
  {
    id: 19,
    url: worker14,
    alt: 'Farm worker in dairy section',
    category: 'Workers'
  },
  {
    id: 20,
    url: worker15,
    alt: 'Workers packaging produce',
    category: 'Workers'
  },
  
  // Produce category images (from products)
  {
    id: 21,
    url: tomatoes1,
    alt: 'Fresh organic tomatoes',
    category: 'Produce'
  },
  {
    id: 22,
    url: tomatoes2,
    alt: 'Vine-ripened tomatoes',
    category: 'Produce'
  },
  {
    id: 23,
    url: tomatoes3,
    alt: 'Heirloom tomatoes',
    category: 'Produce'
  },
  {
    id: 24,
    url: maize1,
    alt: 'Fresh sweet corn',
    category: 'Produce'
  },
  {
    id: 25,
    url: maize2,
    alt: 'Corn harvest',
    category: 'Produce'
  },
  {
    id: 26,
    url: lettuce1,
    alt: 'Crisp fresh lettuce',
    category: 'Produce'
  },
  {
    id: 27,
    url: lettuce2,
    alt: 'Organic lettuce varieties',
    category: 'Produce'
  },
  {
    id: 28,
    url: carrots1,
    alt: 'Fresh organic carrots',
    category: 'Produce'
  },
  {
    id: 29,
    url: carrots2,
    alt: 'Crunchy carrots',
    category: 'Produce'
  },
  {
    id: 30,
    url: honey,
    alt: 'Pure raw honey',
    category: 'Produce'
  },
  
  // Livestock category images (from products)
  {
    id: 31,
    url: livesctock1,
    alt: 'Grass-fed beef cattle',
    category: 'Livestock'
  },
  {
    id: 32,
    url: livesctock2,
    alt: 'Pasture-raised livestock',
    category: 'Livestock'
  },
  {
    id: 33,
    url: livesctock3,
    alt: 'Healthy farm animals',
    category: 'Livestock'
  },
  {
    id: 34,
    url: livesctock4,
    alt: 'Livestock grazing',
    category: 'Livestock'
  },
  {
    id: 35,
    url: livesctock5,
    alt: 'Farm livestock',
    category: 'Livestock'
  },
  {
    id: 36,
    url: livesctock6,
    alt: 'Well-cared for animals',
    category: 'Livestock'
  },
  
  // Dairy category images (from products)
  {
    id: 37,
    url: cowmilk1,
    alt: 'Fresh dairy products',
    category: 'Dairy'
  },
  {
    id: 38,
    url: cowmilk2,
    alt: 'Creamy yogurt and milk',
    category: 'Dairy'
  },
  
  // Poultry category images (from products)
  {
    id: 39,
    url: chicken1,
    alt: 'Free-range chickens',
    category: 'Poultry'
  },
  {
    id: 40,
    url: chicken2,
    alt: 'Farm-raised poultry',
    category: 'Poultry'
  },
  {
    id: 41,
    url: chicken3,
    alt: 'Healthy chickens',
    category: 'Poultry'
  },
  {
    id: 42,
    url: eggs1,
    alt: 'Fresh free-range eggs',
    category: 'Poultry'
  },
  {
    id: 43,
    url: eggs2,
    alt: 'Premium quality eggs',
    category: 'Poultry'
  }
];
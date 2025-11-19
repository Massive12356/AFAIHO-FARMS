export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Kwame Asante',
    role: 'Local Restaurant Owner',
    content: 'The quality of produce from AFIAHO FARMS is unmatched. Our customers love the freshness and taste of their organic vegetables!',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'Adwoa Mensah',
    role: 'Home Chef',
    content: 'I have been buying from this farm for over 2 years. Their free-range eggs and grass-fed beef are exceptional. Truly farm-to-table quality!',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'Kofi Boateng',
    role: 'Nutritionist',
    content: 'As a nutritionist, I always recommend AFIAHO FARMS to my clients. Their commitment to sustainable and organic farming practices is impressive.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    name: 'Akosua Darko',
    role: 'Regular Customer',
    content: 'The dairy products are amazing! Fresh milk and cheese delivered right to my door. Supporting local farming has never been easier.',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];
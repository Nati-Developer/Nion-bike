import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter
} from '../assets/icons'
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  bigBike1,
  bigBike2,
  bigBike3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  bike4,
  bike5,
  bike6,
  bike7,
  thumbnailBike1,
  thumbnailBike2,
  thumbnailBike3,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3
} from '../assets/images'

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Our Bikes' },
  { href: '#about-us', label: 'About Us' },
  { href: '#specialOffer', label: 'Offers' },
  { href: '#testimonials', label: 'Depositions' },
  { href: '#contact-us', label: 'Contact' }
]

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3
  }
]

export const bikes = [
  {
    thumbnail: thumbnailBike1,
    bigBike: bigBike1
  },
  {
    thumbnail: thumbnailBike2,
    bigBike: bigBike2
  },
  {
    thumbnail: thumbnailBike3,
    bigBike: bigBike3
  }
]

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' }
]

export const products = [
  {
    imgURL: shoe4,
    name: 'Nike Air Jordan-01',
    price: '$200.20'
  },
  {
    imgURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: '$210.20'
  },
  {
    imgURL: shoe6,
    name: 'Nike Air Jordan-100',
    price: '$220.20'
  },
  {
    imgURL: shoe7,
    name: 'Nike Air Jordan-001',
    price: '$230.20'
  }
]

export const equipments = [
  {
    imgURL: bike4,
    name: 'Silver Air Street-01',
    price: '$200.20'
  },
  {
    imgURL: bike5,
    name: 'Silver Air Street-10',
    price: '$210.20'
  },
  {
    imgURL: bike6,
    name: 'Silver Air Street-100',
    price: '$220.20'
  },
  {
    imgURL: bike7,
    name: 'Silver Air Street-001',
    price: '$230.20'
  }
]

export const services = [
  {
    imgURL: truckFast,
    label: 'Fast delivery',
    subtext:
      'We take your bike as quickly as possible, wherever you are in Brazil.'
  },
  {
    imgURL: shieldTick,
    label: 'Secure Payment',
    subtext:
      'Have a safe and confidential experience when making your payment with us.'
  },
  {
    imgURL: support,
    label: 'We love helping you',
    subtext:
      'Our team of specialists is dedicated to answering your questions and providing all the support you need.'
  }
]

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Hamza',
    rating: 4.5,
    feedback:
      'The attention to detail and quality of the product exceeded my expectations. Highly recommended!'
  },
  {
    imgURL: customer2,
    customerName: 'Tsion Werede',
    rating: 4.5,
    feedback:
      'The bike of my dreams! It not only met but exceeded my expectations. I will definitely be a repeat customer!'
  }
]

export const footerLinks = [
  {
    title: 'Produtos',
    links: [
      { name: 'Silver Mountain 1', link: '/' },
      { name: 'Silver Slim 1', link: '/' },
      { name: 'Silver Street 1', link: '/' },
      { name: 'Silver Race 2', link: '/' },
      { name: 'Biker Blacke Racer', link: '/' },
      { name: 'Biker Milestone', link: '/' }
    ]
  },
  {
    title: 'Suporte',
    links: [
      { name: 'About us', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' }
    ]
  },
  {
    title: 'Entre em Contato',
    links: [
      { name: 'customer@Tsion.com', link: 'mailto:customer@Tsion.com' },
      { name: '+12554862354', link: 'tel:+12554862354' }
    ]
  }
]

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' }
]

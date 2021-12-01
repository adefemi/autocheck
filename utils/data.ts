import {faMapMarker, faTruck, faPhone, faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons"
import { Car } from "./types"

// list of homepage slider images
export const sliderImages = [
    {
        image: 'https://media.autochek.africa/file/JLnhoB4u.webp',
    },
    {
        image: 'https://storage.googleapis.com/img.autochek.africa/72eb3c8b-f4e0-459d-8cd9-d0b7502465fd-IMG.jpg',
    },
    {
        image: 'https://media.autochek.africa/file/nnfajh6G.webp',
    },
    {
        image: "https://media.autochek.africa/file/Bv1sW47e.webp"
    }
]

// list of header menu items
export const headerMenuItems = [
    {
        title: 'Select Location',
        logo: faMapMarker,
        url: '/'
    },
    {
        title: 'Track Order',
        logo: faTruck,
        url: '/'
    },
    {
        title: '949 484 9843',
        logo: faPhone,
        url: '/'
    },
    {
        title: 'Log In',
        logo: faSignInAlt,
        url: '/'
    },
    {
        title: 'Register',
        logo: faSignOutAlt,
        url: '/'
    },
]

// list of menu items
export const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'All Vehicles',
        url: '/all-products',
    },
    {
        title: 'Contact Us',
        url: '/contact-us',
    }
]

export const homeFilterPriceList = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000 - $30,000",
    "Over $30,000",
]

export const discountList = [
    "5% or More",
    "10% or More",
    "20% or More",
    "30% or More",
    "40% or More",
    "50% or More"
]

export const carRatingList = [5,4,3,2,1]


// generate five list of cars from the Car model
export const carList:Car[] = [
    {
        title: 'Toyota Camry',
        make: 'Toyota',
        brand: 'Camry',
        year: 2019,
        mileage: 120000,
        type: 'Sedan',
        condition: 'New',
        price: 12000,
        rating: 4,
        image: 'https://media.autochek.africa/file/MssteQXv.webp',
        link: 'https://www.google.com/',
        location: 'New York, NY',
        id: 1,
        medias: [
            {
              "url": "https://storage.googleapis.com/img.autochek.africa/a1dfa654-d52c-4931-89eb-33b72442aa7d-IMG.jpg",
              "type": "image/jpeg"
            },
            {
              "url": "https://storage.googleapis.com/img.autochek.africa/0675070b-9ead-4e53-87fd-bc2c5d0fb2ad-IMG.jpg",
              "type": "image/jpeg"
            },
            {
              "url": "https://storage.googleapis.com/img.autochek.africa/ca0bebd8-cc1b-4b5a-9a57-f83093f0ad6f-IMG.jpg",
              "type": "image/jpeg"
            },
            {
              "url": "https://storage.googleapis.com/img.autochek.africa/d25a5492-5616-4e1a-a8fc-efadfd7b8803-IMG.jpg",
              "type": "image/jpeg"
            },
            {
              "url": "https://storage.googleapis.com/img.autochek.africa/c18ce9e2-8d5f-4438-8bf1-f82702b80e3e-IMG.jpg",
              "type": "image/jpeg"
            },
            {
              "url": "https://storage.googleapis.com/img.autochek.africa/fb975a9d-7f1b-4dde-815c-138dfd45b3c6-IMG.jpg",
              "type": "image/jpeg"
            },
            {
              "url": "https://storage.googleapis.com/img.autochek.africa/45c05259-4565-4cc1-916e-b8be366a37f2-IMG.jpg",
              "type": "image/jpeg"
            },
            {
              "url": "https://storage.googleapis.com/img.autochek.africa/5aa8e801-38fa-4d2b-bff0-64afceb80e81-video.mp4",
              "type": "video/mp4"
            },
            {
              "url": "https://storage.googleapis.com/img.autochek.africa/732c4bd7-3417-49d2-bfc6-fe4df9a90c0b-IMG.jpg",
              "type": "image/jpeg"
            },
            {
              "url": "https://storage.googleapis.com/img.autochek.africa/9f3dd985-2a50-4736-a28f-13ceb6de3852-IMG.jpg",
              "type": "image/jpeg"
            },
            {
              "url": "https://storage.googleapis.com/img.autochek.africa/c1677b72-89c0-423b-8e22-559c10bbe1ba-IMG.jpg",
              "type": "image/jpeg"
            },
            {
              "url": "https://storage.googleapis.com/img.autochek.africa/fddce8ac-c725-48b5-965b-98304e999eb5-IMG.jpg",
              "type": "image/jpeg"
            },
            {
              "url": "https://storage.googleapis.com/img.autochek.africa/95eea410-cef8-4885-8b4a-065bcee25105-IMG.jpg",
              "type": "image/jpeg"
            }
          ],
        details: {
            engineType: '2.0L V6',
            transmission: 'Automatic',
            fuelType: 'Gasoline',
            interiorColor: 'Black',
            exteriorColor: 'Black',
            vin: '1G1GK1**********',
            vehicleID: 'yvSZRTQoZ',
        }
    },
    {
        title: 'Honda Accord',
        make: 'Honda',
        brand: 'Accord',
        year: 2022,
        mileage: 145000,
        type: 'Sedan',
        condition: 'New',
        price: 24500,
        rating: 5,
        image: 'https://storage.googleapis.com/img.autochek.africa/72eb3c8b-f4e0-459d-8cd9-d0b7502465fd-IMG.jpg',
        link: 'https://www.google.com/',
        location: 'Lagos, Nigeria',
        id: 2,
        medias: [
            {
                type: "image/jpeg",
                url: 'https://storage.googleapis.com/img.autochek.africa/72eb3c8b-f4e0-459d-8cd9-d0b7502465fd-IMG.jpg'
            },
            {
                type: 'image/jpeg',
                url: 'https://storage.googleapis.com/img.autochek.africa/77eb7d62-1f9d-4b77-8675-318bbaf43f9e-IMG.jpg'
            },
            {
                type: 'image/jpeg',
                url: 'https://storage.googleapis.com/img.autochek.africa/e80e1fbc-8e8f-4562-84c7-b24fb027d364-IMG.jpg'
            },
            {
                type: 'image/jpeg',
                url: 'https://storage.googleapis.com/img.autochek.africa/b071712a-7bab-4870-ae6a-365556807463-IMG.jpg'
            },
            {
                type: 'image/jpeg',
                url: 'https://storage.googleapis.com/img.autochek.africa/c8bb75b8-f7aa-49f7-a47b-669814242803-IMG.jpg'
            }
        ],
        details: {
            engineType: '2.0L V6',
            transmission: 'Automatic',
            fuelType: 'Gasoline',
            interiorColor: 'Gray',
            exteriorColor: 'Gray',
            vin: '1G1GK1**********',
            vehicleID: 'yvSZRTQoZ',
        }
    },
    {
        title: 'Range Rover Sport',
        make: 'Land Rover',
        brand: 'Range Rover Sport',
        year: 2020,
        mileage: 120000,
        type: 'Sedan',
        condition: 'New',
        price: 89000,
        rating: 5,
        image: 'https://media.autochek.africa/file/J3XrXxSL.webp',
        link: 'https://www.google.com/',
        location: 'New York, NY',
        id: 3,
        medias: [
            {
                type: 'image/jpeg',
                url: 'https://media.autochek.africa/file/BjxdxTnh.webp'
            },
            {
                type: 'image/jpeg',
                url: 'https://media.autochek.africa/file/Si3zDtDG.webp'
            },
            {
                type: 'image/jpeg',
                url: 'https://media.autochek.africa/file/lZ49jpZo.webp'
            },
            {
                type: 'image/jpeg',
                url: 'https://media.autochek.africa/file/rPfkP76i.webp'
            },
            {
                type: 'image/jpeg',
                url: 'https://media.autochek.africa/file/nnfajh6G.webp'
            }
        ],
        details: {
            engineType: '3.6L V8',
            transmission: 'Automatic',
            fuelType: 'Gasoline',
            interiorColor: 'Gray',
            exteriorColor: 'Gray',
            vin: '1G1GK1**********',
            vehicleID: 'yvSZRTQoZ',
        }
    }
]

export const carInfoKeys = ["make", "brand", "year", "mileage", "location", "rating"];
export const carBulletKeys = ["type", "condition"];
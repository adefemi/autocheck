export interface CarDetailType {
    engineType?: string
    transmission?: string
    fuelType?: string
    interiorColor?: string
    exteriorColor?: string
    vin?: string
    vehicleID?: string
}

export interface CarMediaType {
    url: string
    type: string
}

export interface Car {
    title: string
    make: string
    brand: string
    year: number
    mileage: number
    type: string
    condition: string
    price: number
    rating: number
    image: string
    link: string
    location: string
    id: number
    details?: CarDetailType
    medias?: CarMediaType[]
}

export interface CarMake {
    name: string
    imageUrl: string
}

export interface genericObject {
    [key: string]: string | number
}

export enum CarMediaTypes {
    image = 'image/jpeg',
    video = 'video/mp4',
}

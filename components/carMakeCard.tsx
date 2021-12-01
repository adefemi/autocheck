import { FC } from "react";
import Image from "next/image";
import { CarMake } from "../utils/types";
import Link from "next/link";
import { slugify } from "../utils/functions";

export const CarMakeCard: FC<{ carMake: CarMake }> = ({ carMake }) => {
    
    return (
        <Link href={`all-products?make=${slugify(carMake.name)}`}>
            <a>
                <div className="carMakeCard">
                    <div className="imageContainer">
                        <Image 
                            src={carMake.imageUrl} 
                            alt={carMake.name} 
                            loader={() => carMake.imageUrl} 
                            layout="fill" unoptimized/> 
                    </div>
                    <div className="title">
                        {carMake.name}
                    </div>
                </div>
            </a>
        </Link>
    );
}
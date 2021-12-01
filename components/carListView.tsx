import { FC } from "react";
import Image from "next/image";
import { Car, genericObject } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency, formatNumber } from "../utils/functions";
import Link from "next/link";
import { carBulletKeys, carInfoKeys } from "../utils/data";


export const CarListView: FC<{ car: Car }> = ({ car }) => {
    
    return (
        <div className="carListView">
            <div className="imageContainer">
                <Link href={`product/${car.id}`}>
                    <a>
                        <Image src={car.image} unoptimized alt={car.title} loader={() => car.image} layout="fill"/>
                    </a>
                </Link>
            </div>
            <div className="carContents">
                <div className="info">
                    <h2>{car.title}</h2>
                    <div className="infoBulletContainer">
                        {
                            carBulletKeys.map((key, index) => 
                                <div key={index} className="carBulletItem">{((car as unknown) as genericObject)[key]}</div> 
                            )
                        }
                    </div>
                    <div className="infoItemContainer">
                    {
                            carInfoKeys.map((key, index) => 
                                {
                                    let data = ((car as unknown) as genericObject)[key];
                                    if(key === "mileage") {
                                        data = `${formatNumber(car.mileage)} km`;
                                    }
                                    return (
                                        <div key={index} className="carInfoItem">
                                            <div className="title">{key}</div>
                                            <div className="content">
                                                {key === "rating" 
                                                ?  Array.from(Array(car.rating), () => <FontAwesomeIcon color="orange" icon={faStar} />)
                                                : data}
                                            </div>
                                        </div> 
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <div className="controls">
                    <button>Buy Now</button>
                    <div className="priceView">
                        {formatCurrency(car.price)}
                    </div>
                </div>
            </div>
        </div>
    );
}
import { FC, useState, useEffect} from "react";
import Link from "next/link";
import { Car, CarMediaType, CarMediaTypes, genericObject } from "../../utils/types";
import { carBulletKeys, carInfoKeys, carList } from "../../utils/data";
import Image from "next/image"

import {GetServerSideProps} from "next"
import Layout from "../../components/Layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency, formatNumber } from "../../utils/functions";
import Slider from "react-slick";

interface ProductProps {
    car: Car
}

const carDetailKeys: genericObject = {
    engineType: "Engine Type",
    transmission: "Transmission",
    fuelType: "Fuel Type",
    interiorColor: "Interior Color",
    exteriorColor: "Exterior Color",
    vin: "VIN",
    vehicleID: "Vehicle ID",
}
    
const Product: FC<ProductProps | null> = ({car}) => {

    const [activeImage, setActiveImage] = useState<CarMediaType>({url: car.image, type: "image/jpeg"})

    const adjustInfoKey = () => {
        const newKeyList = [...carInfoKeys, ...carBulletKeys].filter(key => key !== "rating")
        return newKeyList;
    }

    const sliderSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dot: false
    }

    useEffect(() => {
        if(car.medias && car.medias.length > 0) {
            setActiveImage(car.medias[0])
        }
    }, [car])

    if(!car) {
        return <div>Car not found</div>
    }

    return (
        <Layout>
            <div className="productPage maxWidth1200">
                <br />
                <div className="breadcrumb">
                    <Link href="/all-products">
                        <a href="" className="item">All Products</a>
                    </Link>
                    <div className="item activeProduct">
                        Toyota Carmy
                    </div>
                </div>
                <div className="activeProductContainer">
                    <div className="productImages">
                        <div className="productImage">
                            {
                                activeImage.type === CarMediaTypes.image ? <Image 
                                src={activeImage.url} loader={() => car.image} unoptimized layout="fill" alt=""/> :
                                <video src={activeImage.url} autoPlay={true} />
                            }
                            
                        </div>
                        <div className="productMedias">
                            <Slider {...sliderSettings}>
                                {car.medias?.map((item, index) => {
                                    return <div className="sliderContainer" key={index} onClick={() => setActiveImage(item)}>
                                    {
                                        item.type === CarMediaTypes.image ?
                                        <div className="sliderContent" style={{backgroundImage: `url(${item.url})`}}/>
                                        :<div key={index} className="sliderContent">Video</div>
                                    }
                                    </div>
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="productDetails">
                        <div className="section">
                            <h2>{car.title}</h2>
                            {Array.from(Array(car.rating), () => <FontAwesomeIcon color="orange" icon={faStar} />)}
                            &nbsp; {car.rating}.0
                            <br />
                            <br />
                            <div className="infoItemContainer">
                                {
                                    adjustInfoKey().map((key, index) => 
                                        {
                                            let data = ((car as unknown) as genericObject)[key];
                                            if(key === "mileage") {
                                                data = `${formatNumber(car.mileage)} km`;
                                            }
                                            return (
                                                <div key={index} className="carInfoItem">
                                                    <div className="title">{key}</div>
                                                    <div className="content">
                                                    {data}
                                                    </div>
                                                </div> 
                                            )
                                        }
                                    )
                                }
                            </div>
                            <br />
                            <div className="price">
                                {formatCurrency(car.price)}
                            </div>
                            <button>Buy Now</button>
                        </div>

                        <div className="section">
                            <div className="headerTitle">Vehicle Description</div>
                            {
                                car.details && <div className="detailContent">
                                {
                                    Object.keys(car.details).map((key, index) => {
                                        return (
                                            <div key={index} className="detailItem">
                                                <div className="title">{carDetailKeys[key]}</div>
                                                <div className="content">
                                                    {((car.details as unknown) as genericObject)[key]}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const {id} = query;

    return {
        props: {
            car: carList.filter(item => item.id === Number(id))[0]
        }
    }
}

export default Product;
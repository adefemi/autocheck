import { FC } from "react";
import { sliderImages } from "../utils/data";
import Slider from "react-slick";


const HomeImageSlider: FC<{}> = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    return (
        <Slider {...settings}>
            {
                sliderImages.map((item, index) => {
                    return (
                        <div className="slider" key={index}>
                            <div className="sliderContent" style={{
                            backgroundImage: `url(${item.image})`,
                        }} />
                        </div>
                    );
                })
            }
        </Slider>
    );
};
    
export default HomeImageSlider;
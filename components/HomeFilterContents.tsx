import { FC } from "react";
import { carRatingList, discountList, homeFilterPriceList } from "../utils/data";
import SearchForm from "./SearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const HomeFilterContents: FC<{}> = () => {
    return (
        <div className="homeFilterContents">
           <div className="section">
                <div className="title">Search Here..</div>
                <SearchForm />
           </div>
           <div className="section">
                <div className="title">Price</div>
                {
                    homeFilterPriceList.map((item, index) => <div key={index} className="sectionItem">
                        {item}
                    </div> )
                }
           </div>
           <div className="section">
                <div className="title">Discount</div>
                {
                    discountList.map((item, index) => <div key={index} className="sectionItem">
                        {item}
                    </div> )
                }
           </div>
           <div className="section">
                <div className="title">Car Ratings</div>
                {
                    carRatingList.map((item, index) => <div key={index} className="sectionItem">
                        {Array.from(Array(item), () => <FontAwesomeIcon color="orange" icon={faStar} />)}&nbsp; {item}.0
                    </div> )
                }
           </div>
        </div>
    );
}

export default HomeFilterContents;
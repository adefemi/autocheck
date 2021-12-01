import type { NextPage } from 'next'
import { CarListView } from '../components/carListView'
import HomeFilterContents from '../components/HomeFilterContents'
import Layout from '../components/Layouts'
import { carList } from '../utils/data'
import Link from "next/link"
import { fetchAllVehicles } from '../utils/network'
import { Car } from '../utils/types'


const AllProducts: NextPage<{carList: Car[]}> = ({carList}) => {
  return (
   <Layout>
     <div className="headingContent">
       <h1>All Products</h1>
     </div>
     <br />
     <div className="homeContent maxWidth1200">
       <div className="productContentContainer">
        <div className="productContentList">
          {
            carList.map((car, index) => <CarListView car={car} key={index} />)
          }
        </div>
        <Link href="#">
          <a className="viewAll">Load More</a>
        </Link>
       </div>
       <div className="filterContents">
        <HomeFilterContents />
       </div>
     </div>
   </Layout>
  )
}

export const getServerSideProps = async () => {
  // const makeList = await fetchAllVehicles() // this returns an empty data 
  return {
    props: {
      carList
    }
  }
}

export default AllProducts

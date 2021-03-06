import type { NextPage } from 'next'
import { CarListView } from '../components/carListView'
import HomeFilterContents from '../components/HomeFilterContents'
import HomeImageSlider from '../components/HomeImageSlider'
import Layout from '../components/Layouts'
import Link from "next/link"
import { CarMake } from '../utils/types'
import { fetchPopularMakes } from '../utils/network'
import { CarMakeCard } from '../components/carMakeCard'


const Home: NextPage<{makeList: CarMake[]}> = ({makeList}) => {
  return (
   <Layout>
     <HomeImageSlider />
     <div className="headingContent">
       <h1>Our New Products</h1>
     </div>
     <br />
     <div className="homeContent maxWidth1200">
       <div className="productContentContainer">
        <div className="productContent">
          {
            makeList.map((make, index) => <CarMakeCard carMake={make} key={index} />)
          }
        </div>
        <Link href="/all-products">
          <a className="viewAll">View All Vehicles</a>
        </Link>
       </div>
       <div className="filterContents">
        <HomeFilterContents />
       </div>
     </div>
     <br />
   </Layout>
  )
}

export const getServerSideProps = async () => {
  const makeList = await fetchPopularMakes()
  return {
    props: {
      makeList
    }
  }
}

export default Home

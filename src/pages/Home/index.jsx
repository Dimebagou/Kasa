import Header from '../../components/Header'
import Hero from '../../components/Hero'
import CardsContainer from '../../components/CardsContainer'
import { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/data.json')
        const json = await response.json()
        setData(json)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

    
  return (
    
    <>
      <Header />
      <Hero image="Home" text="Chez vous, partout et ailleurs" />
      <CardsContainer data={data && data} />
    </>
  )
}

export default Home

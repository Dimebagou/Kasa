import './index.css'
import Card from '../Card'
import Button from '../Button'
import { useEffect, useState } from 'react'

const CardsContainer = (props) => {
  const { data } = props
  const [max, setMax] = useState(10)
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(data.slice(0, max))
  }, [data, max])

  return (

    <div className="cards-container">
      {cards?.map((item) => (
        <Card id={item.id} key={item.id} title={item.title} backgroundImage={item.cover} />
      ))}
      <div className="btnContainer">
        {data.length > max ? (
          <Button value="Voir plus" onClick={() => setMax(max + 10)} />
        ) : (
          <p>Fin des offres...</p>
        )}
      </div>

    </div>



  )
}

export default CardsContainer
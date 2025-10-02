import React from 'react'
import { useParams, Link } from "react-router-dom";
import "./styles.css";
import '@fontsource/roboto/300.css';
const CardDetail = () => {
    const {id} = useParams()
    const cardsData = [
         {
            id:1,
            title: "Mercedes",
            description: "Mercedes-Benz is a world-famous German luxury car brand, known for its stylish design, advanced technology, and powerful performance. It represents elegance, comfort, and innovation in the automotive industry.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZqWIcZdQigBI3_8tERA97-3ogyKyoEq5xg&s"
        },
        {
            id:2,
            title: "Porsche",
            description: "Porsche is a German luxury sports car brand, famous for its powerful engines, timeless design, and thrilling performance. It combines speed, style, and precision engineering.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUN--1h6MLN-ZCNTYTLB09VrUSHdMQIh_2sA&s"
        },
        {
            id:3,
            title: "BMW",
            description: "BMW (Bayerische Motoren Werke) is a premium German car brand known for luxury, performance, and driving pleasure. It blends innovative technology with elegant design.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaoR-xGSljc-UhhbM-9RwsTdl9hX-HkFOROg&s"
        }
    ]

    const card = cardsData.find((c) => c.id === parseInt(id));

  if (!card) {
    return <h2>Card Not Found</h2>;
  }
  return (
    <div className="card-detail">
      <div className="detail-img">
        <img src={card.image} alt={card.title} />
      </div>
      <div className="detail-content">
        <h1 className="detail-title">{card.title}</h1>
        <p className="detail-desc">{card.description}</p>
        <Link to="/" className="back-link">Back to Cards</Link>
      </div>
    </div>
  )
}

export default CardDetail

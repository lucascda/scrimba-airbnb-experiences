import "./Card.css";

import Star from "../../assets/star.png";
type Card = {
  coverImg: string;
  stats: {
    rating: number;
    reviewCount: number;
  };
  location: string;
  price: number;
  title: string;
  openSpots: number;
};

type CardProps = {
  cardData: Card;
};

export default function Card(props: CardProps) {
  let badgeText;
  if (props.cardData.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.cardData.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`/${props.cardData.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src={Star} className="card--star" />
        <span>{props.cardData.stats.rating}</span>
        <span className="gray">({props.cardData.stats.reviewCount}) • </span>
        <span className="gray">{props.cardData.location}</span>
      </div>
      <p className="card--title">{props.cardData.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.cardData.price} </span> / person
      </p>
    </div>
  );
}

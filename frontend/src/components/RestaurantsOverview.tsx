import { Link } from "react-router-dom";
import { Restaurant } from "../types/definitions";

export default function RestaurantsOverview(props: { list: Restaurant[] }) {
  return (
    <ul>
      {props.list.map((restaurant, i) => (
        <li key={i}>
          <Link to={`/restaurants/${restaurant.id}`}>
            <div className="item-wrapper">
              <img
                src={`/restaurants/${restaurant.id}.jpg`}
                className="image"
              />
              <h4>{restaurant.name}</h4>
              <p>
                <small className="badge">{restaurant.type}</small>
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

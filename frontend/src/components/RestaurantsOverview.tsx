import { Link } from "react-router-dom";
import { Restaurant } from "../types/definitions";

export default function RestaurantsOverview(props: { list: Restaurant[] }) {
  return (
    <ul>
      {props.list.map((restaurant) => (
        <li>
          <Link to={`/restaurants/${restaurant.id}`}>
            <img src={`/restaurants/${restaurant.id}.jpg`} className="image" />
            <h4>{restaurant.name}</h4>
            <p>
              <small>{restaurant.type}</small>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

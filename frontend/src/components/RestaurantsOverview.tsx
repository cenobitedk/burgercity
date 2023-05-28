import { Link } from "react-router-dom";
import { Restaurant } from "../types/definitions";

export default function RestaurantsOverview(props: { list: Restaurant[] }) {
  return (
    <>
      <h3>Places</h3>
      <ul>
        {props.list.map((restaurant, i) => (
          <li key={i}>
            <Link to={`/restaurants/${restaurant.id}`}>
              <div className="item-wrapper">
                <div
                  className="imgwrapper"
                  style={{ "--height": "40vw" } as React.CSSProperties}
                >
                  <img src={`/restaurants/${restaurant.id}.jpg`} />
                </div>
                <div>
                  <h4>{restaurant.name}</h4>
                  <p>
                    <small className="badge">{restaurant.type}</small>
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

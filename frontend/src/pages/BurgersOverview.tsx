import { Link, useLoaderData } from "react-router-dom";
import { Burger } from "../types/definitions";

const Burger = (props: { burger: Burger }) => (
  <div>
    <img src={`/burgers/${props.burger.id}.jpg`} width={300} />
    <h4>{props.burger.name}</h4>
    <p>{props.burger.description.slice(0, 128).concat("... read more")}</p>
  </div>
);
export default function BurgersOverview() {
  const burgers = useLoaderData() as Burger[];

  return (
    <ul>
      {burgers.map((burger, index) => (
        <li key={index}>
          <Link to={`/burgers/${burger.id}`}>
            <Burger burger={burger} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

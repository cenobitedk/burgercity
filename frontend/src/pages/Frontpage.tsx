import { useLoaderData } from "react-router-dom";

import BurgerMap from "../components/BurgerMap";
import RestaurantsOverview from "../components/RestaurantsOverview";
import { Restaurant } from "../types/definitions";

export default function Frontpage() {
  const restaurants = useLoaderData() as Restaurant[];
  return (
    <>
      <h2>Find nearby places</h2>
      <BurgerMap />
      <RestaurantsOverview list={restaurants} />
    </>
  );
}

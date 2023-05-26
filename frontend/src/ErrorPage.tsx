import { useRouteError } from "react-router-dom";
import deadBurger from "./assets/error.png";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img src={deadBurger} alt="Dead burger" className="burger" />

      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as unknown as any).statusText ||
            (error as unknown as any).message}
        </i>
      </p>
    </div>
  );
}

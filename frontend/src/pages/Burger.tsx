import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { environment } from "../environment";
import { Burger, Reviews } from "../types/definitions";

const fetchReviews = (id: string) => {
  const reviews = axios
    .get<Reviews>(`${environment.BACKEND_URL}/burger/${id}/reviews`)
    .then((response) => response.data);
  return reviews;
};

export default function Burger() {
  const burger = useLoaderData() as Burger;

  const [reviews, setReviews] = useState<Reviews | null>();

  useEffect(() => {
    if (burger.id) {
      fetchReviews(burger.id).then((reviews) => {
        setReviews(reviews || null);
      });
    }
  }, [burger.id]);

  if (!burger) {
    return (
      <p>
        <em>Couldn't find that burger</em> ¯\_(ツ)_/¯
      </p>
    );
  }

  return (
    <div>
      {burger && (
        <>
          <h2>{burger.name}</h2>
          <p>{burger.description}</p>
        </>
      )}
      <h3>Reviews</h3>
      {reviews === null && (
        <p>
          <em>No reviews yet.</em>
        </p>
      )}
      {reviews && (
        <ul>
          {reviews.reviews.map((review, index) => (
            <li key={index}>{review.headline}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

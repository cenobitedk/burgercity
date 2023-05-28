import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { environment } from "../environment";
import { Burger, Review, Reviews } from "../types/definitions";

import { Rating as StarRating } from "react-simple-star-rating";

const fetchReviews = (id: string) => {
  const reviews = axios
    .get<Reviews>(`${environment.BACKEND_URL}/burgers/${id}/reviews`)
    .then((response) => response.data);
  return reviews;
};

const Review = (props: { review: Review }) => {
  const { review } = props;
  return (
    <div>
      <h4>{review.headline}</h4>
      <p>
        <small>{review.author.name}</small>
      </p>
      <p>{review.comment}</p>
      <p>
        Taste:
        <StarRating size={20} readonly initialValue={review.rating.taste} />
        <br />
        Texture:
        <StarRating size={20} readonly initialValue={review.rating.texture} />
        <br />
        Visual:
        <StarRating size={20} readonly initialValue={review.rating.visual} />
        <br />
      </p>
    </div>
  );
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
            <li key={index}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

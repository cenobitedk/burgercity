import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { environment } from "../environment";
import { Burger, Review, Reviews } from "../types/definitions";

import { Rating as StarRating } from "react-simple-star-rating";

const AddReview = () => (
  <>
    <form>
      <h4>Add review</h4>

      <div className="add-review">
        <div className="ratings">
          Taste:
          <StarRating size={20} />
          <br />
          Texture:
          <StarRating size={20} />
          <br />
          Visual:
          <StarRating size={20} />
          <br />
        </div>
        <div className="input-values">
          <label>
            Name: <br />
            <input type="text" />
          </label>
          <br />
          <label>
            Headline: <br />
            <input type="text" />
          </label>
          <br />
          <label>
            Comment: <br />
            <textarea rows={7}></textarea>
          </label>
          <br />
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  </>
);

const fetchReviews = (id: string) => {
  const reviews = axios
    .get<Reviews>(`${environment.BACKEND_URL}/burgers/${id}/reviews`)
    .then((response) => response.data);
  return reviews;
};

const Review = (props: { review: Review }) => {
  const { review } = props;
  return (
    <div className="review">
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
  const [loggedIn, setLoggedIn] = useState(false);

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
          <div
            className="imgwrapper"
            style={{ "--height": "min(90vw, 50vh)" } as React.CSSProperties}
          >
            <img src={`/burgers/${burger.id}.jpg`} />
          </div>
          <h2>{burger.name}</h2>
          <p>{burger.description}</p>
        </>
      )}
      <br />
      <h3>Reviews</h3>
      {reviews === null && (
        <p>
          <em>No reviews yet.</em>
        </p>
      )}

      {!loggedIn && <button onClick={() => setLoggedIn(true)}>Log in</button>}
      {loggedIn && <AddReview />}

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

import RatingStars from "./RatingStars";
import "./styles.css";

const ratings = [
  { id: 0, value: 4.5 },
  { id: 1, value: 3.5 },
  { id: 2, value: 4 },
  { id: 3, value: 3 },
  { id: 4, value: 5 }
];

export default function App() {
  return (
    <div className="App">
      <div className="rating-container p-5">
        {ratings &&
          ratings.map((rating) => (
            <div>
              <RatingStars key={rating.id} {...rating} /> &nbsp; {rating.value}
            </div>
          ))}
      </div>
    </div>
  );
}

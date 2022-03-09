import { Fragment } from "react";

export default function RatingStars({ value }) {
  return (
    <Fragment>
      <div className="rating-start mb-1" title="Rated 5 out of 5">
        {value === 5 && <span style={{ width: "100%" }} />}
        {value === 4.5 && <span style={{ width: "90%" }} />}
        {value === 4 && <span style={{ width: "80%" }} />}
        {value === 3.5 && <span style={{ width: "70%" }} />}
        {value === 3 && <span style={{ width: "60%" }} />}
        {value === 2 && <span style={{ width: "40%" }} />}
        {value === 1 && <span style={{ width: "20%" }} />}
      </div>
    </Fragment>
  );
}

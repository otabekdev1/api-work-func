import React from "react";
import Tour from "./Tour";

function Tours({ tours, RemoveTour }) {
  return (
    <section>
      <div className="title">
        <h2>Oour tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} RemoveTour={RemoveTour} {...tour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;

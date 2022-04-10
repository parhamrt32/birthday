import React from "react";

function Card({ people }) {
  return (
    <>
      {people.map((person) => {
        const { id, name, image, age } = person;
        return (
          <article key={id} className="person">
            <img className="profile" src={image} alt={name} />
            <div>
              <h4> {name} </h4>
              <p> {age} Years Old </p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default Card;

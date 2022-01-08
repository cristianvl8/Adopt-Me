import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <h2>No pets found</h2>
      ) : (
        pets.map(({ animal, id, name, breed, images, city, state }) => (
          // be careful with return!!!!!
          <Pet
            animal={animal}
            key={id}
            name={name}
            breed={breed}
            images={images}
            location={`${city},${state}`}
            id={id}
            // avoid using spread operator to pass all properties down
            // affects readability even being less verbose
          />
        ))
      )}
    </div>
  );
};

export default Results;

const breeds = ["beagle", "samoyed", "appenzeller", "germanshepherd"];

const Form = ({ selected, setSelected }) => {
  // Change! button
  const handleChange = (e) => {
    e.preventDefault();
    setSelected(e.target.value); // breed
  };

  return (
    <section>
      <select value={selected} onChange={handleChange}>
        {breeds.map((breed) => {
          return (
            <option value={breed} key={breed}>
              {breed}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default Form;

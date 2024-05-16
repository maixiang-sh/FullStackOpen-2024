import CountryInfo from "./CountryInfo";
import { useState } from "react";

const CountryRow = ({ country }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleOnClick = (event) => {
    event.preventDefault();
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <div>
        {country.name.common} <button onClick={handleOnClick}>show</button>
      </div>
      {showInfo === true && <CountryInfo country={country} />}
    </div>
  );
};

export default CountryRow;

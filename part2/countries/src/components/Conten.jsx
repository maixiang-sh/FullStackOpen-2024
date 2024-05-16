import CountryRow from "./CountryRow";
import CountryInfo from "./CountryInfo";

const Content = ({ countries }) => {
  const countryCount = countries.length;

  if (countryCount === 0) return null;

  if (countryCount > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  if (countryCount > 1 && countryCount <= 10) {
    return (
      <div>
        {countries.map((country) => (
          <CountryRow key={country.name.common} country={country} />
        ))}
      </div>
    );
  }

  if (countryCount === 1) {
    return <CountryInfo country={countries[0]} />;
  }
};
export default Content;

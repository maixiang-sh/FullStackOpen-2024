import { useState, useEffect } from "react";
// 组件
import SearchForm from "./components/SearchForm";
import Content from "./components/Conten";
// api 客户端
import countriesService from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    countriesService
      .getAll()
      .then((InitializeCountries) => setCountries(InitializeCountries));
  }, []);

  const filterCountry = (query) => {
    if (!query.trim()) return [];
    const queryLower = query.toLowerCase();
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(queryLower)
    );
  };

  return (
    <div>
      <SearchForm
        title="find countries"
        placeholder="country name ..."
        onChange={(newValue) => setQuery(newValue)}
        onSubmit={(newValue) => setQuery(newValue)}
      />
      <Content countries={filterCountry(query)} />
    </div>
  );
};

export default App;

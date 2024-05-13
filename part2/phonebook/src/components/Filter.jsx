const Filter = ({ query, handleQueryChange }) => {
  return (
    <form>
      <div>
        filter shown with <input value={query} onChange={handleQueryChange} />
      </div>
    </form>
  );
};

export default Filter;

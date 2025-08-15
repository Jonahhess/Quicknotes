export default function SearchBar({ query, setQuery }) {
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search"
      />
      {query && (
        <button id="clear-query" onClick={() => setQuery("")}>
          {" "}
          Clear Filter
        </button>
      )}
    </>
  );
}

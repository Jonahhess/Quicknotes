import categories from "./categories";

export default function Filters({ categoryFilters, setCategoryFilters }) {
  return (
    <div
      id="filters"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        border: "1px solid lightgrey",
      }}
    >
      <strong>Filter Notes</strong>
      {categories.map((c) => (
        <div
          key={c}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor={`checkbox-${c}`}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </label>
          <input
            type="checkbox"
            id={`checkbox-${c}`}
            defaultChecked
            style={{ alignSelf: "center" }}
            onClick={() =>
              setCategoryFilters(
                categoryFilters.includes(c)
                  ? categoryFilters.filter((cat) => cat !== c)
                  : [...categoryFilters, c]
              )
            }
          />
        </div>
      ))}
    </div>
  );
}

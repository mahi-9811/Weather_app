function SearchBar({ onSearch }) {
    function handleKeyPress(e) {
      if (e.key === "Enter") onSearch(e.target.value);
    }
  
    return (
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Enter city name..."
          onKeyDown={handleKeyPress}
          style={{
            flex: 1,
            padding: "0.85rem 1.2rem",
            borderRadius: "10px",
            border: "none",
            fontSize: "1rem",
            background: "rgba(255,255,255,0.15)",
            color: "white",
            outline: "none"
          }}
        />
        <button
          onClick={(e) => onSearch(e.target.previousSibling.value)}
          style={{
            padding: "0.85rem 1.5rem",
            borderRadius: "10px",
            border: "none",
            background: "#00b4d8",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          Search
        </button>
      </div>
    );
  }
  
  export default SearchBar;
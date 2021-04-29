import { useState } from "react";
import { useHistory } from "react-router";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  // Get query value on change
  const handleOnChange = (e) => {
    setQuery(e.target.value.trim());
  };

  // Push input value on submit to history
  const handleOnSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${query}`);
    document.querySelector(".home-search").value = "";
  };

  return (
    <form type="submit" onSubmit={handleOnSubmit}>
      <input
        type="text"
        className="home-search"
        placeholder="Search..."
        onChange={handleOnChange}
      />
    </form>
  );
};

export default SearchInput;

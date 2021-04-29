import SearchInput from "../components/SearchInput";

const NavSearch = () => {
  return (
    <div className="navsearch-wrapper">
      <div className="search-type">
        <p>Movie</p>
        <p>TV Show</p>
      </div>
      <SearchInput />
    </div>
  );
};

export default NavSearch;

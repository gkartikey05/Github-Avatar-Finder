import useDebounce from '../../hooks/useDebounce';
import './Search.css';

function Search ({updateSearchTerm}){
  const debouncedCallback = useDebounce((e) => updateSearchTerm(e.target.value))
  
  return (
    <div className="search-wrapper">
      <input
        className="user-name-search"
        type="text"
        placeholder="Enter Username"
        onChange={debouncedCallback}
      />
    </div>
  );
}

export default Search;
import './search.css'

export const SearchInput = ({searchValue, handleChange}) => {
  return (
    <input
    onChange={handleChange}
    value={searchValue}
    type="search"
    placeholder='Pesquisar...'
  />
  );
}
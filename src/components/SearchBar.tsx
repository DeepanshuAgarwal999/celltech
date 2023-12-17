
import { GoSearch } from "react-icons/go";

interface SearchType {
  searchItem: string;
  setSearchItem: (item: string) => void;
}
const SearchBar = ({ searchItem, setSearchItem }: SearchType) => {
  return (
    <div className="w-[50%] mx-auto max-sm:w-[80%] relative">
      <input
        type="text"
        name="searchbar"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        placeholder="Search your favourite Country e.g. Tokyo,Paris"
        className="max-sm:text-xs sm:text-basis lg:text-lg w-full py-3 px-6 rounded-[50px] bg-[#252529] border-2 outline-none border-[#bdbdbd] text-white"
      />
      <div className="absolute top-[32%] max-sm:right-[4%] sm:right-[6%] sm:scale-150 text-white">
        <GoSearch />
      </div>
    </div>
  );
};

export default SearchBar;

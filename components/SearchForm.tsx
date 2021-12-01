import { FC } from "react";


const SearchForm: FC<{}> = () => {
    return (
        <form className="searchForm">
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;



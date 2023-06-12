import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSearchTerm } from "../../store/slices/productSlice";
import { RootState } from "../../store/rootReducer";
import ProductCardMini from "../ProductCardMini/ProductCardMini";

import styles from "./Search.module.scss";

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  const [query, setQuery] = useState("");
  const searchResult = useSelector(
    (state: RootState) => state.product.searchResult
  );
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchTerm(query));
  };

  useEffect(() => {
    dispatch(setSearchTerm(query));
  }, [query, dispatch]);

  return (
    <div className={styles.Search}>
      <form className={styles.Search__form} onSubmit={handleSubmit}>
        <input
          className={styles.Search__input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search furniture"
        />
        <button className={styles.Search__button} type="submit">
          <svg
            className={styles.Search__icon}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              d="M15.75 15.75L12.3855 12.3795M14.25 7.875C14.25 
            9.56576 13.5784 11.1873 12.3828 12.3828C11.1873 
            13.5784 9.56576 14.25 7.875 14.25C6.18424 14.25 
            4.56274 13.5784 3.36719 12.3828C2.17165 11.1873 
            1.5 9.56576 1.5 7.875C1.5 6.18424 2.17165 4.56274 
            3.36719 3.36719C4.56274 2.17165 6.18424 1.5 7.875 
            1.5C9.56576 1.5 11.1873 2.17165 12.3828 3.36719C13.5784 
            4.56274 14.25 6.18424 14.25 7.875Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </form>
      <div
        className={`${styles.Search__results} ${
          query.length > 0 ? styles.fadeIn : styles.none
        }`}
      >
        <div className={styles.Search__scroll}>
          {searchResult.length === 0 ? (
            <h2 className={styles.Search__error}>No products found</h2>
          ) : (
            searchResult.map((product, index) => (
              <ProductCardMini key={index} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

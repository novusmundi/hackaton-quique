import React from "react";

import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom";
import { algoliaConfig } from "../algoliaConfig";

const ProductList = () => {
  // Render de cada producto
  const Product = ({ hit }) => (
    <div className="product-card">
      <img src={hit.image} alt={hit.name} className="product-image" />
      <h3>
        <Highlight attribute="name" hit={hit} />
      </h3>
      <p>${hit.price}</p>
    </div>
  );

  return (
    <div className="product-list">
      <InstantSearch
        searchClient={algoliaConfig.searchClient}
        indexName={algoliaConfig.indexName}
      >
        <SearchBox
          translations={{
            placeholder: "Busca productos...",
          }}
          className="search-box"
        />
        <div className="hits-container">
          <Hits hitComponent={Product} />
        </div>
      </InstantSearch>
    </div>
  );
};

export default ProductList;

import React from "react";
import { InstantSearch, SearchBox, Hits, Highlight } from "react-instantsearch-dom";
import { algoliaConfig } from "../algoliaConfig";
import { Link } from "react-router-dom";

const ProductList = () => {
  // Render de cada producto
  const Product = ({ hit }) => (
    <Link
      to={`/product/${hit.objectID}`}
      state={{ product: hit }} // Pasamos los datos del producto a la nueva página
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="product-card">
        <img src={hit.image} alt={hit.name} className="product-image" />
        <h3>
          <Highlight attribute="name" hit={hit} />
        </h3>
        <p>${hit.price}</p>
      </div>
    </Link>
  );

  return (
    <div className="product-list">
      <h1 className="black-friday-title">Ofertas Black Friday</h1>
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

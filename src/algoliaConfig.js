import algoliasearch from 'algoliasearch/lite';


const searchClient = algoliasearch('ILL6BP1B1J', '828c4cc619ed37c801782fc2878cc821');

export const algoliaConfig = {
  indexName: 'products',
  searchClient,
};

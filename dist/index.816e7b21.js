/* global algoliasearch instantsearch */ const searchClient = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");
const search = instantsearch({
    indexName: "instant_search",
    searchClient
});
search.addWidgets([
    instantsearch.widgets.searchBox({
        container: "#searchbox",
        placeholder: "Seach for products.."
    }),
    instantsearch.widgets.hits({
        container: "#hits",
        templates: {
            item: `
<article>
  <div class="product-image"> 
  <img
    src={{{image}}}
    alt={{{name}}}
  /></div>
  <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
  <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
  <p>{{{price}}}$</p>
</article>
`
        }
    }),
    instantsearch.widgets.refinementList({
        container: "#brand-list",
        attribute: "brand"
    }),
    instantsearch.widgets.refinementList({
        container: "#price-range",
        attribute: "price_range"
    }),
    instantsearch.widgets.pagination({
        container: "#pagination"
    })
]);
search.start();

//# sourceMappingURL=index.816e7b21.js.map

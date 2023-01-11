/* global algoliasearch instantsearch */ const searchClient = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");
const search = instantsearch({
    indexName: "instant_search",
    searchClient
});
search.addWidgets([
    instantsearch.widgets.searchBox({
        container: "#searchbox"
    }),
    instantsearch.widgets.hits({
        container: "#hits",
        templates: {
            item: `
<article>
  <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
  <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
</article>
`
        }
    }),
    instantsearch.widgets.refinementList({
        container: "#brand-list",
        attribute: "brand",
        sortBy (a, b) {
            console.log(a);
            // Seems a bit wasteful to get the data here
            return a.count < b.count ? 1 : -1;
        }
    }),
    instantsearch.widgets.pagination({
        container: "#pagination"
    })
]);
search.start();

//# sourceMappingURL=index.816e7b21.js.map

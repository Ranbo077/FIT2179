vegaEmbed("#map", "map.json").then(function(result) {
  console.log("Map loaded successfully");
}).catch(function(error) {
  console.error(error);
});
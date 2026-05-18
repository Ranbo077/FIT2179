vegaEmbed("#map", "map.json").then(function (result) {
    console.log("Map loaded successfully");
}).catch(function (error) {
    console.error(error);
});

vegaEmbed("#trend", "trend.json").then(function (result) {
    console.log("Trend chart loaded successfully");
}).catch(function (error) {
    console.error(error);
});

vegaEmbed("#birth-country-bar", "birth_country_bar.json").then(function (result) {
    console.log("Birth country bar chart loaded successfully");
}).catch(function (error) {
    console.error(error);
});

vegaEmbed("#birth-country-change", "birth_country_change.json")
    .then(function (result) {
        console.log("Birth country change chart loaded successfully");
    })
    .catch(function (error) {
        console.error(error);
    });

vegaEmbed("#overseas-born-share", "overseas_born_share.json")
    .then(function (result) {
        console.log("Overseas-born share chart loaded successfully");
    })
    .catch(function (error) {
        console.error(error);
    });

vegaEmbed("#birth-country-state-heatmap", "birth_country_state_heatmap.json")
    .then(function (result) {
        console.log("Birth country heatmap loaded successfully");
    })
    .catch(function (error) {
        console.error(error);
    });

vegaEmbed("#language-stacked-bar", "language_stacked_bar.json")
    .then(function (result) {
        console.log("Language stacked bar chart loaded successfully");
    })
    .catch(function (error) {
        console.error(error);
    });
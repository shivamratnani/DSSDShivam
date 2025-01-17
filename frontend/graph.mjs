const graphDiv = document.getElementById("graph");
const graphDiv2 = document.getElementById("graph2");
const graphDiv3 = document.getElementById("graph3");

fetch(
    "http://localhost:3000/g1" //use "http://localhost:3000" if running sample express backend locally, or replace with your own backend endpoint url
).then(async res => {
    Plotly.newPlot( graphDiv, [ {
        ...(await res.json()),
        type: "bar"
    } ]);
})

fetch(
    "http://localhost:3000/g2" //use "http://localhost:3000" if running sample express backend locally, or replace with your own backend endpoint url
).then(async res => {
    Plotly.newPlot( graphDiv2, [ {
        ...(await res.json()),
        type: "bar"
    } ]);
})

fetch(
    "http://localhost:3000/g3" //use "http://localhost:3000" if running sample express backend locally, or replace with your own backend endpoint url
).then(async res => {
    Plotly.newPlot( graphDiv3, [ {
        ...(await res.json()),
        type: "bar"
    } ]);
})


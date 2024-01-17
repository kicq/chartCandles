import "./style.css";
import { NightVision } from "night-vision";
import data from "./data-2.json";
// import Custom from "./custom.navy";
import Candles from "./candles.navy";

document.querySelector("#app").innerHTML = `
<style>
body {
    background-color: #0c0d0e;
}
</style>
<div id="chart-container"></div>
`;

let chart = new NightVision("chart-container", {
  data: [],
  autoResize: true,
  colors: { back: "#111113", grid: "#2e2f3055" },
  scripts: [
    // Custom
    // Candles
  ] // Add the script
});

// Refernce for experiments
window.chart = chart;


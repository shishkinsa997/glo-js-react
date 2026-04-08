import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validate from "./modules/validate";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sliderCarousel from "./modules/sliderCarousel";

timer("April 5, 2026 01:10:00");
menu();
modal();
validate();
tabs();
try {
slider(
  "portfolio-content",
  "portfolio-item",
  "portfolio-dots",
  "portfolio-item-active",
  "dot-active",
  "portfolio-btn",
  "arrow-left",
  "arrow-right",
  2000,
)
} catch (e) {
  console.error("Slider module error: ", e);
}
sliderCarousel();

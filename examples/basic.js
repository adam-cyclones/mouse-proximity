import { getDistanceFromEdges } from "../src/index";

const div = document.querySelector("div");

window.addEventListener("mousemove", ({ clientX: mouseX, clientY: mouseY }) => {
  const distance = getDistanceFromEdges(div, 150, { mouseX, mouseY });
  console.log(distance);
});

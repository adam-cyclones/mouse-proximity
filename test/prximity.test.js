import { getDistanceFromEdges } from "../index.js";

describe("getDistanceFromEdges", () => {
  it("calculates distance from edges", () => {
    const div = document.createElement("div");
    div.style.left = "100px";
    div.style.top = "100px";
    div.style.width = "200px";
    div.style.height = "200px";

    const distance = getDistanceFromEdges(div, 100, {
      mouseX: 150,
      mouseY: 150
    });

    expect(distance).toEqual({
      leftDistPercent: 50,
      rightDistPercent: 50,
      topDistPercent: 50,
      bottomDistPercent: 50,
      leftDistInThreshold: 50,
      rightDistInThreshold: 50,
      topDistInThreshold: 50,
      bottomDistInThreshold: 50,
      isInside: true,
      inProximity: true
    });
  });

  it("calculates distance from edges when outside threshold", () => {
    const div = document.createElement("div");
    div.style.left = "100px";
    div.style.top = "100px";
    div.style.width = "200px";
    div.style.height = "200px";

    const distance = getDistanceFromEdges(div, 100, { mouseX: 50, mouseY: 50 });

    expect(distance).toEqual({
      leftDistPercent: 0,
      rightDistPercent: 100,
      topDistPercent: 0,
      bottomDistPercent: 100,
      leftDistInThreshold: 0,
      rightDistInThreshold: 100,
      topDistInThreshold: 0,
      bottomDistInThreshold: 100,
      isInside: false,
      inProximity: false
    });
  });
});

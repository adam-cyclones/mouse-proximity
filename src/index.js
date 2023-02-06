import "./styles.css";

export function getDistanceFromEdges(
  el,
  threshold = 50,
  { mouseX, mouseY } = { mouseX: 0, mouseY: 0 },
  debug = false
) {
  if (debug) {
    el.style.setProperty("--dev-shadow-size", `${threshold}px`);
  }
  const { left, right, top, bottom } = el.getBoundingClientRect();

  const inProximityLeft = mouseX > left - threshold;
  const inProximityRight = mouseX < right + threshold;
  const inProximityTop = mouseY > top - threshold;
  const inProximityBottom = mouseY < bottom + threshold;

  const inProximity =
    inProximityLeft && inProximityRight && inProximityTop && inProximityBottom;

  let leftDistInThreshold = mouseX - (left - threshold);
  leftDistInThreshold = leftDistInThreshold > 0 ? leftDistInThreshold : 0;
  leftDistInThreshold =
    leftDistInThreshold < threshold ? leftDistInThreshold : threshold;
  let leftDistPercent = (leftDistInThreshold / threshold) * 100;

  let rightDistInThreshold = right + threshold - mouseX;
  rightDistInThreshold = rightDistInThreshold > 0 ? rightDistInThreshold : 0;
  rightDistInThreshold =
    rightDistInThreshold < threshold ? rightDistInThreshold : threshold;
  let rightDistPercent = (rightDistInThreshold / threshold) * 100;

  let topDistInThreshold = mouseY - (top - threshold);
  topDistInThreshold = topDistInThreshold > 0 ? topDistInThreshold : 0;
  topDistInThreshold =
    topDistInThreshold < threshold ? topDistInThreshold : threshold;
  let topDistPercent = (topDistInThreshold / threshold) * 100;

  let bottomDistInThreshold = bottom + threshold - mouseY;
  bottomDistInThreshold = bottomDistInThreshold > 0 ? bottomDistInThreshold : 0;
  bottomDistInThreshold =
    bottomDistInThreshold < threshold ? bottomDistInThreshold : threshold;
  let bottomDistPercent = (bottomDistInThreshold / threshold) * 100;

  return {
    leftDistPercent: Math.floor(leftDistPercent),
    rightDistPercent: Math.floor(rightDistPercent),
    topDistPercent: Math.floor(topDistPercent),
    bottomDistPercent: Math.floor(bottomDistPercent),
    leftDistInThreshold,
    rightDistInThreshold,
    topDistInThreshold,
    bottomDistInThreshold,
    isInside:
      leftDistPercent === 100 &&
      rightDistPercent === 100 &&
      topDistPercent === 100 &&
      bottomDistPercent === 100,
    inProximity
  };
}

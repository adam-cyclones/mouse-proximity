# MouseProximity

==============

MouseProximity is a JavaScript library for detecting the proximity of the mouse cursor to an HTML element.

## Installation

---

You can install MouseProximity using npm:

Copy code

`npm install mouse-proximity`

Or include the library in your HTML file:

htmlCopy code

`<script src="https://unpkg.com/mouse-proximity"></script>`

## Usage

---

To use MouseProximity, select an HTML element and attach the `mousemove` event listener to it.

javascriptCopy code

`const div = document.querySelector("#my-element"); window.addEventListener("mousemove", ({ clientX: mouseX, clientY: mouseY }) => { const distance = MouseProximity.getDistanceFromEdges(div, 150, { mouseX, mouseY }); console.log(distance); });`

The `getDistanceFromEdges` function takes the following parameters:

- `el`: The HTML element to detect the proximity of the mouse cursor to.
- `threshold` (optional): The threshold distance from the edges of the element to consider the mouse cursor in proximity. The default value is 50.
- `mouseCoordinates` (optional): The mouse coordinates to use for proximity calculation. The default is the mouse event object.
- `debug` (optional): Whether to enable the shadow debugging feature or not. The default is `false`.

The function returns an object with the following properties:

- `leftDistPercent`: The percentage of the distance from the left edge to the threshold.
- `rightDistPercent`: The percentage of the distance from the right edge to the threshold.
- `topDistPercent`: The percentage of the distance from the top edge to the threshold.
- `bottomDistPercent`: The percentage of the distance from the bottom edge to the threshold.
- `leftDistInThreshold`: The distance from the left edge to the threshold.
- `rightDistInThreshold`: The distance from the right edge to the threshold.
- `topDistInThreshold`: The distance from the top edge to the threshold.
- `bottomDistInThreshold`: The distance from the bottom edge to the threshold.
- `isInside`: Whether the mouse cursor is inside the element or not.
- `inProximity`: Whether the mouse cursor is in proximity to the element or not.

## License

---

MouseProximity is licensed under the MIT license.

# MouseProximity

MouseProximity is a JavaScript library for detecting the proximity of the mouse cursor to an HTML element.

```txt
          Proximity Threshold
       ______________________
      |                      |
      |                      |
      |                      |
      |   __________        |
      |  |  Element  |       |
      |  |__________ |       |
      |                      |
      |______________________|
```

## Installation Steps

1.  Clone the repository or download the source code:

shellCopy code

`$ git clone https://github.com/adamcrockett/mouse-proximity.git`

2.  Change into the project directory:

shellCopy code

`$ cd mouse-proximity`

3.  Install the dependencies:

rubyCopy code

`$ npm install`

4.  Start the development server:

rubyCopy code

`$ npm run start`

5.  The application should be available in your browser at `http://localhost:1234`

6.  To build the project for production, run the following command:

rubyCopy code

`$ npm run build`

7.  To run the test suite, run the following command:

shellCopy code

`$ npm run test`

## Usage

To use MouseProximity, select an HTML element and attach the `mousemove` event listener to it.

```js
const div = document.querySelector("#my-element");

window.addEventListener("mousemove", ({ clientX: mouseX, clientY: mouseY }) => {
          const distance = MouseProximity.getDistanceFromEdges(div, 150, { mouseX, mouseY });
          console.log(distance);
});
```

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

## Examples

You can find examples of how to use MouseProximity in the examples directory.

## License

MouseProximity is licensed under the MIT license.

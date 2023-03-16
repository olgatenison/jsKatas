// DESCRIPTION:
// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

// To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

// https://www.codewars.com/kata/5763bb0af716cad8fb000580

var countSquares = function (cuts) {
  // Total number of cubes
  let totalCubes = (cuts + 1) ** 3;

  // Number of cubes with no red faces
  let noRedCubes = 0;
  if (cuts > 0) {
    noRedCubes += 6 * (cuts - 1) * (cuts - 1) + 2;
    noRedCubes += 6 * (cuts - 1) * (cuts - 2);
    noRedCubes += 3 * (cuts - 1);
  }

  // Number of cubes with at least one red face
  let redCubes = totalCubes - noRedCubes;

  return redCubes;
};

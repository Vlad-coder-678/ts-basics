// По данным предыдущей задачи написать функцию, которая по массиву из двух цветов будет выводить численное значение.
function getColorNumber2(colors: [Color, Color]): number {
  return Number(colors.reduce((res, color) => res + colorData[color], ""));
}

console.log(getColorNumber2(["blue", "black"])) // 60

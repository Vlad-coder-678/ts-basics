// 1. Типизируйте функцию calc
function calc(action: string, a: number, b: number): number {
  switch (action) {
    case "subtraction":
      return a - b;
    case "multiplication":
      return a * b;
    case "division":
      if (b === 0) return 0;
      return a / b;
    case "summ":
    default:
      return a + b;
  }
}

// 2. calc2 аналогична функции calc, но с использованием enum для action
enum Action {
  summ = "summ",
  subtraction = "subtraction",
  multiplication = "multiplication",
  division = "division",
}

function calc2(action: Action, a: number, b: number): number {
  switch (action) {
    case "subtraction":
      return a - b;
    case "multiplication":
      return a * b;
    case "division":
      if (b === 0) return 0;
      return a / b;
    case "summ":
    default:
      return a + b;
  }
}

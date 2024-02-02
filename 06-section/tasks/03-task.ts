// Доработайте дженерик функции getLength таким образом, чтобы код не вызывал ошибок.
type Lengthwise = {
  length: number;
};

function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

const obj: Lengthwise = {
  length: 20,
}
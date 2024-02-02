// Функция getPropertyValue принимает 2 аргумента:
// - объект,
// - ключ - свойство этого объекта, который необходимо вернуть.
// Типизируйте данную функцию таким образом, чтобы код ниже вызвал ошибку только в том случае, когда у объекта нет указанного свойства (второй вызов).
export function getPropertyValue<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  return obj[key];
}

const car = {
  brand: "Ford",
  model: "Mustang",
  yearOfIssue: 1967,
  engine: "V8",
  hp: 115
};

getPropertyValue(car, "brand");
// getPropertyValue(car, "nickname");

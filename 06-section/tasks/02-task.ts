// 1. Перепишите функцию echo таким образом,
// чтобы вместо any в ней использовался дженерик.
// 2. Создайте стрелочную функцию echo2 c аналогичным функционалом.
function echo<T>(something: T): T {
  return something;
};

const echo2 = <T>(something: T): T => something;

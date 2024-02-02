// Интерфейс грузовика ITruck.
// Создайте тип обычного авто ICar убрав из интерфейса поле hasTrailer
export interface ITruck {
  brand: string;
  model: string;
  hasTrailer: boolean;
}

type Car = Omit<ITruck, "hasTrailer">;

const car: Car = {
  brand: "Ford",
  model: "l200",
}

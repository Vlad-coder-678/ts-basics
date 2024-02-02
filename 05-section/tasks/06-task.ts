// Не меняя интерфейс IPerson измените тип somePerson таким образом чтобы код ниже не вызывал ошибок.
interface IPerson {
  readonly firstName: string;
  readonly lastName: string;
  age: number;
  readonly hometown: string;
  isMarried: boolean;
}

type Writable<T> = { -readonly [P in keyof T]: T[P] };

const somePerson: Writable<IPerson> = {
  firstName: "Антон",
  lastName: "Иванов",
  age: 33,
  hometown: "Москва",
  isMarried: false,
};

somePerson.firstName = "Семен";
somePerson.lastName = "Журавлев";
somePerson.hometown = "Петербург";

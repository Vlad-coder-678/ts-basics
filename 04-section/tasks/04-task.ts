// IUser - модель данных юзера
// IRatingUserItem - модель данных юзера в рейтинге пользователей
// Типы одноименных полей в обоих интерфейсах совпадают. Укажите типы полей
type Login = string;
type Rating = number;

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  login: Login;
  rating: Rating;
}

interface IRatingUserItem {
  position: number;
  login: Login;
  rating: Rating;
}

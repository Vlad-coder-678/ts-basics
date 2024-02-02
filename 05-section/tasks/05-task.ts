// Интерфейс некоего места.
// Все свойства этого места не обязательны.
// Используя интерфейс IPlaceData создайте тип PlaceAddressType,
// в котором будут поля country, city, address.
// При этом поля должны быть обязательны к заполнению.
interface IPlaceData {
  country?: string;
  city?: string;
  address?: string;
  temperature?: number;
  time?: Date | number | string;
  isCloudy?: boolean;
}

type PlaceAddressType = Required<IPlaceData>;

const place: PlaceAddressType = {
  country: "",
  city: "",
  address: "",
  temperature: 23,
  time: new Date(),
  isCloudy: true,
};

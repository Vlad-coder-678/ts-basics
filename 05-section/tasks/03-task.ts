// IShop - модель данных магазина
// IShopListItem - данные магазина использующиеся в списке магазинов.
// Перепишите IShopListItem создав еще 2 типа:
// - IShopListItem1 - используя утилиту, которая удаляет указанные свойства
// - IShopListItem2 - используя утилиту, которая удаляет все свойства, кроме указанных.
export interface IShop {
  id: number;
  name: string;
  employeesCount: number;
  ceo: string;
  address: string;
  isOpen: boolean;
}

type IShopListItem = {
  id: IShop["id"];
  name: IShop["name"];
  address: IShop["address"];
};

type IShopListItem1 = Omit<IShop, keyof IShopListItem>;
type IShopListItem2 = Pick<IShop, keyof IShopListItem>;

const shopList1: IShopListItem1 = {
  ceo: "",
  isOpen: true,
  employeesCount: 20,
};

const shopList2: IShopListItem2 = {
  id: 12,
  name: "",
  address: "",
};

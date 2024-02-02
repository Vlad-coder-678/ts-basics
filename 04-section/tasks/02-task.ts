// Перешите интерфейс ICustomer разбив его на отдельные подинтерфейсы.
// Структуру и нейминг полей вы можете менять на свое усмотрение.
enum paymentType {
  "cash",
  "card",
  "credit",
}

interface ICustomerData {
  firstName: string;
  lastName: string;
  dateBirthday: Date;
}

interface ICustomerAdress {
  deliveryCountry: string;
  deliveryCity: string;
  deliveryAddress: string;
  deliveryBuilding: number | string;
  deliveryApartment?: number;
}

interface IDeliveryData {
  detiveryTime?: string;
  paymentType: paymentType;
  ordersCount: number;
  discountPercent: number;
  currency: "EUR" | "USD" | "RUB";
}

interface ICustomer extends ICustomerData, ICustomerAdress, IDeliveryData {}

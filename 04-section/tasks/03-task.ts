// Доработайте интерфейс таким образом, чтобы бренд и модель авто могли быть указаны лишь один раз. А registrationNumber и ownerName было опциональным
interface ICar {
  readonly brand: string;
  readonly model: string;
  hp: number;
  registrationNumber?: string;
  ownerName?: string;
}

export {}
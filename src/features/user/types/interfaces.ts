// ===== Users =====

export interface IUserDTO {
  id: number;
  username: string;
  email: string;
  phone: string;
  avatarUrl: string | null;
  points: number;
  isAdmin: boolean;
  createdAt: string;
}

// Список юзерів
export interface IUserResponseDTO {
  success: boolean;
  data: IUserDTO[];
}

// Один юзер
export interface IUserSingleResponseDTO {
  success: boolean;
  data: IUserDTO;
}

// ===== Locations =====

export interface ILocationDTO {
  id: number;
  address: string;
  lat: number;
  lng: number;
}

export interface ILocationResponseDTO {
  success: boolean;
  data: ILocationDTO[];
}

// ===== Cards =====

export interface ICard {
  cardNumber: string;
  brand: string;
  holderName: string;
  expMonth: string;
  expYear: string;
  isDefault: string;
}

export interface ICardsResponseDTO {
  success: boolean;
  data: ICard[];
}

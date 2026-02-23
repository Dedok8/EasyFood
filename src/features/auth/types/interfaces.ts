export interface IUser {
  id: number;
  username: string;
  avatarUrl: string | null;
  isAdmin: boolean;
  points: number;
}

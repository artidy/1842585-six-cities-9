type User = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
} | null;

type UserApi = User & {
  token: string
}

export type {User, UserApi};

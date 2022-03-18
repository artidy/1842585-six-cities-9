import {ApiComment} from './api-comment';

type UserComment = ApiComment & {
  date: string;
  id: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
}

export default UserComment;

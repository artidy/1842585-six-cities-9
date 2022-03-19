type ApiComment = {
  comment: string;
  rating: number;
};

type AddComment = {
  userComment: ApiComment;
  hotelId: number;
  resetForm: () => void;
};

export type {ApiComment, AddComment};

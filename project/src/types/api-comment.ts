type ApiComment = {
  comment: string;
  rating: number;
};

type AddComment = {
  userComment: ApiComment;
  hotelId: string;
  resetForm: () => void;
};

export type {ApiComment, AddComment};

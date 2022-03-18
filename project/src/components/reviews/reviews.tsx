import Review from '../review/review';
import UserComment from '../../types/user-comment';

type ReviewsProps = {
  comments: UserComment[];
}

function Reviews({comments}: ReviewsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <Review key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

export default Reviews;

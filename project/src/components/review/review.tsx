import UserComment from '../../types/user-comment';
import {getRatingWidth} from '../../functions';

type ReviewProps = {
  comment: UserComment;
}

function Review({comment: {user: {avatarUrl, name}, rating, comment, date}}: ReviewProps): JSX.Element {
  const ratingWidth = getRatingWidth(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${ratingWidth}%` }} />
            <span className="visually-hidden">Rating</span>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{date}</time>
      </div>
    </li>
  );
}

export default Review;

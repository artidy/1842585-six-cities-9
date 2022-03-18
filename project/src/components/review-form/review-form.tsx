import {ChangeEvent, FormEvent, useState} from 'react';
import {addCommentAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks/store';

const INITIAL_RATING = 0;
const INITIAL_MESSAGE = '';

type ReviewFormProps = {
  hotelId: string;
};

function ReviewForm({hotelId}: ReviewFormProps): JSX.Element {
  const [rating, setRating] = useState(INITIAL_RATING);
  const [message, setMessage] = useState(INITIAL_MESSAGE);
  const {commentsLoaded} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  function changeRating(evt: ChangeEvent<HTMLInputElement>) {
    if (evt.target.tagName === 'INPUT') {
      setRating(+evt.target.value);
    }
  }

  function changeMessage(evt: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(evt.target.value);
  }

  function resetForm() {
    setRating(INITIAL_RATING);
    setMessage(INITIAL_MESSAGE);
  }

  function sendReview(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    dispatch(addCommentAction({
      userComment: {
        comment: message,
        rating,
      },
      hotelId: hotelId,
      resetForm,
    }));
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={sendReview}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={changeRating}>
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={message}
        onChange={changeMessage}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={rating === 0 || message === '' || !commentsLoaded}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;

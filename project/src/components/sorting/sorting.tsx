import {useState} from 'react';

import {SortingType} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks/store';
import {changeSortingType} from '../../store/main-slice/main-slice';

const INITIAL_OPEN = false;

function Sorting(): JSX.Element {
  const sortingTypeList = Object.values(SortingType);
  const {sortingType} = useAppSelector(({MAIN}) => MAIN);
  const [isOpen, toggleOpen] = useState(INITIAL_OPEN);
  const dispatch = useAppDispatch();

  function changeSorting(name: string) {
    dispatch(changeSortingType(name));
    toggleOpen(INITIAL_OPEN);
  }

  return (
    <form className="places__sorting" action='#' method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => toggleOpen(!isOpen)}>
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {sortingTypeList.map((sortingName) => (
          <li
            key={sortingName}
            className={`places__option ${sortingName === sortingType
              ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => changeSorting(sortingName.toString())}
          >
            {sortingName}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;

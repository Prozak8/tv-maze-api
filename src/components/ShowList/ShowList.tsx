import { Link } from 'react-router-dom';
import { IShow } from '../../interfaces/show';
import './ShowList.scss';

interface IShowListProps {
  shows: IShow[];
}

const ShowList = (props: IShowListProps) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center show-list__container mt-2'>
      {props.shows.map((show: IShow) => (
        // TODO: Export to ShowCard component.
        <div key={show.show.id} className='show-card'>
          {show.show.image && (
            <img
              className='show-card__image'
              alt='unable to display'
              src={show.show.image.original}
            />
          )}
          <div className='show-card__content'>
            <h3 className='show-card__content__title'>{show.show.name}</h3>
            <div>
              {show.show.network && <p>Shown on: {show.show.network.name}</p>}
              <p>Rating: {show.score.toFixed(2)}</p>
            </div>
            <Link className='show-card__content__link' to={`/show/${show.show.id}`}>
              <p>More info</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowList;

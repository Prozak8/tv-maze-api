import { IShowDetails } from '../../interfaces/show';
import './ShowDetails.scss';

interface IShowDetailsProps {
  show: IShowDetails;
}

const ShowDetails = (props: IShowDetailsProps) => {

  return (
    <div className='show-details d-flex flex-column justify-content-center align-items-center'>
      <h2 className='mb-1'>{props.show.name}</h2>
      {props.show.image && (
        <img
          className='show-details__image mb-1'
          alt='unable to display'
          src={props.show.image.original}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: props.show.summary }}></div>
      <p>
        <b>Runtime: </b>
        {props.show.averageRuntime} minutes
      </p>
      <p>
        <b>Genre/s: </b>
        {props.show.genres.join(', ')}
      </p>
      <p>
        <b>Language: </b>
        {props.show.language}
      </p>
    </div>
  );
};

export default ShowDetails;

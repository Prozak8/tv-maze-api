import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

import ShowDetails from '../../components/ShowDetails/ShowDetails';
import { IShow, IShowDetails } from '../../interfaces/show';

import './Show.scss';

interface IShowProps {
  shows: IShow[];
}

const Show = (props: IShowProps) => {
  const [show, setShow] = useState({} as IShowDetails);
  const [fetchingShow, setFetchingShow] = useState(true);
  const { id } = useParams<{ id: string }>();

  const matchingShow = props.shows.find((show) => id === show.show.id.toString());

  useEffect(() => {
    if (!matchingShow) {
      fetch(`https://api.tvmaze.com/shows/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          setShow(responseData);
        })
        .catch((err) => {
          // TODO: Show error in toast component.
          console.log('🚀 ~ file: Show.tsx ~ line 33 ~ useEffect ~ err', err);
        })
        .finally(() => setFetchingShow(false))
    } else {
      setShow(matchingShow.show);
      setFetchingShow(false);
    }
  }, [id, matchingShow]);

  return (
    <div className='show-page d-flex flex-column align-items-center'>
      <Link to={'/'}>
        <h2 className='my-1'>Back</h2>
      </Link>
      {fetchingShow ? (
        <div className='absolute-center'>
          <Loading />
        </div>
      ) : (
        <ShowDetails show={show}></ShowDetails>
      )}
    </div>
  );
};

export default Show;

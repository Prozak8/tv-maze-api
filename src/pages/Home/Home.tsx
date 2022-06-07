import Loading from '../../components/Loading/Loading';
import ShowList from '../../components/ShowList/ShowList';
import { IShow } from '../../interfaces/show';

interface IHomeProps {
  fetching: boolean;
  shows: IShow[];
}

const Home = (props: IHomeProps) => {
  return props.fetching ? <div className='absolute-center'><Loading /></div> : <ShowList shows={props.shows} />;
};

export default Home;

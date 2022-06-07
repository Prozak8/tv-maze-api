import { useLocation, useNavigate } from 'react-router-dom';
import { IShow } from '../../interfaces/show';
import SearchBarForm from './SearchBarForm';
import './SearchBar.scss';

interface ISearchBarProps {
  isFetching: (isFetching: boolean) => void;
  shows: (shows: IShow[]) => void;
}

const SearchBar = (props: ISearchBarProps) => {
  const TvMazeLogo = require('../../images/tvm-header-logo.png');
  const location = useLocation();
  const navigate = useNavigate();
  const fetchShowsBySearchTerm = (searchTerm: string) => {
    props.isFetching(true);

    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => props.shows(data))
      .catch((err) => {
        // TODO: Handle error with toast component.
        alert('Something went wrong Please try again later.');
        console.log('🚀 ~ file: SearchBar.tsx ~ line 23 ~ fetchShowsBySearchTerm ~ err', err);
      })
      .finally(() => {
        props.isFetching(false);
        if (location.pathname.startsWith('/show')) {
          navigate('/');
        }
      });
  };

  return (
    <div className='d-flex justify-content-center search-bar'>
      <img className='search-bar__logo' src={TvMazeLogo} alt='Logo unavailable' />
      <SearchBarForm submit={fetchShowsBySearchTerm}></SearchBarForm>
    </div>
  );
};

export default SearchBar;

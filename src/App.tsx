import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import { IShow } from './interfaces/show';

import Home from './pages/Home/Home';
import Show from './pages/Show/Show';

function App() {
  const [shows, setShows] = useState([] as IShow[]);
  const [fetchingShows, setFetchingShows] = useState(false);

  const handleFetchingState = (isFetching: boolean) => {
    setFetchingShows(isFetching);
  };

  const updateShows = (shows: IShow[]) => {
    setShows(shows);
  };

  return (
    <div className='App'>
      <SearchBar isFetching={handleFetchingState} shows={updateShows}></SearchBar>

      <Routes>
        <Route path='/' element={<Home fetching={fetchingShows} shows={shows}></Home>}></Route>
        <Route path='/show/:id' element={<Show shows={shows}></Show>}></Route>
      </Routes>
    </div>
  );
}

export default App;

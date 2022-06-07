// Credits to https://loading.io/css/

import './Loading.scss'

const Loading = () => {
  return (
    <div className='lds-ripple'>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;

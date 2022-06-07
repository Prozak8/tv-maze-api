import { useRef, useState } from 'react';

interface ISearchBarFormProps {
  submit: (string: string) => void;
}

// type Error = 'REQUIRED' | '';

// const ErrorMsg = (err: { err: Error }): JSX.Element => {
//   let error = '';
//   switch (err.err) {
//     case 'REQUIRED':
//       error = 'Please enter a search term';
//   }

//   return <small className='input-error-msg mb-1'>{error}</small>;
// };

const SearchBarForm = (props: ISearchBarFormProps) => {
  const [enteredSearchTerm, setEnteredSearchTerm] = useState('');
  // const [validation, setValidation] = useState('' as Error);

  const submit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (enteredSearchTerm.length) {
      // setValidation('');
      props.submit(enteredSearchTerm);
    } else {
      // setValidation('REQUIRED');
    }
  };

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredSearchTerm(event.target.value);
  };

  return (
    <form className='d-flex flex-column' onSubmit={submit}>
      <input
        className={`font-s mb-2 input-text ${enteredSearchTerm.length ? 'valid' : 'invalid'}`}
        type='text'
        value={enteredSearchTerm}
        onChange={searchChangeHandler}
        placeholder='Search shows'
      />
      {/* {validation === 'REQUIRED' && <ErrorMsg err={validation} />} */}
      <button className='font-s btn' type='submit'>
        Search
      </button>
    </form>
  );
};

export default SearchBarForm;

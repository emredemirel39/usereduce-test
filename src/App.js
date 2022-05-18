import axios from 'axios';
import { useReducer } from 'react';
import { reducer } from './reducer';
import './App.css';

function App() {

  const initialState = {
    data: [],
    loading: false,
    err: ''
  };

  const [ state, dispatch ] = useReducer(reducer, initialState);
  
  const fetchCats = () => {

    dispatch({type: 'FETCH_START'});

    const link = 'https://api.thecatapi.com/v1/images/search';

    axios.get(link)
    .then(response => {
      dispatch({type: 'FETCH_SUCCESS', payload: response.data})
    })

    .catch(() => {
      dispatch({type: 'FETCH_ERR', payload: 'Fail!'})
    });
  };

  const { data, err, loading } = state;

  return (
    <div className="App">
      <button disabled={loading} onClick={fetchCats}>Get Cat Image</button>
      {
        data.length > 0 && (
          <div>
            <img src={data[0].url} alt="cat" style={{width: '320px'}} />
          </div>
        )
      }
      {
        err && <h1>{err}</h1>
      }
    </div>
  );
};

export default App;

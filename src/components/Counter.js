import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from '../redux/actions/types';

function Counter() {
  const {count} = useSelector(state => state)
 // console.log(countState);
 const dispatch = useDispatch();

const handleIncrement = () => {
       // setCount( count + 1);
       dispatch({
        type: INCREMENT
       });
    }

    const handleDecrement = () => {
        //setCount(count - 1);
        dispatch( {
            type: DECREMENT
        })
    }
return (
      <div className="App">
       <button onClick={handleIncrement}> Increment </button>
        {count}
        <button onClick={handleDecrement}> Decrement </button>
    </div>

  );
}

export default Counter;

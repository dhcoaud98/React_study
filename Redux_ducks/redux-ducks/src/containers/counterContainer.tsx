import { increase, decrease, increaseBy } from "../modules/counter";
import Counter from '../components/counter';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";


function CounterContiner() {
  const dispatch = useDispatch();
  const count = useSelector(
    (state: RootState) => state.counter.count
  );

  const onIncrease = () => {
    dispatch(increase());
  }
  const onDecrease = () => {
    dispatch(decrease());
  }
  const onIncreaseBy = (diff:number) => {
    dispatch(increaseBy(diff));
  }

  return(
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  )
}

export default CounterContiner;
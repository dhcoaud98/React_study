// 액션 타입
const prefix = 'redux_ducks/counter/';
export const INCREASE = `${prefix}INCREASE` as const;
export const DECREASE = `${prefix}DECREASE` as const;
export const INCREASE_BY = `${prefix}INCREASE_BY` as const;

// state(초기값)
type CounterState = {
  count: number;
}

const initialState: CounterState = {
  count: 0,
}

// 액션 생성 함수
type CounterAction = 
  | ReturnType<typeof increase> 
  | ReturnType<typeof decrease> 
  | ReturnType<typeof increaseBy>

export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })
export const increaseBy = (diff:number) => ({ 
  type: INCREASE_BY,
  plyload: diff
 })

// 리듀서
export default function counter( 
  state: CounterState = initialState, 
  action: CounterAction 
  ): CounterState {
    switch (action.type) {
      case 'redux_ducks/counter/INCREASE':
        return { count : state.count + 1 };
      case 'redux_ducks/counter/DECREASE':
        return { count : state.count - 1 };
      case 'redux_ducks/counter/INCREASE_BY':
        return { count : state.count + action.plyload  };
      default:
        return state;
    };
}
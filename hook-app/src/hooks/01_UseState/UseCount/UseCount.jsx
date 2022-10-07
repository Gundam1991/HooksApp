
import { useCounter } from "./useCounter";

export const UseCount = () => {

  //HOOKs CLASIc
  // const [counter, setCounter] = useState(0);

  //CUSTOM HOOKS
  const {counter, increment, decrement, reset} = useCounter();

  return (
    <>
      <h1>Counter:{counter}</h1> 
      <hr />
      <div>
        <button
          style={{ marginRight: 10 }}
          type="button"
          class="btn btn-primary"
          //Hooks Clasic
          // onClick={() => setCounter(counter+1)}
          //Hooks Custom
          onClick={increment}
        >
          +1
        </button>
        <button
          type="button"
          class="btn btn-primary"
           //Hooks Clasic
          // onClick={() => setCounter(counter-1)}
          //Hooks Custom
          onClick={decrement}
          style={{ marginRight: 10 }}
        >   
            -1   
        </button>
        <button
          type="button"
          class="btn btn-primary"
           //Hooks Clasic
          // onClick={() => setCounter(0)}
          //Hooks Custom
          onClick={reset} 
        >
            Resset   
        </button>
      </div>
    </>
    )   
}

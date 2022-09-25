
import { useCounter } from "./useCounter";

export const UseCount = () => {

  //HOOKs CLASIc
  // const [counter, setCounter] = useState(0);

  //CUSTOM HOOKS
  const {count,key,props,type} = useCounter();
  console.log(count);
  return (
    <>
      <h1>Counter:{count}</h1> 
      <hr />
      <div>
        <button
          style={{ marginRight: 10 }}
          type="button"
          class="btn btn-primary"
          //Hooks Clasic
          // onClick={() => setCounter(counter+1)}
          //Hooks Custom
          onClick={key}
        >
          +1
        </button>
        <button
          type="button"
          class="btn btn-primary"
           //Hooks Clasic
          // onClick={() => setCounter(counter-1)}
          //Hooks Custom
          onClick={props}
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
          onClick={type} 
        >
            Resset   
        </button>
      </div>
    </>
    )   
}

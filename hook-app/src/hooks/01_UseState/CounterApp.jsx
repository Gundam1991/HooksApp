import { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const {counter1,counter2,counter3} = counter;

  return (
    <>
      <h1>Counter:{counter1}</h1>
      <h1>Counter:{counter2}</h1>
      <h1>Counter:{counter3}</h1>
      <hr />
      <div>
        <button
          style={{ marginRight: 10 }}
          type="button"
          class="btn btn-primary"
          onClick={() => setCounter({...counter, counter1: counter1+1})}
        >
          +1
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setCounter({...counter, counter1: counter1-1})}
        >
            -1   
        </button>
      </div>
    </>
    )   
}

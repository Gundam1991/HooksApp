import { useCounter } from "../01_UseState/UseCount/useCounter";
import { useFetch } from "../useFetch";
import { Quote } from "../../03_Examples/Quote";

export const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text center">Loading...</div>
      ) : (
        <Quote author={author} quote={quote}/>
      )}

      <button className="btn btn-primary" disabled={isLoading} onClick={increment}>Netx Quote</button>
    </>
  );
};

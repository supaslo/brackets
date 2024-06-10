import { useEffect, useState } from "react";

const GetRounds = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/bracket/1')
      .then((response) => response.json())
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        console.log(err.message);
     });
}, []);
  return { data, isPending, error };
}
 
export default GetRounds;
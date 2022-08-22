import React, { useEffect, useState } from "react";

function HomeScreen() {
  const [counteries, setcountries] = useState([]);
  const [Ispending, setIspending] = useState(false);

  useEffect(() => {
    setIspending(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setcountries(data);
      })
      .catch((err) => console.log("error :", err))
      .finally(() => {
        setIspending(false);
      });
  }, []);

  if (Ispending) return <h1>Loading...</h1>;
  return (
    <div>
      {counteries.map((country) => (
        <div className="card">
          <img src={country.flags.png} alt={country.name.common} />
          <h5>{country.name.common}</h5>
        </div>
      ))}
    </div>
  );
}

export default HomeScreen;

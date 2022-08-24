import React from "react";
import products from "../datasource/products";

function HomeScreen() {
  return (
    <div className="products">
      <div>
        <div className="firsttrow">
          <div className="card">
            <h2>Quality Iphones</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                maxWidth: "90%",
                margin: "20px auto",
              }}
            >
              {products.map((product) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    border: "1px solid #dedede",
                    margin: "10px",
                    padding: "10px",
                  }}
                >
                  <img src={product.image} alt="" height={230} />
                  <h5>{product.name}</h5>
                  <h5>GH₵{product.price.toFixed(2)}</h5>
                </div>
              ))}
              ;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;

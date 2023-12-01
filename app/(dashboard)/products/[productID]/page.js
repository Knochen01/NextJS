import React from "react";

export default function page({ params }) {
  return (
    <main>
      <h1>This page displays the Product ID</h1>
      <div>The product id is{params.productID} </div>
    </main>
  );
}

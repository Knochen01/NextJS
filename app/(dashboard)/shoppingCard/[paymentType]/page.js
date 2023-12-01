import React from "react";

export default function page({ params }) {
  return (
    <div>Thank you for choosing {params.paymentType} as payment Methdo</div>
  );
}

import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>SHOPPINGCARD</h1>
      <div>Please choose Payment Method</div>
      <ul>
        <Link href="/shoppingCard/casj">
          <li>Cash</li>
        </Link>
        <Link href="shoppingCard/bitcoin">
          <li>Bitcoin</li>
        </Link>
      </ul>
    </div>
  );
}

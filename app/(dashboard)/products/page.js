import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div>PRODUCTS</div>
      <div>Choose Product</div>
      <ul>
        <Link href="/products/tattoes">
          <li>Tattoes</li>
        </Link>
        <Link href="/products/piercings">
          <li>Piercings</li>
        </Link>
      </ul>
    </div>
  );
}

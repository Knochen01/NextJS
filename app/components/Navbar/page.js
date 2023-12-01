import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link href="/">
          <div className="logo">---MP---</div>
        </Link>

        <ul className={styles.ul}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="/shoppingCard">
            <li>Shopping Card</li>
          </Link>
          <hr />
        </ul>
      </nav>
    </header>
  );
}

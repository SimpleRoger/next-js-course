import Link from "next/link";
import styles from "../styles/Navbar.modules.css";

export default function Navbar() {
  console.log(styles);
  console.log(styles.nav);

  return (
    <nav className="{styles.navbar}">
      <ul className="{styles.ul}">
        <li>Home</li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

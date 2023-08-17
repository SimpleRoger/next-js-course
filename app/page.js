import Image from "next/image";
import styles from "../styles/page.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  console.log("HI")
  return (
    <>
      <Navbar />
      <h1>This is the Home Page</h1>
    </>
  );
}

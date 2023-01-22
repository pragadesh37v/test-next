import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div style={{ 
        height: "50vh", 
        width: "50vw", 
        margin: "5px",
        border: "2px white solid"
        }}>
        <h1>pragadesh's site</h1>
        <Link href="/custom/one">Custom page</Link>
        <Link href="/sub/">ID page</Link>
      </div>
    </>
  );
}

import Image from "next/image";
import localFont from "next/font/local";
import List from "@/components/Listgames";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <List/>
    </>
  );
}

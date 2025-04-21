'use client';

import Header from "./components/Header";

import styles from "./page.module.css";

import Image from "next/image";
import fileImage from '../../public/file.svg';
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false)

  const handleApi = async () => {
    try {
      setLoading(true)
      // const response = await fetch('/api/users/1', {
      //   headers: {
      //     accept: 'application/json',
      //     method: "GET",
      //   },
      // })
      const response = await fetch('/api/', {
        headers: {
          accept: 'application/json',
          method: "GET",
        },
      })
      console.log(response);
      
      if (response) {
        const data = await response.json()
        console.log(data)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
    <div>
      <Header name="name" age={25} isMan={true}>
        <p>A Children Text</p>
      </Header>
      {/* <Image src="./file.svg" width={1000} height={500} alt="image" /> */}
      <Image quality={100} src={fileImage} alt="image" />
      <br/>
      <button onClick={handleApi}>Call API</button>
    </div>
    </>
  )
}

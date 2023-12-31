import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/attendence.module.css";
import Link from "next/link";
import NavBar from "../../Components/Navbar";
export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Mark samarth's attendence</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NavBar />
      <main className={styles.main}>
        <form action="" className={styles.form_main}>
          <p className={styles.heading}>Attendance</p>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputField}
              id="username"
              placeholder="Register Number"
            />
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputField}
              id="password"
              placeholder="Subject"
            />
          </div>

          {/* <a className={styles.forgotLink} href="#">
            Mark your attendence by scanning the QR
          </a> */}
          <a href="/scan" className={styles.card}>
            <h2 className={styles.qr}>Scan a QR code&rarr;</h2>
            <p className={styles.red}>
              *Scan the code placed in your classroom
            </p>
          </a>
        </form>
        <div className={styles.box}>
          <Image src="/class1.png" height={466} width={781} />
        </div>
      </main>
    </>
  );
}

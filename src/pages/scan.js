//scan.js

import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import styles from "../styles/scan.module.css";
import Navbar from "../../Components/Navbar";
import Image from "next/image";

function Scan() {
  const [data, setData] = useState("No result");

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container1}>
          <h3>Place the QR code inside the area</h3>
          <p>Scanning will start automatically</p>
          <div className={styles.container}>
            <QrReader
              autoplay="true"
              muted="true"
              className={styles.box}
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                  console.log(result);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              //this is facing mode : "environment " it will open backcamera of the smartphone and if not found will
              // open the front camera
              constraints={{ facingMode: "environment" }}
              style={{ width: "60%", height: "60%" }}
            />
            <p>{data}</p>
            <button className={styles.but}>
              <Image src="/placeholder.png" height={50} width={50} />
            </button>
            <p className={styles.blur}>*Your location is being Tracked.</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Scan;

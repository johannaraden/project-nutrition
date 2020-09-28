import React, { useRef, useState, useLayoutEffect } from 'react';
import styled from 'styled-components'
import './style.css'
import Quagga from 'quagga';


const CameraDiv = styled.div`
  color: black;
  width: 80%;
  text-align: center;
  font-size: 1.5em;
`

export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true);
  const cameraDivRef = useRef();

  Quagga.onDetected((data) => {
    onDetected(data.codeResult.code);
  });

  useLayoutEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: cameraDivRef.current,
        },
        decoder: {
          readers: ["ean_reader"],
        },
      },
      (err) => {
        if (err) {
          console.error("Failed to initialize reader", err);
          return;
        }
        Quagga.start();
        setInitializing(false);
      }
    );

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <>
      {initializing && <CameraDiv>Starting camera...</CameraDiv>}
      <div ref={cameraDivRef} className={className} />
    </>
  );
};

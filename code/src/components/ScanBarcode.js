jsx
import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)

  return (
    <>
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
        }} />
      )}
    </>
  )
}

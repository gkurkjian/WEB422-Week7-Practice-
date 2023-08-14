import '../styles/globals.css'
// import { useState, createContext } from 'react';  // or we can include the React and that'll be the main provider
import React, {useState} from 'react';

export const CountContext = React.createContext();
export const SetCountContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState(0);  // declare high-level "count" state

  return (
    <CountContext.Provider value={count}>
      <SetCountContext.Provider value={setCount}>
        <Component {...pageProps} />
      </SetCountContext.Provider>
    </CountContext.Provider>
  );
}

export default MyApp

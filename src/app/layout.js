
'use client'
import { Inter } from "next/font/google";
import './globals.css'
import Header from "@/components/Header/Header";
import { makeStyles } from "@material-ui/core";
import {metadata} from './metaData'
import CryptoContext from "./context/CryptoContext";

const inter = Inter({ subsets: ["latin"] });



const useStyle = makeStyles(()=>({
  App:{
    backgroundColor:"#14161a",
    color:"white",

  }
}))
export default function RootLayout({ children }) {
  const classes = useStyle()
  return (
    <html lang="en">
      <body className={classes.App}>
        <CryptoContext>
        <Header/>
        {children}
        </CryptoContext>
        </body>
    </html>
  );
}

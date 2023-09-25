"use client"
import { useState } from 'react'
import './globals.css'
import Header from '@/Components/Header'

export default function RootLayout({ children }) {
// These are props code 
const [user, setUser] = useState("john Dev")
const [home, setHome] = useState("Home")
const [about, setAbout] = useState("About")
const [blog, setBlog] = useState("Blog")
const [account, setAccount] = useState("Account")
  return (
    <html lang="en">

      <body  >
        <Header name={user} home={home}  about={about} blog={blog} account={account}/>
        
        {children}</body>
    </html>
  )
}

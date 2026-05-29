"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function Mainlayout({children} : {children: React.ReactNode}) {
    return (
        <div>
            <Navbar/>
            <div className="flex">
                <Sidebar/>
                <div className="flex-1 ml-60">{children}</div>
            </div>
        </div>
    )
}
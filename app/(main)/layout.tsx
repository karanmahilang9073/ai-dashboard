"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function Mainlayout({children} : {children: React.ReactNode}) {
    return (
        <div>
            <Navbar/>
            <div className="flex">
                <Sidebar/>
                <div className="w-full">{children}</div>
            </div>
        </div>
    )
}
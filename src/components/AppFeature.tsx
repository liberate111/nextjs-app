'use client'

import { useEffect, useState } from "react";
import {FaHome} from "react-icons/fa"

interface AppFeatureProps {
    title: string;
    count?: number;
}
export default function AppFeature({title, count} : AppFeatureProps) {
    const [subTitle, setSubTitle] = useState('default subtitle');
    const products = [
        {id: 1, name: "A"},
        {id:2, name:"B"}
    ]
    const onMouseOver = () => {
        setSubTitle("new subtitle")
    }
    const appName = process.env.NEXT_PUBLIC_APP_NAME;

    useEffect(() => {
        console.log('effect: every re render')
    })

    useEffect(() => {
        console.log('effect: once', [])
    })

    useEffect(() => {
        console.log('effect: only subtitle change', [subTitle])
    })

    return (
        <main>
            <h1 onMouseMove={onMouseOver}>{<FaHome/>} {subTitle}</h1>
            <h2> APP NAME -- {appName}</h2>
            <h2>{title} -- {count}</h2>
            <p>App Feature</p>
            {
                products.map((item, index) => {
                    return <p key={item.id}>{item.name} - - {index + 1}</p>
                })
            }
        </main>
    );
}
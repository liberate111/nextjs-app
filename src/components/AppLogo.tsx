'use client'

import { AppHeader, AppHeader2 } from "./AppHeader"

export default function AppLogo() {
    const isShow = true
    const showMsg = () => {
        alert('ok');
    };

    return (
        <>
            <button onClick={showMsg}>Click</button>
            <h1>logo component</h1>
            {isShow ? <AppHeader/> : <AppHeader2/>}
        </>
    )
}
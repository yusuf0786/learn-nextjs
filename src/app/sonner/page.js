"use client"

import {toast} from 'sonner'
import SonnerBtn from '../components/button/sonnerBtn'

export default function Sonner() {
    return (
        <>
        <h2 style={{marginBottom: "0.5rem",}}>Sonner</h2>
        <div style={{marginBottom: "0.5rem",}}>
            <SonnerBtn text='Success' bgColor='green' textColor='white' onClick={() => toast.success('xyz')}/>
        </div>
        <div>
            <SonnerBtn text='Error' bgColor='red' textColor='white' onClick={() => toast.error('xyz')}/>
        </div>
        </>
    )
}
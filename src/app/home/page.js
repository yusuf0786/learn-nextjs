"use client"

import { useApContext } from "../context"
import { userStore } from "../store/user";
import styles from './Button.module.css'

export default function Home() {
    const user = userStore(state => state.user)
    const userUpdate = userStore(state => state.updateUser)
    const sub = userStore.subscribe(console.log("Log After Store Update!"))
    sub()

    const {state, setState} = useApContext();
    
    return (
        <>
            <main>
                Home
                <p>{state.text}</p>
                <p>{state.age && state.age}</p>
                <div>
                    <button
                    className={styles["xyz-btn"]}
                    onClick={() => setState(prevState => ({...prevState, text: 'Text Changed!', age:15}))}
                    >
                        Click me
                    </button>
                </div>

                <div style={{marginBottom: "0.5rem",}}>
                    <p>user Name from store: {user.name && user.name}</p>
                    <input type="text" onChange={e => userUpdate({name:e.target.value})} />
                </div>
            </main>
        </>
    )
}
import { useState } from 'react'
import './App.css'

import {Header} from "./components/Header/Header.jsx";
import {Main} from "./components/Main/Main.jsx";
import {Target} from "./components/Target/Target.jsx";
import {About} from "./components/About/About.jsx";
import {Contact} from "./components/Contact/Contact.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header/>
            <div className="sections__container">
                <Main/>
                <Target/>
                <About/>
                <Contact/>
            </div>

        </>
    )
}

export default App

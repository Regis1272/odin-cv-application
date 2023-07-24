import { useState } from 'react'
import '../styles/App.css'
import ContactInfo from './ContactInfo.jsx'
import Experience from './Experience.jsx'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <form>
                <ContactInfo />
                <Experience />
            </form>
        </>
    )
}

export default App

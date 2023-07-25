import { useState } from 'react'
import '../styles/App.css'
import ContactInfo from './ContactInfo.jsx'
import Education from './Education.jsx'
import JobExperience from './JobExperience.jsx'
import CV from './CV.jsx'

function App() {
    const [text, setText] = useState(null);

    const handleCV = (newState) => {
        setText(newState);
    }

    return (
        <div id='container'>
            <form>
                <ContactInfo />
                <Education />
                <JobExperience />
            </form>
        
            <div>
                <CV />
            </div>
        </div>
    )
}

export default App

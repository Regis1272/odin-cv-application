import { useState } from 'react'
import '../styles/App.css'
import ContactInfo from './ContactInfo.jsx'
import { Education, CV_Education } from './Education.jsx'
import { JobExperience, CV_JobExp } from './JobExperience.jsx'
import CV from './CV.jsx'

function App() {
    
    // STATE Variables

    // Uh oh... now that I've added the ability to create additional education
    // components, it turns out they ALL share the same state when adding more than 1.
    // FIX: turn the initial use state into an array of these 'field objects'.
    //      Pair each field object with its corresponding component using the indices
    //      in both the fields and inputComps arrays

    const blankFields = {
        fullName: '',
        email: '',
        phone: '',
        socialMedia: '',

        school: '',
        titleOfStudy: '',
        dateOfStudy: '',

        company: '',
        position: '',
        dateEmployed: '',
        dateLeft: '',
        description: ''
    }

    const [fields, setFields] = useState([blankFields]);

    const handleCV = (index, event) => {
        const fieldArray = [...fields];
        fieldArray[index][event.target.name] = event.target.value;
        setFields(fieldArray);
    }
     
    const [components, setComponents] = useState([]);

    const handleAdd1 = (event) => {
        event.preventDefault();
        setComponents(prevComponents => [...prevComponents, {type: 'edu'}] );
        setFields(prevFields => [...prevFields, {...blankFields}]);
    }

    const handleAdd2 = (event) => {
        event.preventDefault();
        setComponents(prevComponents => [...prevComponents, {type: 'job'}] );
        setFields(prevFields => [...prevFields, {...blankFields}]);
    }
    
    const handleDel = (index, event) => {
        event.preventDefault();
        setComponents(prevComponents => prevComponents.filter((component, i) => i !== index));
        setFields(prevFields => prevFields.filter((field, i) => i !== index));

    }

    return (
        <div id='container'>
            <form>
                <ContactInfo fields={fields[0]} handler={handleCV}/>
                <div id='eduInput'>
                    {components.map((comp, index) => {
                        if (comp.type == 'edu') {
                            return (
                                <Education
                                    key={index}
                                    fields={fields[index + 1]}
                                    handler={(event) => handleCV(index + 1, event)}
                                    delHandler={(event) => handleDel(index, event)}     
                                />
                            )
                        }
                    })}

                    <button onClick={handleAdd1}>Add Education</button>
                </div>

                <div id='jobInput'>
                    {components.map((comp, index) => {
                        if (comp.type == 'job') {
                            return (
                                <JobExperience
                                    key={index}
                                    fields={fields[index + 1]}
                                    handler={(event) => handleCV(index + 1, event)}
                                    delHandler={(event) => handleDel(index, event)}     
                                />
                            )
                        }
                    })}

                    <button onClick={handleAdd2}>Add Job Experience</button>
                </div>
                
                
            </form>

            <div>
                <div id='eduCV'>
                    {components.map((comp, index) => {
                        if (comp.type == 'edu') {
                            return (
                                <CV_Education
                                    key={index}
                                    fields={fields[index + 1]}
                                />
                            )
                        }
                    })}
                </div>

                <div id='jobCV'>
                    {components.map((comp, index) => {
                        if (comp.type == 'job') {
                            return (
                                <CV_JobExp
                                    key={index}
                                    fields={fields[index + 1]}
                                />
                            )
                        }
                    })}
                </div>

            </div>
        </div>
    )
}

export default App

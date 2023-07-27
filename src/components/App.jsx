import { useState } from 'react'
// import '../styles/App.css'
import '../styles/tailwind.css'
import '../styles/fonts.css'
import { ContactInfo, CV_ContactInfo } from './ContactInfo.jsx'
import { Education, CV_Education } from './Education.jsx'
import { JobExperience, CV_JobExp } from './JobExperience.jsx'
import { testObjects, testFields } from './testUser.jsx'
import CV from './CV.jsx'

const sysFontStack = 'REM, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif'

const rosePine = {
    base: '#191724',
    surface: '#1f1d2e',
    overlay: '#26233a',
    muted: '#6e6a86',
    subtle: '#908caa',
    text: '#e0def4',
    love: '#eb6f92',
    gold: '#f6c177',
    rose: '#ebbcba',
    pine: '#31748f',
    foam: '#9ccfd8',
    iris: '#c4a7e7',
    highlightLow: '#21202e',
    highlightMed: '#403d52',
    highlightHigh: '#524f67',
}

const cvStyles = {
    container: {
        fontFamily: sysFontStack,
        color: rosePine.text,
        backgroundColor: rosePine.highlightLow,

        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        gap: '20px',

        width: '100vw',
        height: '100vh',
        padding: '30px',
    },

    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        width: '130px',
        height: '75px',

        border: '2px solid ' + rosePine.love,
        borderRadius: '5px',
        padding: '3px',
        marginBottom: '5px',
    },
    
    generateBtn: {
        backgroundColor: rosePine.foam,
        color: rosePine.base,
        fontWeight: '900',
        border: '2px solid ' + rosePine.pine,

        width: '130px',
        height: '75px',
    },

    CV_Form: {
        display: 'flex',
        flexDirection: 'column',

        backgroundColor: rosePine.base,

        border: '3px solid ' + rosePine.highlightHigh,
        borderRadius: '10px',
        fontSize: '12px',
        overflow: 'scroll',
        minWidth: '300px',
        padding: '20px',
    },

    input_form: {
        display: 'flex',
        flexDirection: 'column',

        backgroundColor: rosePine.surface,
        boxShadow: '0px 0px 20px rgba(196, 167, 231, 0.25), 0px 20px 40px rgba(0, 0, 0, 0.25)',

        border: '1px solid ' + rosePine.highlightHigh,
        borderRadius: '10px',
        padding: '5px',
        marginTop: '5px',
        marginBottom: '5px',
    },

    fieldset: {
        display: 'flex',
        flexDirection: 'column',
    },

    rm_button: {
        backgroundColor: rosePine.overlay,
        color: rosePine.love,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        padding: '0',
        margin: '5px',
        height: '15px',
        fontSize: '.75rem',
        alignText: 'center',
    },

    add_button: {
        backgroundColor: rosePine.overlay,
        color: rosePine.gold,
        border: '1px solid ' + rosePine.gold,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        padding: '0',
        height: '25px',
        fontSize: '.75rem',
        alignText: 'center',

    },

    labels: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        
        color: rosePine.rose,
        fontWeight: '500',

        marginTop: '5px',
    },

    input_cell: {
        display: 'flex',
        flexDirection: 'column',

        backgroundColor: rosePine.surface,
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.15), 0px 0px 15px rgba(0, 0, 0, 0.25)',

        border: '1px solid ' + rosePine.highlightHigh,
        borderRadius: '10px',
        padding: '5px',
        marginTop: '5px',
        marginBottom: '5px',
        
    },

    user_inputs: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        backgroundColor: rosePine.overlay,
        borderRadius: '5px',
        width: '100%',
    },

    description_box: {
        width: '90%'
    },

    CV: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',

        minWidth: '600px',
        maxWidth: '600px',

        backgroundColor: rosePine.base,
        border: '3px solid ' + rosePine.highlightHigh,
        borderRadius: '10px',
        overflowY: 'scroll',
        overflowX: 'wrap',
        padding: '20px',
    },

    CV_Contact: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        paddingLeft: '20px',
        paddingRight: '20px',
        width: '100%',
    },

    CV_ContactName: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '1.6rem',
        fontWeight: 'bold',

        color: rosePine.gold,
    },

    CV_ContactInfo: {
        display: 'flex',
        alignItems: 'spaced-evenly',
        gap: '10px',

        fontSize: '.8rem',
        
        color: rosePine.pine,
    },

    CV_Titles: {
        display: 'flex',
        alignItems: 'center',
        color: rosePine.subtle,
        fontWeight: '500',
        fontSize: '1.3rem',
    },

    CV_Experience: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'left',
        
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',

        fontSize: '.75rem',
    },

    CV_ExpBlock: {
        border: '2px solid ' + rosePine.highlightHigh,
        borderRadius: '5px',

        width: '100%',

        padding: '5px',
        margin: '0 10px 10px 0px',
        overflow: 'wrap',

        overflowWrap: 'break-word',
    },

    CV_Inst: {
        color: rosePine.text,

        fontWeight: 'bold',
        fontSize: '.9rem',
    },

    CV_Title: {
        color: rosePine.foam,

        fontWeight: '600',
        fontSize: '.8rem',

    },

    CV_Date: {
        color: rosePine.rose,

        fontWeight: '200',
        fontSize: '.75rem',

    },

    picture: {

    },
}

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

    // unique fields for each input component
    const [fields, setFields] = useState([blankFields]);

    // array of objects representing each component
    const [components, setComponents] = useState([{ type: 'contacts' }]);

    const handleCV = (index, event) => {
        const fieldArray = [...fields];
        fieldArray[index][event.target.name] = event.target.value;
        setFields(fieldArray);
    }

    const handleAdd1 = (event) => {
        event.preventDefault();
        setComponents(prevComponents => [...prevComponents, { type: 'edu' }]);
        setFields(prevFields => [...prevFields, { ...blankFields }]);
    }

    const handleAdd2 = (event) => {
        event.preventDefault();
        setComponents(prevComponents => [...prevComponents, { type: 'job' }]);
        setFields(prevFields => [...prevFields, { ...blankFields }]);
    }

    const handleDel = (index, event) => {
        event.preventDefault();
        setComponents(prevComponents => prevComponents.filter((component, i) => i !== index));
        setFields(prevFields => prevFields.filter((field, i) => i !== index));

    }

    // Test function for data imported from testUser.jsx
    const generateCV = (event) => {
        event.preventDefault();
        setComponents(testObjects);
        setFields(testFields);
    }

    return (
        <div id='container' style={cvStyles.container}>

            <div>
                <div id='header' style={cvStyles.header}>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

                    <p style={{color: rosePine.rose, fontSize: '.75rem'}}> Regis1272 ©</p>

                    <a href="https://github.com/Regis1272/">
                    <span class="fab fa-github" style={{color: rosePine.love}}></span>
                    </a>

                    <p style={{color: rosePine.rose, fontSize: '.55rem'}}>Color Palette: <a href="https://rosepinetheme.com/">Rosé Pine</a></p>
                    <p style={{color: rosePine.rose, fontSize: '.55rem'}}>Font: <a href="https://fonts.google.com/specimen/REM">REM</a></p>
                
                </div>

                <button onClick={generateCV} style={cvStyles.generateBtn}>
                    Generate CV
                </button>

            </div>

            <form id='CV_Form' style={cvStyles.CV_Form}>

                <h2>Personal Info</h2>
                <div id='contactInput'>
                    <ContactInfo
                        styles={cvStyles}
                        key='-1'
                        fields={fields[0]}
                        handler={(event) => handleCV(0, event)} />
                </div>

                <h2>Education</h2>

                <div id='eduInput' style={cvStyles.input_form}>
                    {components.map((comp, index) => {
                        if (comp.type == 'edu') {
                            return (
                                <Education
                                    styles={cvStyles}
                                    key={index}
                                    fields={fields[index]}
                                    handler={(event) => handleCV(index, event)}
                                    delHandler={(event) => handleDel(index, event)}
                                />
                            )
                        }
                    })}

                    <button onClick={handleAdd1} style={cvStyles.add_button}>Add Education</button>
                </div>

                <h2>Job Experience</h2>


                <div id='jobInput' style={cvStyles.input_form}>
                    {components.map((comp, index) => {
                        if (comp.type == 'job') {
                            return (
                                <JobExperience
                                    styles={cvStyles}
                                    key={index}
                                    fields={fields[index]}
                                    handler={(event) => handleCV(index, event)}
                                    delHandler={(event) => handleDel(index, event)}
                                />
                            )
                        }
                    })}

                    <button onClick={handleAdd2} style={cvStyles.add_button}>Add Job Experience</button>
                </div>


            </form>


            <div id='CV' style={cvStyles.CV}>

                <div id='contactCV' style={cvStyles.CV_Contact}>
                    <CV_ContactInfo
                        styles={cvStyles}
                        key='-1'
                        fields={fields[0]}
                    />
                </div>

                <div id='eduCV' style={cvStyles.CV_Experience}>
                    <div style={cvStyles.CV_Titles}>Education</div>
                    {components.map((comp, index) => {
                        if (comp.type == 'edu') {
                            return (
                                <CV_Education
                                    styles={cvStyles}
                                    key={index}
                                    fields={fields[index]}
                                />
                            )
                        }
                    })}
                </div>

                <div id='jobCV' style={cvStyles.CV_Experience}>
                    <div style={cvStyles.CV_Titles}>Job Experience</div>
                    {components.map((comp, index) => {
                        if (comp.type == 'job') {
                            return (
                                <CV_JobExp
                                    styles={cvStyles}
                                    key={index}
                                    fields={fields[index]}
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

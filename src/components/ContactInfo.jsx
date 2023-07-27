// contact info will make up the name, email, and phone number components...
import LabeledInput from './LabeledInput.jsx'

const ContactInfo = (props) => {
    const standardStyles = {
        border: '1px solid black',
    }

    const contactStyles = {
        width: '300px',
        height: '200px',
        border: '1px solid black',
        display: 'flex'
    }   

    const nameStyles = {
        width: '100px',
        height: '50px'
    }

    return (
        <div style={props.styles.input_form}>
            <fieldset style={props.styles.fieldset}>

                <LabeledInput
                    styles={props.styles}
                    text='Full Name'
                    id='fullName'
                    type='text'
                    placeholder='John Smith'
                    value={props.fields.fullName}
                    handler={props.handler}
                />

                <LabeledInput
                    styles={props.styles}
                    text='email'
                    id='email'
                    type='email'
                    placeholder='example@placeholder.com'
                    value={props.fields.email}
                    handler={props.handler}
                />
        
                <LabeledInput
                    styles={props.styles}
                    text='Phone Number'
                    id='phone'
                    type='tel'
                    placeholder='555-555-5555'
                    value={props.fields.phone}
                    handler={props.handler}
                />
        
                <LabeledInput
                    styles={props.styles}
                    text='Social Media'
                    id='socialMedia'
                    type='text'
                    placeholder='linkedin.com/helloThere'
                    value={props.fields.socialMedia}
                    handler={props.handler}
                />
            </fieldset>
        </div>
    )
}

const CV_ContactInfo = (props) => {

    return (
        
            <div style={props.styles.CV_ContactName}>
                <div>{props.fields.fullName}</div>

                <div style={props.styles.CV_ContactInfo}>
                    <div>{props.fields.phone}</div>
                    <div>{props.fields.email}</div>
                    <div>{props.fields.socialMedia}</div>
                </div>

            </div>
    )
}

export { ContactInfo, CV_ContactInfo };

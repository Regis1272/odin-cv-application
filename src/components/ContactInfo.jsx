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
        <>
            <fieldset style={standardStyles}>
                <legend>Contact Details</legend>

                <LabeledInput
                    text='Name'
                    id='fullName'
                    type='text'
                    placeholder='John Smith'
                    value={props.fields.fullName}
                    handler={props.handler}
                />

                <LabeledInput
                    text='email'
                    id='email'
                    type='email'
                    placeholder='example@placeholder.com'
                    value={props.fields.email}
                    handler={props.handler}
                />
        
                <LabeledInput
                    text='Phone Number'
                    id='phone'
                    type='tel'
                    placeholder='555-555-5555'
                    value={props.fields.phone}
                    handler={props.handler}
                />
        
                <LabeledInput
                    text='Social Media'
                    id='socialMedia'
                    type='text'
                    placeholder='linked.com/helloThere'
                    value={props.fields.socialMedia}
                    handler={props.handler}
                />
            </fieldset>
        </>
    )
}

export default ContactInfo

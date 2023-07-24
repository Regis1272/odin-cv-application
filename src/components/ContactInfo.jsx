// name... email... phone number...
// education...
// past experience...

// contact info will make up the name, email, and phone number components...

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
                <NameForm style={nameStyles}/>
                <EmailForm style={standardStyles}/>
                <PhoneNumForm style={standardStyles}/>
                <SocialMediaForm style={standardStyles}/>
            </fieldset>
        </>
    )
}

const NameForm = (props) => {
    return (
        <input style={props.style} type="text" placeholder="name" />
    )
}

const EmailForm = (props) => {
    return (
        <input style={props.style} type="email" placeholder="email" />
    )
}

const PhoneNumForm = (props) => {
    return (
        <input style={props.style} type="tel" placeholder="phone number" />
    )
}

const SocialMediaForm = (props) => {
    return (
        <input style={props.style} type="url" placeholder="linkedin"/>
    )
}

export default ContactInfo

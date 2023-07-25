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
                <LabeledInput type='text' id='name' text='Name' placeholder='John Smith'/>
                <LabeledInput type='email' id='email' text='email' placeholder='example@placeholder.com'/>
                <LabeledInput type='tel' id='phone' text='Phone #' placeholder='555-555-5555'/>
                <LabeledInput type='url' id='socialMedia' text='Social Media' placeholder='linkedin.com/helloThere'/>
            </fieldset>
        </>
    )
}

// const NameForm = (props) => {
//     return (
//         <input style={props.style} type="text" placeholder="name" />
//     )
// }
//
// const EmailForm = (props) => {
//     return (
//         <input style={props.style} type="email" placeholder="email" />
//     )
// }
//
// const PhoneNumForm = (props) => {
//     return (
//         <input style={props.style} id="phone" type="tel" placeholder="phone number" />
//     )
// }
//
// const SocialMediaForm = (props) => {
//     return (
//         <input style={props.style} type="url" placeholder="linkedin"/>
//     )
// }

export default ContactInfo

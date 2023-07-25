import LabeledInput from "./LabeledInput"

const Education = ({text}) => {
    
    return (
        <fieldset>
            <legend>{text}</legend>
            <LabeledInput text='School'/>
            <LabeledInput text='Title of Study'/>
            <LabeledInput text='Date of Study'/>
        </fieldset>
    )
}

Education.defaultProps = {
    text: 'Education'
}

export default Education

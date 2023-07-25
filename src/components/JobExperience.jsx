import LabeledInput from "./LabeledInput"

const JobExperience = ({text}) => {
    
    return (
        <fieldset>
            <legend>{text}</legend>
            <LabeledInput text='Company'/>
            <LabeledInput text='Position'/>
            <LabeledInput text='Date Started'/>
            <LabeledInput text='Date Ended'/>
            <LabeledInput text='Description'/>
        </fieldset>
    )
}

JobExperience.defaultProps = {
    text: 'Job Experience'
}

export default JobExperience

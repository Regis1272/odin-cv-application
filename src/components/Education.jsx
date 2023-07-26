import LabeledInput from "./LabeledInput"

const Education = (props) => {
    
    return (
        <div>
            <fieldset>
                <legend>{props.text}</legend>

                    <LabeledInput
                        text='School'
                        id='school'
                        type='text'
                        placeholder=''
                        value={props.fields.school}
                        handler={props.handler}
                    />

                    <LabeledInput
                        text='Title of Study'
                        id='titleOfStudy'
                        type='text'
                        placeholder=''
                        value={props.fields.titleOfStudy}
                        handler={props.handler}
                    />
            
                    <LabeledInput
                        text='Date of Study'
                        id='dateOfStudy'
                        type='date'
                        placeholder=''
                        value={props.fields.dateOfStudy}
                        handler={props.handler}
                    />

            </fieldset>
            <button onClick={props.delHandler}>Remove</button>
        </div>
    )
}

// Shared-state component for rendering the input to the resume itself
const CV_Education = (props) => {

    return (
        <div>
            <div>{props.fields.school}</div>
            <div>{props.fields.titleOfStudy}</div>
            <div>{props.fields.dateOfStudy}</div>
        </div>
    )
}


Education.defaultProps = {
    text: 'Education'
}

export { Education, CV_Education };

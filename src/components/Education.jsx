import LabeledInput from "./LabeledInput"

const Education = (props) => {
    
    return (
        <div style={props.styles.input_cell}>
            <fieldset style={props.styles.fieldset}>
                    <LabeledInput
                        styles={props.styles}
                        text='Institution'
                        id='school'
                        type='text'
                        placeholder=''
                        value={props.fields.school}
                        handler={props.handler}
                    />

                    <LabeledInput
                        styles={props.styles}
                        text='Title of Study'
                        id='titleOfStudy'
                        type='text'
                        placeholder=''
                        value={props.fields.titleOfStudy}
                        handler={props.handler}
                    />
            
                    <LabeledInput
                        styles={props.styles}
                        text='Date of Study'
                        id='dateOfStudy'
                        type='date'
                        placeholder=''
                        value={props.fields.dateOfStudy}
                        handler={props.handler}
                    />

            </fieldset>
            <button onClick={props.delHandler} style={props.styles.rm_button}>Remove</button>
        </div>
    )
}

// Shared-state component for rendering the input to the resume itself
const CV_Education = (props) => {

    return (
        <div style={props.styles.CV_ExpBlock}>
            <div style={props.styles.CV_Inst}>{props.fields.school}</div>
            <div style={props.styles.CV_Title}>{props.fields.titleOfStudy}</div>
            <div style={props.styles.CV_Date}>{props.fields.dateOfStudy}</div>
        </div>
    )
}


Education.defaultProps = {
    text: 'Education'
}

export { Education, CV_Education };

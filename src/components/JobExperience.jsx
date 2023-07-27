import LabeledInput from "./LabeledInput"

const JobExperience = (props) => {
    
    return (
        <div style={props.styles.input_cell}>
            <fieldset style={props.styles.fieldset}>

                    <LabeledInput
                        styles={props.styles}
                        text='Company'
                        id='company'
                        type='text'
                        placeholder='Netflix'
                        value={props.fields.company}
                        handler={props.handler}
                    />

                    <LabeledInput
                        styles={props.styles}
                        text='Position'
                        id='position'
                        type='text'
                        placeholder='Web Developer'
                        value={props.fields.position}
                        handler={props.handler}
                    />

                    <div style={{display: 'flex', justifyContent: 'spaced-evenly', gap: '5px', width: '100%'}}>
                        <LabeledInput
                            styles={props.styles}
                            text='Date Employed'
                            id='dateEmployed'
                            type='date'
                            placeholder=''
                            value={props.fields.dateEmployed}
                            handler={props.handler}
                        />

                        <LabeledInput
                            styles={props.styles}
                            text='Date Left'
                            id='dateLeft'
                            type='date'
                            placeholder=''
                            value={props.fields.dateLeft}
                            handler={props.handler}
                        />
                    </div>

                    <LabeledInput
                        styles={props.styles}
                        text='Description'
                        id='description'
                        type='textarea'
                        placeholder='Many things...'
                        value={props.fields.description}
                        handler={props.handler}
                    />
            </fieldset>
            <button onClick={props.delHandler} style={props.styles.rm_button}>Remove</button>
        </div>
    )
}

// Shared-state component for rendering the input to the resume itself
const CV_JobExp = (props) => {

    return (
        <div style={props.styles.CV_ExpBlock}>
            <div style={props.styles.CV_Inst}>{props.fields.company}</div>
            <div style={props.styles.CV_Title}>{props.fields.position}</div>
            <div>
                <span style={props.styles.CV_Date}>{props.fields.dateEmployed}</span>
                {(props.fields.dateEmployed != '') && <span> to </span>}
                <span style={props.styles.CV_Date}>{props.fields.dateLeft}</span>
            </div>
            <p style={{padding: '5px 20px 0 20px'}}>{props.fields.description}</p>
        </div>
    )
}

JobExperience.defaultProps = {
    text: 'Job Experience'
}

export { JobExperience, CV_JobExp };

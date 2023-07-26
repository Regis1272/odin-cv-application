import LabeledInput from "./LabeledInput"

const JobExperience = (props) => {
    
    return (
        <div>
            <fieldset>
                <legend>{props.text}</legend>

                    <LabeledInput
                        text='Company'
                        id='company'
                        type='text'
                        placeholder='Netflix'
                        value={props.fields.company}
                        handler={props.handler}
                    />

                    <LabeledInput
                        text='Position'
                        id='position'
                        type='text'
                        placeholder='Web Developer'
                        value={props.fields.position}
                        handler={props.handler}
                    />


                    <LabeledInput
                        text='Date Employed'
                        id='dateEmployed'
                        type='date'
                        placeholder=''
                        value={props.fields.dateEmployed}
                        handler={props.handler}
                    />

                    <LabeledInput
                        text='Date Left'
                        id='dateLeft'
                        type='date'
                        placeholder=''
                        value={props.fields.dateLeft}
                        handler={props.handler}
                    />

                    <LabeledInput
                        text='Description'
                        id='description'
                        type='text'
                        placeholder='Many things...'
                        value={props.fields.description}
                        handler={props.handler}
                    />
            </fieldset>
            <button onClick={props.delHandler}>Remove</button>
        </div>
    )
}

// Shared-state component for rendering the input to the resume itself
const CV_JobExp = (props) => {

    return (
        <div>
            <div>{props.fields.company}</div>
            <div>{props.fields.position}</div>
            <div>{props.fields.dateEmployed}</div>
            <div>{props.fields.dateLeft}</div>
            <div>{props.fields.description}</div>
        </div>
    )
}

JobExperience.defaultProps = {
    text: 'Job Experience'
}

export { JobExperience, CV_JobExp };

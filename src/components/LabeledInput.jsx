// at bare minimum takes these as props to get desired input forms:
// - type (input type)
// - text (for label)
// - id (for matching label + input)
// - placeholder (or this could just be left blank)

const LabeledInput = (props) => {

    const defaultStyles = {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        gap: '5px'
    }


    return (
            <>
                <label style={props.style || defaultStyles} htmlFor={props.id}>{props.text}</label>

                <input
                    style={props.style || defaultStyles}
                    type={props.type}
                    id={props.id}
                    name={props.id}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.handler}
                />
            </>
    )
}

LabeledInput.defaultProps = {
    type: 'text',
    text: 'Default Text Input',
    placeholder: '',
}

export default LabeledInput

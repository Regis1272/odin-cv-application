import { useState } from 'react'


const CV = (props) => {

    const [isVisible, setIsVisible] = useState(false)


    return (
        <div style={{
            backgroundColor: 'black',
            width: '800px',
            height: '800px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        }}>

            <div>
                <div>{props.fields.fullName}</div>
                <div>{props.fields.email}</div>
                <div>{props.fields.phone}</div>
                <div>{props.fields.socialMedia}</div>
            </div>
            
            <div>
                <div>{props.fields.school}</div>
                <div>{props.fields.titleOfStudy}</div>
                <div>{props.fields.dateOfStudy}</div>
            </div>
        
            <div>
                <div>{props.fields.company}</div>
                <div>{props.fields.position}</div>
                <div>{props.fields.dateEmployed}</div>
                <div>{props.fields.dateLeft}</div>
                <div>{props.fields.description}</div>
            </div>

        </div>
    )
}

export default CV

import { useState } from 'react'


const CV = (props) => {

    const [isVisible, setIsVisible] = useState(false)


    return (
        <div>
            <CV_Contact />
            <CV_Body />
        </div>
    )
}

const CV_Contact = (props) => {
    
    return (
        <div>
            
        </div>
    )
}

const CV_Body = (props) => {
    
}

export default CV

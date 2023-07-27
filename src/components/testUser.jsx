
const blankFields = {
    fullName: '',
    email: '',
    phone: '',
    socialMedia: '',

    school: '',
    titleOfStudy: '',
    dateOfStudy: '',

    company: '',
    position: '',
    dateEmployed: '',
    dateLeft: '',
    description: ''
}

const testObjects = [
        { type: 'contacts'},
        { type: 'edu'},
        { type: 'job'},
        { type: 'job'}
]

const testFields = [
    // An array of objects that match the shape of the above data.
    // This will be used to test App.jsx and its children.
    // The first object at index 0  will test ContactInfo.jsx
    // The rest of the objects will test either Education.jsx or Experience.jsx

    // Write code matching the above comments 
    {
        ...blankFields,
        fullName: 'John Doe',
        email: 'example@example.com',
        phone: '123-456-7890',
        socialMedia: 'linkedin.com/in/johndoe',
        tagline: 'Passionate and dedicated Web Developer with a strong foundational understanding of front-end and back-end technologies. Despite being early in my professional journey, I bring a commitment to continuous learning, problem-solving, and the drive to create intuitive user experiences. Eager to leverage my technical skills and innovative thinking in a collaborative environment to contribute to meaningful projects and further grow as a developer.'
    },
    {
        ...blankFields,
        school: 'University of California, Los Angeles',
        titleOfStudy: 'Bachelor of Science in Computer Science',
        dateOfStudy: '2018-06-01',
    },
    {
        ...blankFields,
        company: 'Google',
        position: 'Software Engineer Intern',
        dateEmployed: '2020-06-01',
        dateLeft: '2020-09-01',
        description: "During my internship on the Google Search team, I was exposed to a challenging and rewarding environment where I contributed to the development and improvement of the world's most widely used search engine. I collaborated with a talented team of engineers on enhancing search algorithms, refining query understandings, and ensuring user-centric design. The exposure to Google's culture of innovation and continuous learning has been instrumental in shaping my professional development."
    },
    {
        ...blankFields,
        company: 'Facebook',
        position: 'Software Engineer Intern',
        dateEmployed: '2020-10-10',
        dateLeft: '2021-02-01',
        //  a long description
        description: 'As an Intern at Facebook, I had the opportunity to immerse myself in a fast-paced, innovative tech environment. My role primarily involved software development for enhancing user experiences and crafting scalable solutions for Facebook applications. This provided me with hands-on experience in coding, debugging, and deploying software, while refining my problem-solving abilities.'

    }
]

export { testObjects, testFields };

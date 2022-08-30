import React from 'react'
import { useState } from 'react'
import Profile from './Profile'
import Education from './Education'
import Projects from './Projects'
import Work from './Work'
import Extracurriculars from './Extracurriculars'
import SkillsInterests from './SkillsInterests'
import Confirm from './Confirm'
import axios from 'axios'
import { saveAs } from 'file-saver'


const Resume = () => {
    //const formTitles = ['Profile', 'Education', 'Projects', 'Work Experience', 'Extracurriculars', 'Skills and Interests']
    const [state, setState] = useState({
        step: 0,
        firstName: 'Adesemi',
        lastName: 'Elumaro',
        email: 'adesemie@gmail.com',
        phoneNumber: '+234 916 545 0375',
        address: '1 Deji Odunuga Street, Anthony, Lagos, Nigeria',
        personalWebsite: 'withlovedese.github.io',
        universityName: 'Duke University, Durham, NC',
        major: 'B.S. in Computer Science',
        minor: 'Economics and Theater Studies',
        uniGPA: '3.5',
        uniStartMonth: 'Aug',
        uniStartYear: '2018',
        uniEndMonth: 'Dec',
        uniEndYear: '2023',
        relCoursework: 'Introduction to Computer Science, Data Structures and Algorithms, Discrete Mathematics for Computer Science, Intro to Computer Systems, Everything Data, Intermediate Microeconomics I, Economic Principles, Laboratory Calculus I & II, Practical Financial Markets, Intro to Mobile App Development, Probability/Statistical Inference',
        highschoolName: 'Louisville Girls High School, Ijebu-Itele, Ogun, Nigeria',
        highGPA: '3.8',
        highStartMonth: 'Sep',
        highStartYear: '2012',
        highEndMonth: 'Jun',
        highEndYear: '2018',
        SAT: '1560 (EBRW:770, Math:790)',
        relAwards: 'Valedictorian, Overall Best in Sciences award',
        projectName1: 'Google Software Product Sprint', 
        techUsed1: 'Javascript, CSS, HTML', 
        projStartMonth1: 'May', 
        projStartYear1: '2020', 
        projEndMonth1: 'Aug', 
        projEndYear1: '2020', 
        projDescription1: 'Was invited to collaborate with a team of peers to design and implement a web application using Java, JavaScript, HTML and CSS over the course of 10 weeks, leveraging various Google Cloud Platform APIs, including App Engine and Datastore.',
        projectName2: 'Black Shops Matter', 
        techUsed2: 'Javascript, CSS, HTML', 
        projStartMonth2: 'Aug', 
        projStartYear2: '2020', 
        projEndMonth2: '', 
        projEndYear2: '', 
        projDescription2: 'Collaborated with a team of peers to build a prototype chrome extension for Amazon that finds alternative black-produced products where buyers can check the extension for links to those products.',
        projectName3: 'Fyyur ', 
        techUsed3: 'Python, Flask, Javascript, HTML, CSS, PostgresSQL', 
        projStartMonth3: 'Oct', 
        projStartYear3: '2021', 
        projEndMonth3: '', 
        projEndYear3: '', 
        projDescription3: 'Created a CRUD application called Fyurr (a musical venue and artist booking website that facilitates the discovery and bookings of shows between local performing artists and venues) using SQLAlchemy ORM, Postgre SQL as database, and Flask-Migrate for creating and running schema migrations.',
        projectName4: 'Pokemon Style Game', 
        techUsed4: 'Javascript, HTML, CSS', 
        projStartMonth4: 'Aug', 
        projStartYear4: '2022', 
        projEndMonth4: '', 
        projEndYear4: '', 
        projDescription4: 'Familiarized myself with javascript by creating a top-down style game using HTML, Javascript, CSS, with Howler and GSAP javascript libraries.',
        position1: 'Frontend Developer (BlueTech)', 
        institutionName1: 'Campus Enterprises LLC, Durham, NC', 
        posStartMonth1: 'Jan', 
        posStartYear1: '2021', 
        posEndMonth1: 'Mar', 
        posEndYear1: '2021', 
        posDescription1: 'Work closely with a team of developers to create web applications and websites for local small businesses and upcoming startups.',
        position2: 'Financial Empowerment Specialist Intern', 
        institutionName2: 'Community Empowerment Fund, Durham, NC', 
        posStartMonth2: 'May', 
        posStartYear2: '2019', 
        posEndMonth2: 'Aug', 
        posEndYear2: '2019', 
        posDescription2: 'Created website functionality using HTML and CSS for a mini course on how to start a successful business with low credit.',
        activity1: 'Member', 
        actInstitutionName1: 'Duke Technology Scholars - Duke University, Durham, NC', 
        actStartMonth1: 'Oct', 
        actStartYear1: '2019', 
        actEndMonth1: 'Present', 
        actEndYear1: '', 
        actDescription1: 'Selected to participate in a leadership development program for high-potential women pursuing technical careers. Engaged in skill development, networking, and mentoring activities',
        activity2: 'Dancer', 
        actInstitutionName2: 'Duke NakisaiAde African Dance Ensemble ', 
        actStartMonth2: 'Aug', 
        actStartYear2: '2019', 
        actEndMonth2: 'May', 
        actEndYear2: '2021', 
        actDescription2: 'Perform various West African dance routines for different showcases held during the school year',
        skills: 'Python, Java, JavaScript, CSS, HTML, C, PostgresSQL, Pandas, NumPy, Pandas, Flask, Figma, React, Bloomberg Core Concepts Certification', 
        languages: 'English (Fluent), French (Conversational), Japanese (Conversational)', 
        interests: 'Greek/Egyptian Mythology, Social Entrepreneurship in Nigeria, YouTube, Gaming (MMORPGS & JRPGS)'
    })

    const { step } = state
    const { firstName, lastName, email, phoneNumber, address, personalWebsite, 
        universityName, uniStartMonth, uniStartYear, uniEndMonth, uniEndYear, major, minor, uniGPA, relCoursework, highschoolName, highGPA, highStartMonth, highStartYear, highEndMonth, highEndYear, SAT, relAwards, 
        projectName1, techUsed1, projStartMonth1, projStartYear1, projEndMonth1, projEndYear1, projDescription1,
        projectName2, techUsed2, projStartMonth2, projStartYear2, projEndMonth2, projEndYear2, projDescription2,
        projectName3, techUsed3, projStartMonth3, projStartYear3, projEndMonth3, projEndYear3, projDescription3,
        projectName4, techUsed4, projStartMonth4, projStartYear4, projEndMonth4, projEndYear4, projDescription4,
        position1, institutionName1, posStartMonth1, posStartYear1, posEndMonth1, posEndYear1, posDescription1,
        position2, institutionName2, posStartMonth2, posStartYear2, posEndMonth2, posEndYear2, posDescription2,
        activity1, actInstitutionName1, actStartMonth1, actStartYear1, actEndMonth1, actEndYear1, actDescription1,
        activity2, actInstitutionName2, actStartMonth2, actStartYear2, actEndMonth2, actEndYear2, actDescription2,
        skills, languages, interests
    } = state;
    const  values = { firstName, lastName, email, phoneNumber, address, personalWebsite, 
        universityName, uniStartMonth, uniStartYear, uniEndMonth, uniEndYear, major, minor, uniGPA, relCoursework, highschoolName, highGPA, highStartMonth, highStartYear, highEndMonth, highEndYear, SAT, relAwards, 
        projectName1, techUsed1, projStartMonth1, projStartYear1, projEndMonth1, projEndYear1, projDescription1,
        projectName2, techUsed2, projStartMonth2, projStartYear2, projEndMonth2, projEndYear2, projDescription2,
        projectName3, techUsed3, projStartMonth3, projStartYear3, projEndMonth3, projEndYear3, projDescription3,
        projectName4, techUsed4, projStartMonth4, projStartYear4, projEndMonth4, projEndYear4, projDescription4,
        position1, institutionName1, posStartMonth1, posStartYear1, posEndMonth1, posEndYear1, posDescription1,
        position2, institutionName2, posStartMonth2, posStartYear2, posEndMonth2, posEndYear2, posDescription2,
        activity1, actInstitutionName1, actStartMonth1, actStartYear1, actEndMonth1, actEndYear1, actDescription1,
        activity2, actInstitutionName2, actStartMonth2, actStartYear2, actEndMonth2, actEndYear2, actDescription2,
        skills, languages, interests
    }

    //display specified page
    const displayPage = (num) => {

        switch (num) {
            case 0:
                return <Profile state={state}
                                handleChange={handleChange}
                                nextStep={nextStep}
                        ></Profile>
            case 1:
                return <Education
                            state={state}
                            handleChange={handleChange}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        ></Education>
            case 2:
                return <Projects
                            state={state}
                            handleChange={handleChange}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        ></Projects>

            case 3:
                return <Work
                            state={state}
                            handleChange={handleChange}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        ></Work>
            case 4:
                return <Extracurriculars
                            state={state}
                            handleChange={handleChange}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        ></Extracurriculars>
            case 5:
                return <SkillsInterests
                            state={state}
                            handleChange={handleChange}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        ></SkillsInterests>
            case 6:
                return <Confirm
                            prevStep={prevStep}
                            createAndDownloadPdf={createAndDownloadPdf}
                        ></Confirm>
            default:
                break;
        }
    }

    //create and download pdf
    const createAndDownloadPdf = () =>{
        alert("Please wait a second while your pdf downloads!")
        axios.post('/create-pdf', values)
        .then(() => axios.get('/fetch-pdf', { responseType: 'blob'}))
        .then((res) => {
            const pdfBlob = new Blob( [res.data], { type: 'application/pdf'})

            saveAs(pdfBlob, 'Resume.pdf')
        })
    }

    //proceed to next step
    const nextStep = () => {
        const { step } = state;
        setState({
            ...state,
            step: step + 1
        });
    }

    //proceed to previous step
    const prevStep = () => {
        const { step } = state;
        setState({
            ...state,
            step: step - 1
        });
    }

    //handles a change in input field
    const handleChange = (e) => {
        console.log(e.target.name)
        setState ({
            ...state,
            [e.target.name]: e.target.value
        });
    };

  return (
    <div className='my-28'>
        {displayPage(step)}
    </div>
  )
}

export default Resume
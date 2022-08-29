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
        universityName: 'Duke University',
        major: '',
        minor: '',
        uniGPA: '',
        uniStartMonth: 'Aug',
        uniStartYear: '2018',
        uniEndMonth: 'Dec',
        uniEndYear: '2023',
        relCoursework: 'Please separate courses with commas',
        highschoolName: 'Lousville Girls High School',
        highGPA: '',
        highStartMonth: 'Sep',
        highStartYear: '2012',
        highEndMonth: 'Jun',
        highEndYear: '2018',
        SAT: '',
        relAwards: 'Please separate awards with commas',
        projectName1: '', 
        techUsed1: '', 
        projStartMonth1: '', 
        projStartYear1: '', 
        projEndMonth1: '', 
        projEndYear1: '', 
        projDescription1: '',
        projectName2: '', 
        techUsed2: '', 
        projStartMonth2: '', 
        projStartYear2: '', 
        projEndMonth2: '', 
        projEndYear2: '', 
        projDescription2: '',
        projectName3: '', 
        techUsed3: '', 
        projStartMonth3: '', 
        projStartYear3: '', 
        projEndMonth3: '', 
        projEndYear3: '', 
        projDescription3: '',
        projectName4: '', 
        techUsed4: '', 
        projStartMonth4: '', 
        projStartYear4: '', 
        projEndMonth4: '', 
        projEndYear4: '', 
        projDescription4: '',
        position1: '', 
        institutionName1: '', 
        posStartMonth1: '', 
        posStartYear1: '', 
        posEndMonth1: '', 
        posEndYear1: '', 
        posDescription1: '',
        position2: '', 
        institutionName2: '', 
        posStartMonth2: '', 
        posStartYear2: '', 
        posEndMonth2: '', 
        posEndYear2: '', 
        posDescription2: '',
        activity1: '', 
        actInstitutionName1: '', 
        actStartMonth1: '', 
        actStartYear1: '', 
        actEndMonth1: '', 
        actEndYear1: '', 
        actDescription1: '',
        activity2: '', 
        actInstitutionName2: '', 
        actStartMonth2: '', 
        actStartYear2: '', 
        actEndMonth2: '', 
        actEndYear2: '', 
        actDescription2: '',
        skills: '', 
        languages: '', 
        interests: ''
    })

    const { step } = state
    //const { firstName, lastName, email, phoneNumber, address, personalWebsite } = state;
    //const  values = { firstName, lastName, email, phoneNumber, address, personalWebsite }

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
                            state={state}
                            prevStep={prevStep}
                            submit={submit}
                        ></Confirm>
            default:
                break;
        }
    }

    //submit form
    const submit = () =>{

    }

    //create and download pdf
    const createAndDownloadPdf = () =>{
        axios.post('create/pdf', state)
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
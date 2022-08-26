import React from 'react'
import { useState } from 'react'
import Profile from './Profile'
import Education from './Education'
import Projects from './Projects'
import Work from './Work'


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
        uniStartMonth: 'Aug',
        uniStartYear: '2018',
        uniEndMonth: 'Dec',
        uniEndYear: '2023',
        relCoursework: 'Please separate courses with commas',
        highschoolName: 'Lousville Girls High School',
        highStartMonth: 'Sep',
        highStartYear: '2012',
        highEndMonth: 'Jun',
        highEndYear: '2018',
        relAwards: 'Please separate awards with commas'
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
            default:
                break;
        }
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
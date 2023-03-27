import { useEffect, useState } from 'react'
import { filterHashtag } from '../utilits'
import Counter from './Counter'

const counts = [
  { name: 'Desafios', value: 23 },
  { name: 'Contribuciones ', value: 318 },
  { name: 'Proyecto grande', value: 1 },
  { name: 'Cafés', value: 527 }
]

const skills = [
  { name: 'ReactJS', icon: 'img/svg/react.svg' },
  { name: 'NextJS', icon: 'img/svg/nextjs.svg' },
  { name: 'NodeJS', icon: 'img/svg/javascript.svg' },
  { name: 'TypeScript', icon: 'img/svg/typescript.svg' },
  { name: 'GraphQL', icon: 'img/svg/graphql.svg' },
  { name: 'WordPress', icon: 'img/svg/wordpress.svg' }
]

const experiences = [
  {
    company: 'enzosaso.com',
    designation: 'Freelancer',
    time: '2017 - Present'
  },
  {
    company: 'acordeavos.com',
    designation: 'Frontend Developer',
    time: '2019 - 2023'
  }
]

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1)
  const activeContentTab = value => (activeTab == value ? 'current' : '')

  useEffect(() => {
    filterHashtag()
  }, [activeTab])

  return (
    <>
      <div className='section'>
        <div className='informations'>
          <div className='container'>
            <div className='informations_inner'>
              <div className='left'>
                <div className='main_title'>
                  <h3>
                    <span>Mis areas</span>
                  </h3>
                </div>
                <div className='text'>
                  <p>
                    Como desarrollador frontend, mis áreas de especialización incluyen HTML, CSS, JavaScript y
                    frameworks como React. Tengo experiencia en la creación de interfaces de usuario responsives y
                    accesibles, la optimización del rendimiento del sitio web y la integración con las API. Tengo una
                    sólida comprensión de los principios de diseño web y las mejores prácticas de UX/UI.
                  </p>
                </div>
                <div className='boxed_button'>
                  <a href='img/cv/CV.pdf' download>
                    Mi CV <img className='svg' src='img/svg/paper.svg' alt='' />
                  </a>
                </div>
              </div>
              <div className='right'>
                <div className='filter'>
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab='tab_1'
                      >
                        <span>Skills</span> <img className='svg' src='img/svg/top-arrow.svg' alt='' />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab='tab_2'
                      >
                        <span>Experiencia</span> <img className='svg' src='img/svg/top-arrow.svg' alt='' />
                      </a>
                    </li>
                  </ul>
                  <span className='ccc' />
                </div>
                <div className='content'>
                  <div id='tab_1' className={`wrapper ${activeContentTab(1)}`}>
                    <div className='skillbox'>
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i}>
                            <div className='list_inner'>
                              <span className='icon'>
                                <span className='in'>
                                  <img className='svg' src={skill.icon} alt='' />
                                </span>
                              </span>
                              <p className='name'>{skill.name}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id='tab_2' className={`wrapper ${activeContentTab(2)}`}>
                    <div className='timelinebox'>
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className='list_inner'>
                              <div className='time'>
                                <span className='year'>{experience.time}</span>
                                <span className='company'>{experience.company}</span>
                              </div>
                              <div className='job'>
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='counter'>
          <div className='container'>
            <div className='counter_list'>
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className='list_inner'>
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className='title'>{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpertAreas

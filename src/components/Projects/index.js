import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const toggleOptions = [
    { value: 'all', label: 'All' },
    { value: 'web app', label: "WEB APP'S" },
    { value: 'android app', label: "ANDROID APP'S" },
    { value: 'machine learning', label: 'MACHINE LEARNING' },
  ];
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have been involved in a diverse array of projects, ranging from web applications to other ventures. Below are some examples of my work:
        </Desc>

        <ToggleButtonGroup>
          {toggleOptions.map((option, index) => (
            <React.Fragment key={option.value}>
              <ToggleButton
                active={toggle === option.value}
                value={option.value}
                onClick={() => setToggle(option.value)}
              >
                {option.label}
              </ToggleButton>
              {index !== toggleOptions.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
import React  from 'react';
import Project from '../Project/Project';
import IronAndEarth from '../../assets/IronAndEarth.png';
import LotusIntimo from '../../assets/LotusIntimo.png';

function ProjectsList() {

    const projects = [
        {
            title: 'Iron & Earth',
            desc: 'It’s a website with a map with climate solutions in Canada. There you can find company name, location, development stage, and climate solution type.',
            skills: ['React', 'Redux', 'Google API', 'React Leaflet'],
            link: 'https://anglvdnl.github.io/mapping-proj/',
            img: IronAndEarth,
            isReversed: false
        },
        {
            title: 'Lotus Intimo',
            desc: 'Online clothing store, that sell underwear for women. As a part of team, I chose stack of technologies in backend and frontend, solve different problems in both parts, make optimization decisions and e.t.c.',
            skills: ['React', 'Redux', 'Rest API', 'MUI'],
            link: '',
            img: LotusIntimo,
            isReversed: true
        }
    ];
    return (
        <>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    number={index + 1}
                    title={project.title}
                    desc={project.desc}
                    skills={project.skills}
                    link={project.link}
                    img={project.img}
                    isReversed={project.isReversed}
                />
            ))}
        </>
    );
}

export default ProjectsList;
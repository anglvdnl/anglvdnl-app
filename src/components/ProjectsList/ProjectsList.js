import React, { useRef } from 'react';
import Project from '../Project/Project';
import IronAndEarth from '../../assets/images/IronAndEarth.png';
import LotusIntimo from '../../assets/images/LotusIntimo.png';
import styles from './ProjectsList.module.scss';

function ProjectsList({projects}) {

    return (
        <div className={styles['projects-list']}>
            {projects.map((project, index) => {
                return (
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
                );
            })}
        </div>
    );
}

export default ProjectsList;
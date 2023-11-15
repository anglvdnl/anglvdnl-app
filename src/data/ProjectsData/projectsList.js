import IronAndEarth from '../../assets/images/IronAndEarth.png';
import LotusIntimo from '../../assets/images/LotusIntimo.png';
import Dogmania from '../../assets/images/dogmania.png';

export const projects = [
    {
        title: 'Dogmania',
        desc: 'An online clothing shop for dogs. Contributing to the entire frontend using React, Next.js, Typescript, and SCSS. Key responsibilities included crafting essential logic for shop items, orders, and the cart. Collaborated effectively within a team and interfaced with a REST API to ensure seamless functionality.',
        skills: ['React', 'Next.js', 'TypeScript', 'Rest API'],
        link: 'https://dev.dogmania.com.ua',
        img: Dogmania,
        isReversed: false,
        position: 250
    },
    {
        title: 'Iron & Earth',
        desc: 'It’s a website with a map with climate solutions in Canada. There you can find company name, location, development stage, and climate solution type.',
        skills: ['React', 'Redux', 'Google API', 'React Leaflet'],
        link: 'https://anglvdnl.github.io/mapping-proj/',
        img: IronAndEarth,
        isReversed: true,
        position: 500
    },
    {
        title: 'Lotus Intimo',
        desc: 'Ukrainian online clothing store. As a part of team, I chose stack of technologies in backend and frontend, solve different problems in both parts, make optimization decisions and e.t.c.',
        skills: ['React', 'Redux', 'Rest API', 'MUI'],
        link: '',
        img: LotusIntimo,
        isReversed: false,
        position: 750
    }
];
import profile from './assets/images/profile.jpg';
import person01 from './assets/images/person01.jpg';
import person02 from './assets/images/person02.jpg';
import person03 from './assets/images/person03.jpg';
import person04 from './assets/images/person04.jpg';
import person05 from './assets/images/person05.jpg';

import postPhoto01 from './assets/images/post01.jpg';
import postPhoto02 from './assets/images/post02.png';

import myPost01 from './assets/images/myposts01.jpg';
import myPost02 from './assets/images/myposts02.jpg';
import myPost03 from './assets/images/myposts03.jpg';
import myPost04 from './assets/images/myposts04.jpg';
import myPost05 from './assets/images/myposts05.jpg';
import myPost06 from './assets/images/myposts06.jpg';

import postWithMe01 from './assets/images/postswithme01.jpg';
import postWithMe02 from './assets/images/postswithme02.jpg';
import postWithMe03 from './assets/images/postswithme03.jpg';


export const stories = [
    {
        key: String(Math.random()),
        photo: profile,
        name: 'Seu story',
        ownProfile: true,
        otherProfile: false
    },
    {
        key: String(Math.random()),
        photo: person01,
        name: 'mirelaf',
        ownProfile: false,
        otherProfile: true
    },
    {
        key: String(Math.random()),
        photo: person02,
        name: 'tatianec',
        ownProfile: false,
        otherProfile: true
    },
    {
        key: String(Math.random()),
        photo: person03,
        name: 'mary',
        ownProfile: false,
        otherProfile: true
    },
    {
        key: String(Math.random()),
        photo: person04,
        name: 'therock',
        ownProfile: false,
        otherProfile: true
    },
    {
        key: String(Math.random()),
        photo: person05,
        name: 'jooohncena',
        ownProfile: false,
        otherProfile: true
    },
    {
        key: String(Math.random()),
        photo: person02,
        name: 'tatianec',
        ownProfile: false,
        otherProfile: true
    },
    {
        key: String(Math.random()),
        photo: person03,
        name: 'mary',
        ownProfile: false,
        otherProfile: true
    }
];

export const posts = [
    {
        key: String(Math.random()),
        photoProfile: person04,
        name: 'therock',
        postPhoto: postPhoto01,
        postDescription: "Quando Luke Hobbs foi apresentado em Velozes e Furioso 5, ele era um agente do Serviço de Segurança Diplomática dos Estados Unidos e um caçador de recompensas contratado para derrubar Dom Torreto e sua",
        comments: 4,
        time: "há 10 minutos"
    },
    {
        key: String(Math.random()),
        photoProfile: person01,
        name: 'mirelaf',
        postPhoto: postPhoto02,
        postDescription: "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa",
        comments: 0,
        time: "há 1 hora"
    }
];

export const profileInfo = [
    {
        key: String(Math.random()),
        number: 6,
        info: 'Publicações'
    },
    {
        key: String(Math.random()),
        number: 2743,
        info: 'Seguidores'
    },
    {
        key: String(Math.random()),
        number: 1746,
        info: 'Seguindo'
    }
];

export const highlights = [
    {
        key: String(Math.random()),
        add: true
    },
    {
        key: String(Math.random()),
        add: false
    },
    {
        key: String(Math.random()),
        add: false
    },
    {
        key: String(Math.random()),
        add: false
    }
];

export const myposts = [
    {
        key: String(Math.random()),
        img: myPost01
    },
    {
        key: String(Math.random()),
        img: myPost02
    },
    {
        key: String(Math.random()),
        img: myPost03
    },
    {
        key: String(Math.random()),
        img: myPost04
    },
    {
        key: String(Math.random()),
        img: myPost05
    },
    {
        key: String(Math.random()),
        img: myPost06
    }
];

export const postswithme = [
    {
        key: String(Math.random()),
        img: postWithMe01
    },
    {
        key: String(Math.random()),
        img: postWithMe02
    },
    {
        key: String(Math.random()),
        img: postWithMe03
    }
]
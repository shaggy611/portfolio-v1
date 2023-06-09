import imgCover from '../assets/cover.png'
import keepClone from '../assets/keep_clone.png'
import portfolio from '../assets/portfolio.png'
import plantyx from '../assets/plantyx.png'
import kodiGuru from '../assets/kodi_guru.png'
import remembify from '../assets/remembify.png'
import scannerApp from '../assets/scanner.png'

const heroData = {
    heroMainData: {
        greeting: 'Hello! 👋 I`m',
        name: 'Vsevolod',
        position: ' Frontend Developer ',
        shortWelcomeText_1: 'I’m',
        shortWelcomeText_2: 'based in Ukraine, making stuff and things with JavaScript and React.',
        shortWelcomeText_3: 'My passion is about web dev and the implementation of interesting ideas into interactive web apps.'
    },

    coverImgMainScreen: imgCover,

    aboutData: {
        info: `I am a Front-end developer with almost 2 years of commercial development
        experience. Previously, I worked for 5 years as a sysadmin and combined this
        with front-end development for a year. Since the beginning of 2022, I have
        fully transitioned into Front-end development. I'm passionate about Front-end
        and regularly upgrade my React skills. Seeking to join a React development
        team to collaborate with talented professionals and continue to grow my skills
        and experience.`,
        skills: ['HTML', 'CSS', 'Javascript', 'SCSS', 'Bootstrap', 'React', 'Vite', 'TailwindCSS', 'NodeJS', 'GIT', 'Firebase', 'Wordpress', 'Styled-Components'],
        jobs: [{
            timePeriod: 'March 2022 - January 2023',
            position: 'Front-End Developer',
            company: 'JBW Soft',
            responsibilities: [`Developed and maintained in-house websites using HTML, CSS, Sass,
            JavaScript, and jQuery.`,
                `Created additional blocks, elements, and pages for websites based on Figma
            layouts, incorporating interactive features.`,
                `Ensured cross-browser compatibility and mobile responsiveness by testing
            sites on various devices.`,
                `Improved site loading speed and fixed urgent and non-urgent bugs.`,
                `Set up new WordPress sites using bash scripts, configured NGINX settings,
            and made SEO amendments based on recommendations from the SEO
            department.`,
                `Working with WordPress sites, creating interactive menus for the site, adding
            shortcodes, and interactive fields for displaying information, writing logic for displaying information on pages, writing basic logic on PHP.`,
                `Transferred sites between servers, linked domains, set up Cloudflare and
            obtained SSL certificates.`]
        },
        {
            timePeriod: 'February 2020 - March 2021',
            position: 'Front-End Developer',
            company: 'JatApp',
            responsibilities: [`Developed in-house websites, landing pages, and internal pages for
            already existing websites from Figma layout primarily using HTML, CSS,
            and JavaScript.`,
                `Tested sites in various browsers and devices to ensure cross-browser
            compatibility and mobile responsiveness.`]
        }, {
            timePeriod: 'July 2016 - February 2022',
            position: 'System administrator',
            company: 'JBW Soft',
            responsibilities: [`Preparation of workplaces for new employees and onboarding for
            them on the first working day.`,
                `Troubleshooting technical problems with the PC and the network,
            setting up the backup, setting up Internet equipment and video
            surveillance equipment, remote user support, setting up the card access
            system to the office.`,
                `Administration of FTP and VPN servers, administration of corporate
            mail (Google admin console). Setting up instances in the Google Cloud
            and further setting them up as a proxy server.`]
        }]
    },

    contactsData: {
        github: 'https://github.com/shaggy611',
        codepen: 'https://codepen.io/shaggy611',
        linkedin: 'https://www.linkedin.com/in/vsevolod-romaniuk-544265282/',
        telegram: 'https://t.me/V_R0m',
        email: 'romanyuk.vsevolod@gmail.com'
    },

    projectsData: [{
        projectName: 'Personal-Portfolio-v1',
        projectImg: `${portfolio}`,
        projectDescription: 'My personal portfolio site. I designed this portfolio myself in a minimal style and focused on creating it using React.',
        repoLink: 'https://github.com/shaggy611/portfolio-v1',
        demoLink: 'https://romaniuk-dev.com/',
        usedTechnologies: ['React', 'Styled-Components', 'Framer-Motion']

    },
    // {
    //     projectName: 'Webinar Platform',
    //     projectImg: `${imgCover}`,
    //     projectDescription: 'It is a platform for conducting webinars and meetings, which allows you to share your screen, for example, to demonstrate presentations. Also, the platform has the ability to leave comments to participants while watching online webigars.',
    //     repoLink: '',
    //     demoLink: 'https://webinario.romaniuk-dev.com/',
    //     usedTechnologies: ['React', 'Typescript', 'TailwindCSS', 'NodeJS', 'Express', 'Firebase', 'WebsocketsIO']
    // }, 
    {
        projectName: 'Remembify',
        projectImg: `${remembify}`,
        projectDescription: 'Remembify is a simple SPA built with React on the client and Express on the server. Remembify uses NotionAPI as a Database for fetching random English-Ukrainian pair of words. I have built this app to help myself for training to remember new words from my English course lessons. During my English course, I wrote new words in Notion Table and then I could with Remembify train new words.',
        repoLink: 'https://github.com/shaggy611/portfolio-v1',
        repoServerLink: 'https://github.com/shaggy611/Remembify-server',
        notionDataBaseLink: 'https://six-scorpion-8f5.notion.site/c0155dc88e2641989a825493ec4e1a3d?v=313c4f90fd4d4263a938f362339d37e7',
        demoLink: 'https://remembify.netlify.app',
        usedTechnologies: ['React', 'TypeScript', 'MUI', 'TailwindCSS', 'NotionAPI', 'ExpressJS']

    }, {
        projectName: 'GoogleKeep Lite Clone',
        projectImg: `${keepClone}`,
        projectDescription: 'Google Keep clone is developed on pure javascript with the use of firebase features such as database and authentication. The web application has the possibility of creating a personal account and keeping notes, which allows you to use the application simultaneously both on a computer and on a smartphone.',
        additionalData: 'Login and password for testing: test@email.com / 123456',
        repoLink: 'https://github.com/shaggy611/to_do_vanila_js/tree/app_with_auth',
        demoLink: 'https://todo-vanillajs.web.app/',
        usedTechnologies: ['HTML', 'Vanilla JavaScript', 'Bootstrap', 'Firebase', 'Webpack']
    }, {
        projectName: 'Scanner.app Landing page',
        projectImg: `${scannerApp}`,
        projectDescription: 'Product landing page developed for Scanner.app',
        repoLink: 'https://github.com/shaggy611/scanner.app',
        demoLink: 'https://scannerappdemo.netlify.app/',
        usedTechnologies: ['HTML', 'CSS', 'Bootstrap', 'Javascript']
    }, {
        projectName: 'Plantyx.app Landing page',
        projectImg: `${plantyx}`,
        projectDescription: 'Product landing page developed for Plantyx.app',
        repoLink: 'https://github.com/shaggy611/plantyx',
        demoLink: 'https://plantyx.app/',
        usedTechnologies: ['HTML', 'CSS', 'Bootstrap', 'Javascript']
    }, {
        projectName: 'Kodi.guru',
        projectImg: `${kodiGuru}`,
        projectDescription: 'Product web site developed for Kodi.guru App',
        repoLink: 'https://github.com/shaggy611/kodi.guru',
        demoLink: 'https://kodi.guru/',
        usedTechnologies: ['HTML', 'CSS', 'Bootstrap', 'Javascript']
    }],
    copyright: '© 2023. Created by Vsevolod Romaniuk'
}

export default heroData

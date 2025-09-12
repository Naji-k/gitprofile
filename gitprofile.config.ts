// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Naji-k', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['naji-k/gitprofile'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'naji-k/ADStore',
          'Naji-k/MyFlix',
          'Naji-k/Philosophers',
          'Naji-k/Cub3d',
          'julicaro31/Webserv',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Feedback Bot',
          description:
            'Slack bot build with Python to collect user feedback and create Jira tickets using AI.',
          imageUrl: '/content/Logo-2.png',
          link: '/projects/slack-bot',
          openInNewTab: false,
        },
        {
          title: 'Learning to build with AI',
          description:
            'Small web games I built while exploring how to code with AI as a partner — applying SOLID principles, multi-language support, and keeping full control of the code.',
          imageUrl: '/content/ai-logo.png',
          link: '/projects/ai-projects',
          openInNewTab: false,
        },
      ],
    },
  },

  seo: {
    title: 'Naji Kanounji - Software Engineer Portfolio',
    description:
      'Software Engineer based in Amsterdam. View my projects in Swift, Python, TypeScript. Experience at TomTom International. Available for hire.',
    imageURL: '',
  },
  social: {
    linkedin: 'najikanounji',
    x: 'najikanounji',

    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.nkanounji.com',
    phone: '',
    email: 'n.kanounji@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'Swift',
    'Python',
    'TypeScript',
    'React Native',
    'Android',
    'iOS',
    'Docker',
    'Bash',
    'PostgreSQL',
    'Git',
    'Rest API',
    'tRPC',
  ],
  experiences: [
    {
      company: 'TomTom International',
      position: 'Software Engineer',
      from: 'Oct 2024',
      to: 'Present',
      companyLink: 'https://tomtom.com',
    },
    {
      company: 'TomTom International',
      position: 'Software Engineer intern',
      from: 'March 2023',
      to: 'Oct 2024',
      companyLink: 'https://tomtom.com',
    },
  ],
  certifications: [
    {
      name: 'iOS development',
      body: 'Udacity',
      year: 'March 2024',
      link: 'https://www.udacity.com/certificate/e/fb4831dc-dd09-11e8-bd3d-930485648551',
    },
    {
      name: 'Android Track',
      body: 'Udacity',
      year: 'Aug 2018',
      link: 'https://www.udacity.com/',
    },
  ],
  educations: [
    {
      institution: 'CODAM Coding School',
      degree: 'Software Engineering',
      from: '2022',
      to: '2025',
    },
    {
      institution: 'Notre Dame University - Louaize',
      degree: 'Diploma in Mobile Development',
      from: '2017',
      to: '2019',
    },
    {
      institution:
        'Mechatronics Engineering, Electrical & Electronic University - Aleppo',
      degree: '',
      from: '2010',
      to: '2014',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {},
  googleAnalytics: {
    id: 'G-TJ60HVCJRF', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>, extended by <a class="text-primary" href="https://github.com/naji-k" target="_blank" rel="noreferrer">Naji</a>`,

  enablePWA: true,
};

export default CONFIG;

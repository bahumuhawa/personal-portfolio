import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  vuejs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  fitzone,
  novabank,
  ventures,
  vueSpend,
  vuetasker,
  wears,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Green Isac Orchestra",
    icon: meta,
    iconBg: "#383E56",
    date: "January 2020 - June 2021",
    points: [
      "Developing and maintaining web applications using Html5, css3 and javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Self Employed",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Vue and other related technologies such as JavaScript.",
      "I work independently to craft high-quality products, ensuring they meet the desired standards.",
      "I implement responsive design and guarantee cross-browser compatibility in all my projects.",
      "I actively review my own code, continuously refining and improving it to maintain high standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I hired Umu to help me design my website using Looka's pre-built templates and integrations. Her contribution and overall efforts were a game changer. We managed to design the whole website in about 2 months, a lot of it thanks to her patience and flexibility at critical moments. I am very grateful for all of her hard work and would recommend Umu to anyone looking to hire someone for similar services. I hope we get to work again sometime in the future!",
    name: "Eduardo Figueira",
    designation: "CEO",
    company: "AllHumanInvest LTD",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I hired Umu to help me design my website using Looka's pre-built templates and integrations. Her contribution and overall efforts were a game changer. We managed to design the whole website in about 2 months, a lot of it thanks to her patience and flexibility at critical moments. I am very grateful for all of her hard work and would recommend Umu to anyone looking to hire someone for similar services. I hope we get to work again sometime in the future!",
    name: "Eduardo Figueira",
    designation: "CEO",
    company: "AllHumanInvest LTD",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I hired Umu to help me design my website using Looka's pre-built templates and integrations. Her contribution and overall efforts were a game changer. We managed to design the whole website in about 2 months, a lot of it thanks to her patience and flexibility at critical moments. I am very grateful for all of her hard work and would recommend Umu to anyone looking to hire someone for similar services. I hope we get to work again sometime in the future!",
    name: "Eduardo Figueira",
    designation: "CEO",
    company: "AllHumanInvest LTD",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Nova Bank",
    description:
      "It offers cutting-edge payment solutions for businesses, analyzing credit cards to optimize financial management, ensuring security, and facilitating seamless transactions worldwide.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: novabank,
    source_code_link: "https://github.com/",
  },
  {
    name: "VueTasker",
    description:
      "Explore effortless task organization with this innovative Todo app fueled by Vue JS and Vueform framework. Easily add, modify, and remove tasks, rearrange them via drag-and-drop sorting, and receive swift updates.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: vuetasker,
    source_code_link: "https://github.com/",
  },
  {
    name: "Voyage Ventures",
    description: "Unlock your dream destinations with Voyage Ventures, the ultimate travel booking platform. Discover unbeatable deals and unforgettable memories while redefining your travel experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ventures,
    source_code_link: "https://github.com/",
  },
  {
    name: "VueSpend Tracker",
    description:
      "Discover a Vue 3 and composition API-driven expense tracker app, offering easy expense/income management, real-time balance updates, local data storage, and Vue Toastification for notifications.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: vueSpend,
    source_code_link: "https://github.com/",
  },
  {
    name: "Wave Wears",
    description:
      "Introducing the future of timekeeping: where style merges with cutting-edge tech to transform your daily life. Dive into our innovative platform for an unparalleled user journey.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: wears,
    source_code_link: "https://github.com/",
  },
  {
    name: "FitZone Fitness",
    description:
      "Discover the future of fitness at FitZone Fitness: where premier facilities await. Equipped with top-notch gear and expert trainers, our motivating atmosphere propels you toward your goals.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: fitzone,
    source_code_link: "https://github.com/",
  },

];

export { services, technologies, experiences, testimonials, projects };
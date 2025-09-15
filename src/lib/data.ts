import type { Project, Experience, Article } from './types';
import { placeholderImages } from './placeholder-images.json';

export const author = {
  name: 'Amour Akowakou',
  title: 'Fullstack Developer',
  email: 'your.email@example.com',
  github: 'https://github.com/devakowakou',
  linkedin: 'https://linkedin.com/in/your-username',
  cv: '/path-to-your-cv.pdf',
};

export const about = {
  intro:
    "Passion Fuels Purpose! Hi, I'm Amour Akowakou, a fullstack developer with a deep passion for building beautiful, functional, and user-centered digital experiences. I thrive on transforming complex problems into elegant solutions.",
  bio: "As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. My expertise spans across various technologies including Django, Node.js, Laravel, and React/Next.js. I am committed to continuous learning and applying my skills to create impactful software.",
  skills: {
    'Programming Languages': [
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'PHP',
      'C#',
      'Go',
      'Ruby',
      'Swift',
      'Kotlin',
      'Rust',
      'C++',
      'Scala',
      'Elixir',
      'Dart',
      'Lua',
      'Perl',
      'MATLAB',
      'Groovy',
      'R',
    ],
    'Frameworks & Libraries': [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'Django',
      'Ruby on Rails',
      'Laravel',
      'ASP.NET',
      'Vue',
      'Angular',
      'Svelte',
      'Framer Motion',
      'Tailwind CSS',
      'Flask',
      'FastAPI',
      'Symfony',
      'Spring',
      'jQuery',
    ],
    'Databases & Caching': [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Redis',
      'Firebase',
      'SQLite',
      'Oracle',
      'MariaDB',
    ],
    'DevOps & Tooling': [
      'Docker',
      'Kubernetes',
      'AWS',
      'Google Cloud',
      'Terraform',
      'Jenkins',
      'Ansible',
      'Git',
      'GraphQL',
      'Vite',
    ],
    IDEs: ['VS Code', 'IntelliJ IDEA', 'PyCharm', 'WebStorm', 'Vim'],
    'No-Code Tools': [
      'Webflow',
      'Bubble',
      'Zapier',
      'Airtable',
      'Notion',
      'Make',
      'Figma',
      'Adalo',
      'Glide',
      'Softr',
    ],
  },
};

const findImage = (id: string) => {
  const image = placeholderImages.find(img => img.id === id);
  if (!image) {
    return { imageUrl: 'https://picsum.photos/seed/default/600/400', imageHint: 'placeholder' };
  }
  return { imageUrl: image.imageUrl, imageHint: image.imageHint };
}

export const projects: Project[] = [
  {
    id: 'crypto-screener',
    title: 'Crypto Screener App',
    description: 'A real-time cryptocurrency screening application to monitor prices, market caps, and trends. Built with React and a public crypto API.',
    tags: ['React', 'API', 'Charts.js'],
    ...findImage('crypto-screener'),
    demoUrl: 'https://example.com/demo1',
    repoUrl: 'https://github.com/your-username/crypto-screener',
  },
  {
    id: 'react-portfolio',
    title: 'React Portfolio Website',
    description: 'A dynamic, animated portfolio website to showcase my projects and skills, much like the one you are viewing now. Fully responsive with a focus on UX.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    ...findImage('react-portfolio'),
    demoUrl: 'https://example.com/demo2',
    repoUrl: 'https://github.com/your-username/react-portfolio',
  },
  {
    id: 'excellentia',
    title: 'Excellentia (SaaS)',
    description: 'A multi-tenant SaaS platform for educational institutions to manage students, courses, and grading. Includes role-based access control.',
    tags: ['Django', 'React', 'PostgreSQL', 'SaaS'],
    ...findImage('excellentia'),
    demoUrl: 'https://example.com/demo3',
  },
  {
    id: 'right-survey',
    title: 'RightSurvey',
    description: 'A survey creation and management tool allowing users to build complex forms, collect responses, and analyze data with interactive charts.',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    ...findImage('right-survey'),
    repoUrl: 'https://github.com/your-username/right-survey',
  },
  {
    id: 'numpharm-org',
    title: 'Numpharm.org',
    description: 'A community platform for pharmacists to share knowledge, discuss case studies, and access professional resources. Features forums and a resource library.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React'],
    ...findImage('numpharm-org'),
    demoUrl: 'https://example.com/demo5',
    repoUrl: 'https://github.com/your-username/numpharm',
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Tech Solutions Inc.',
    role: 'Senior Fullstack Developer',
    date: 'Jan 2021 - Present',
    description: 'Led the development of a major e-commerce platform, improving performance by 30%. Mentored junior developers and introduced new technologies to the stack.',
  },
  {
    id: 'exp2',
    company: 'Innovate Co.',
    role: 'Mid-level Software Engineer',
    date: 'Jun 2018 - Dec 2020',
    description: 'Developed and maintained features for a client-facing SaaS product using Django and React. Collaborated in an agile team to deliver high-quality software.',
  },
  {
    id: 'exp3',
    company: 'Web Wizards Agency',
    role: 'Junior Web Developer',
    date: 'May 2017 - May 2018',
    description: 'Built and styled responsive websites for various clients using HTML, CSS, JavaScript, and PHP frameworks like Laravel.',
  },
];

export const articles: Article[] = [
  {
    id: 'article1',
    title: 'Mastering State Management in React',
    date: '2023-10-15',
    description: 'A deep dive into different state management libraries and patterns in the React ecosystem.',
    slug: 'mastering-state-management-in-react',
  },
  {
    id: 'article2',
    title: 'Building a REST API with Django Rest Framework',
    date: '2023-08-22',
    description: 'A step-by-step guide to creating a powerful and secure REST API using Python and Django.',
    slug: 'building-api-with-django',
  },
  {
    id: 'article3',
    title: 'The Art of Web Animations with Framer Motion',
    date: '2023-05-30',
    description: 'Exploring how to create fluid and engaging user interfaces with Framer Motion in a Next.js application.',
    slug: 'web-animations-framer-motion',
  },
];

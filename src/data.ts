import { roesba, welnessAdministration, leobit, smartFood } from './content/projectVersions';
import type { FeatureItem2, FooterProps, HeaderProps, Link } from './types';
import { getPermalink, getProjectsPermalink } from './utils/permalinks';

const projects: Link[] = [
  {
    text: welnessAdministration.displayName,
    href: getPermalink('/' + welnessAdministration.slug),
  },
  {
    text: leobit.displayName,
    href: getPermalink('/' + leobit.slug),
  },
  {
    text: roesba.displayName,
    href: getPermalink('/' + roesba.slug),
  },
  {
    text: smartFood.displayName,
    href: getPermalink('/' + smartFood.slug),
  },
];

const socials: Link[] = [
  {
    text: 'YouTube',
    ariaLabel: 'YouTube',
    icon: 'tabler:brand-youtube',
    href: 'https://www.youtube.com/@leobar3787',
  },
  {
    text: 'Twitter',
    ariaLabel: 'Twitter',
    icon: 'tabler:brand-twitter',
    href: 'https://x.com/elmer_joselito',
  },
  {
    text: 'GitHub',
    ariaLabel: 'GitHub',
    icon: 'tabler:brand-github',
    href: 'https://github.com/leobar37?tab=repositories',
  },
];

export const headerData: HeaderProps = {
  links: [
    {
      text: 'Experiencia',
      href: getPermalink('#experience'),
    },
    {
      text: 'Proyectos',
      href: getProjectsPermalink(),
      links: [...projects],
    },
    {
      text: 'Redes sociales',
      links: [...socials],
    },
  ],
};

export const experience: Array<FeatureItem2> = [
  {
    icon: 'tabler:3d-cube-sphere',
    title: 'NTT DATA: Senior Developer',
    timeFrame: 'Jul, 2022 - Present',
    tags: ['Node Js', 'React', 'Angular', 'Material', 'Tailwind'],
    description:
      'NTT DATA Corporation es una multinacional japonesa de consultoría y servicios de tecnología de la información con sede en Tokio, Japón.' +
      '<br/><br/>' +
      'Funciones:<br/>' +
      '- Se concluye con éxito la herramienta para construir formularios, desde una interfaz y a través de código.<br/>' +
      '- Preparar talleres para capacitar al equipo.<br/>' +
      '- Refactorización de código.<br/>' +
      '- Participar en ceremonias SCRUM.<br/>' +
      '- Construcción de interfaces con React y Angular.',
    bottomLink: 'https://pe.nttdata.com/',
  },
  {
    icon: 'tabler:vue',
    title: 'Wetokie: Full Stack Developer',
    timeFrame: 'Oct, 2022 - Ene, 2023',
    tags: ['Rabbit MQ', 'NestJs', 'React', 'Redux', 'Swagger'],
    description:
      'Wetokie es una startup argentina para campañas que quieren financiar sus proyectos, dándole la oportunidad a cualquier persona de invertir de manera segura.' +
      '<br/><br/>' +
      'Funciones:<br/>' +
      '- Plantear soluciones backend basadas en microservicios y NestJS.<br/>' +
      '- Participar en ceremonias SCRUM.<br/>' +
      '- Implementar funcionalidades frontend con React.<br/>' +
      '- Plantear una arquitectura modular del lado del backend.',
    bottomLink: 'https://wetokie.io/',
  },
  {
    icon: 'tabler:3d-cube-sphere',
    title: 'Dynamic Devs: Software Engineer II',
    timeFrame: 'Nov, 2021 - Mayo, 2022',
    tags: ['AWS Lambda', 'NestJS', 'Redux', 'React', 'Material UI'],
    description:
      'Funciones:<br/>' +
      '- Desarrollo de aplicaciones SPA y SSR con React, Next.js y TypeScript.<br/>' +
      '- Creación de componentes reutilizables.<br/>' +
      '- Implementación de SEO.<br/>' +
      '- Desarrollo de interfaces siguiendo Pixel Perfect.<br/>' +
      '- Participación en la construcción de lambdas en AWS con Node.js y TypeScript.' +
      '<br/><br/>' +
      'Proyectos:<br/>' +
      '- Migración web RIMAC: Cambio de CMS con nueva arquitectura y tecnologías.<br/>' +
      '- SPA ARCOPRIME: Sistema de inventario completamente Client Side con arquitectura modular basada en TypeScript y React.',
    bottomLink: 'https://www.dynamicdevs.io/',
  },
  {
    icon: 'logos:angular-icon',
    title: 'Vide Solutions: Full Stack Developer',
    timeFrame: 'Ago, 2019 - Present',
    tags: ['React', 'Redux', 'Node.js'],
    description:
      'Vide Solutions es una startup que brinda servicios de TI.' +
      '<br/><br/>' +
      'Funciones:<br/>' +
      '- Liderar pequeños equipos.<br/>' +
      '- Planificar ceremonias SCRUM.<br/>' +
      '- Ayudar en el planteamiento de soluciones para clientes.' +
      '<br/><br/>' +
      'Proyectos:<br/>' +
      '- Zoomlion: Página web para Latinoamérica.<br/>' +
      '- Consultora Sierra Bravia: Refactorización de proyectos.<br/>' +
      '- Capsil: Ecommerce de café.',
  },
  {
    icon: 'tabler:3d-cube-sphere',
    title: 'Tibó: Senior Full Stack Developer',
    timeFrame: 'Marzo 2024 - Agosto 2024',
    tags: ['NestJs', 'Angular', 'React'],
    description:
      'Tibó es una herramienta digital todo en uno para que los mayoristas de alimentos gestionen mejor su negocio.' +
      '<br/><br/>' +
      'Funciones:<br/>' +
      '- Microservicios en Nest.js.<br/>' +
      '- Construcción de interfaces con Angular.<br/>' +
      '- Construcción de interfaces en React.',
    bottomLink: 'https://tiboapp.com/',
  },
];

export const footerData: FooterProps = {
  links: [
    {
      title: 'Projectos',
      links: [...projects],
    },
    {
      title: 'Social',
      links: [...socials],
    },
  ],
};

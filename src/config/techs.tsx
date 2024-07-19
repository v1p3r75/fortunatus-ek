import { GroupId } from "src/types/global";

const techs = {

	frontend: [
		{
			title: 'JavaScript',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
		},
		{
			title: 'TypeScript',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
		},
		{
			title: 'Bootstrap',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
		},
		{
			title: 'TailwindCSS',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
		},
		{
			title: 'jQuery',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg',
		},
		{
			title: 'ReactJS',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
		},
		{
			title: 'VueJS',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
		},
	],
	backend: [
		{
			title: 'PHP',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
		},
		{
			title: 'Laravel',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
		},
		{
			title: 'Symfony',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg',
		},
		{
			title: 'NodeJS',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
		},
		{
			title: 'Express',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
		},
		{
			title: 'AdonisJS',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/adonisjs/adonisjs-original.svg',
		},
		{
			title: 'Django (Python)',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
		}
	],
	mobile: [
		{
			title: 'React Native',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg'
		},
		{
			title: 'Expo',
			icon: ''
		},
	],
	database: [
		{
			title: 'SQL',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg'
		},
		{
			title: 'MySQL',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
		},
		{
			title: 'PostgreSQL',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
		},
	],
	others: [
		{
			title: 'Docker',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
		},
		{
			title: 'Figma',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
		},
		{
			title: 'Git/GitHub',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
		},
		{
			title: 'AWS',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'
		},
		{
			title: 'Linux',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg'
		},
	]

};

const techsGroup: { title: string, id: GroupId }[] = [
	{
		title: 'Frontend',
		id: 'frontend',
	},
	{
		title: 'Backend',
		id: 'backend',
	},
	{
		title: 'Database',
		id: 'database',
	},
	{
		title: 'Mobile',
		id: 'mobile',
	},
	{
		title: 'Others',
		id: 'others',
	},
]


export { techs, techsGroup };
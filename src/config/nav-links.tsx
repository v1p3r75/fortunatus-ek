import { RiGitRepositoryFill, RiHome2Fill, RiPagesLine, RiQuillPenFill } from 'react-icons/ri';

const navLinks = [
	{
		title: 'home',
		href: '/',
		icon: <RiHome2Fill />,
	},
	{
		title: 'projects',
		href: '/projects',
		icon: <RiGitRepositoryFill />,
	},
	{
		title: 'blog',
		href: '/blog',
		icon: <RiQuillPenFill />,
	},
	{
		title: 'cv',
		href: '/files/fortunatus-kidje-resume.pdf',
		icon: <RiPagesLine />,
	},
];

export default navLinks;

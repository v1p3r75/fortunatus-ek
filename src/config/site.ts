export type SiteConfig = typeof siteConfig;

const baseUrl = process.env.NODE_ENV === 'production'
	? 'https://fortunatus-ek.vercel.app'
	: 'http://localhost:3000';

export const siteConfig = {
	name: 'Elfried Fortunatus KIDJE - Développeur web et mobile',
	author: 'Fortunatus KIDJE',
	email: 'elfriedv16@gmail.com',
	siteUrl: baseUrl,
	githubUsername: 'v1p3r75',
	links: {
		github: 'https://github.com/v1p3r75',
		linkedin: 'https://www.linkedin.com/in/fortunatus-ek',
		whatsapp: 'https://wa.me/0022996457545',
		youtube: 'https://youtube.com/@devlancing',
	},
	openGraph: {
		type: 'website',
		title: 'Elfried Fortunatus KIDJE',
		siteName: 'Développeur web et mobile',
		url: baseUrl,
		images: [
			{
				url: '/opengraph-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Elfried Fortunatus KIDJE',
			},
		],
	},
	privateRepos: ['afrikflow'],
};

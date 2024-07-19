import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import GradientText from '@/components/ui/gradient-text';
import ProjectCard from '@/components/project-card';
import { allProjects } from '@/content';
import { getLocalizedUrl } from '@/utils/url';
import Link from '@/components/ui/link';
import { RiArrowRightSLine } from 'react-icons/ri';
import { siteConfig } from '@/config/site';
import { Locale } from 'src/types/global';

export const generateMetadata = async ({
	params,
}: {
	params: { locale: Locale };
}): Promise<Metadata> => {
	const t = await getTranslations();
	const url = getLocalizedUrl({
		locale: params.locale,
		pathname: 'projects',
	});

	return {
		title: t('common.projects'),
		description: t('projectsPage.description'),
		alternates: {
			canonical: url,
		},
	};
};

const ProjectsPage = () => {
	const locale = useLocale();
	unstable_setRequestLocale(locale);
	const t = useTranslations();

	const projects = allProjects.filter((project) => project.language === locale);

	return (
		<>
			<GradientText
				as='h1'
				className='animate-fade-in text-2xl font-bold tracking-tight'
			>
				{t('common.projects')}
			</GradientText>
			<p className='mt-3 animate-fade-in text-foreground/80 animation-delay-1'>
				{t('projectsPage.description')}
			</p>
			<div className='mt-4 grid animate-fade-in grid-cols-1 gap-4 animation-delay-2 sm:grid-cols-2'>
				{projects.map((project) => (
					<ProjectCard
						key={project.slug}
						project={project}
					/>
				))}
			</div>
			<div className="mt-5 flex justify-end">
				<Link
					variant='block'
					href={siteConfig.links.github + "?tab=repositories"}
				>
					{t('common.viewMore')} (GitHub)
					<RiArrowRightSLine />
				</Link>
			</div>

		</>
	);
};

export default ProjectsPage;

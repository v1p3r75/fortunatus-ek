import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import MDXContent from '@/components/mdx';
import { allPages } from '@/content';
import { getLocalizedUrl } from '@/utils/url';
import { Locale } from 'src/types/global';

export const generateMetadata = async ({
	params,
}: {
	params: { locale: Locale };
}): Promise<Metadata> => {
	const t = await getTranslations();
	const url = getLocalizedUrl({
		locale: params.locale,
		pathname: 'about',
	});

	return {
		title: t('common.about'),
		description: t('aboutPage.description'),
		alternates: {
			canonical: url,
		},
	};
};

const AboutPage = () => {
	const locale = useLocale() as Locale;
	const page = allPages.find(
		(page) => page.slug === 'about' && page.language === locale,
	);

	if (!page) {
		notFound();
	}

	return (
		<>
			<div className='prose mt-5 animate-fade-in animation-delay-1'>
				<MDXContent code={page.content} />
			</div>
		</>
	);
};

export default AboutPage;

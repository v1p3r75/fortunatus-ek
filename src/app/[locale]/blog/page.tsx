import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { allPosts } from '@/content';
import GradientText from '@/components/ui/gradient-text';
import { getLocalizedUrl } from '@/utils/url';
import FilterPosts from './filter-posts';
import { Locale } from 'src/types/global';

export const generateMetadata = async ({
	params,
}: {
	params: { locale: Locale };
}): Promise<Metadata> => {
	const t = await getTranslations();
	const url = getLocalizedUrl({
		locale: params.locale,
		pathname: 'blog',
	});

	return {
		title: t('common.blog'),
		description: t('blogPage.description'),
		alternates: {
			canonical: url,
		},
	};
};

const BlogPage = () => {
	
	const locale = useLocale();

	unstable_setRequestLocale(locale);

	const t = useTranslations();
	const posts = allPosts
		.filter((post) => post.language === locale)
		.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

	return (
		<>
			<GradientText
				as='h1'
				className='animate-fade-in text-2xl font-bold tracking-tight'
			>
				{t('common.blog')}
			</GradientText>
			<p className='mt-1 animate-fade-in text-foreground/80 animation-delay-1'>
				{t.rich('blogPage.subTitle', {
					highlight: () => (
						<span className='font-medium text-primary'>{posts.length}</span>
					),
				})}
			</p>
			<FilterPosts
				posts={posts}
				placeholder={t('common.placeholder')}
				remindText={t('common.noResults')}
			/>
		</>
	);
};

export default BlogPage;

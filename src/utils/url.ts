import { siteConfig } from '@/config/site';
import { defaultLocale } from '@/lib/navigation';
import { Locale } from 'src/types/global';

export function getLocalizedUrl({
	locale,
	pathname = '',
	slug = '',
}:{
	locale: Locale;
	pathname?: '' | 'blog' | 'about' | 'projects';
	slug?: string;
}) {
	let localPrefix = locale === defaultLocale ? '' : 'en';

	let url = [siteConfig.siteUrl, localPrefix, pathname, slug]
		.filter(item => item)
		.join('/');

	return url;
}

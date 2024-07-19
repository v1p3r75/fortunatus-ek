'use client';

import Giscus from '@giscus/react';

import { giscusConfigs } from '@/config/giscus';
import { Locale } from 'src/types/global';

type CommentProps = {
	locale: Locale;
};

const Comment = ({ locale = 'fr' }: CommentProps) => {
	return (
		<Giscus
			theme='dark'
			lang={locale}
			{...giscusConfigs}
		/>
	);
};

export default Comment;

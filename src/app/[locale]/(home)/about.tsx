import MDXContent from "@/components/mdx";
import { allPages } from "@/content";
import { useLocale } from "next-intl";

const About = () => {
	
	const locale = useLocale();

	const page = allPages.find(
		(page) => page.slug === 'about' && page.language === locale,
	)!;

	return (
		<>
			<div className='prose mt-5 animate-fade-in animation-delay-1'>
				<MDXContent code={page.content} />
			</div>
		</>
	);
}

export default About
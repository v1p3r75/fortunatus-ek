import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from './hero';
import Projects from './projects';
import Skills from './skills';
import About from './about';

const HomePage = ({ params: { locale } } : any) => {

	unstable_setRequestLocale(locale)
	
	return (
		<div className='space-y-16'>
			<Hero />
			<Skills />
			<About />
			<Projects />
		</div>
	);
};

export default HomePage;

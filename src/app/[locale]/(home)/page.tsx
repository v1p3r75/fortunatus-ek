import { unstable_setRequestLocale } from 'next-intl/server';
import AboutPage from '../about/page';
import Hero from './hero';
import Projects from './projects';
import Skills from './skills';

const HomePage = () => {

	return (
		<div className='space-y-16'>
			<Hero />
			<Skills />
			<AboutPage />
			<Projects />
		</div>
	);
};

export default HomePage;

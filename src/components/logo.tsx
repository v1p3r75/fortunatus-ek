import { SVGProps } from 'react';
import GradientText from './ui/gradient-text';

type LogoProps = SVGProps<SVGSVGElement>;

const Logo = (props: LogoProps) => {
	return (
		<GradientText as='h1' className='font-bold text-2xl'>
			F
		</GradientText>
	);
};

export default Logo;

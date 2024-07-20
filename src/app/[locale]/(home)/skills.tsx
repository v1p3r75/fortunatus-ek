import SkillGroupItem from "@/components/skill-group-item";
import GradientText from "@/components/ui/gradient-text";
import { techsGroup } from "@/config/techs";
import { useTranslations } from "next-intl";

const Skills = () => {
	
	const t = useTranslations('common')

	return (

		<section className='animate-fade-in animation-delay-5'>
			<GradientText
				as='h2'
				className='text-xl font-bold tracking-tight'
			>
				{t('skills')}
			</GradientText>
			<div className='mt-4 space-y-6'>
				{
					techsGroup.map(group => <SkillGroupItem title={group.title} id={group.id} key={group.id} />)
				}
			</div>
		</section>
	)
}

export default Skills
import React from 'react'
import GradientText from './ui/gradient-text'
import SkillItem from './skill-item'
import { techs } from '@/config/techs'
import { GroupId } from 'src/types/global'

const SkillGroupItem = ({ title, id }: { title: string, id: GroupId }) => {

	return (
		<div className="flex flex-wrap items-center gap-2">
			<GradientText
				as='h4'
				className='tracking-tight'
			>
				{title}
			</GradientText>
			<div className="flex flex-wrap gap-2">
				{
					techs[id].map(tech =>
						<SkillItem title={tech.title} icon={tech.icon} key={tech.title} />
					)
				}
			</div>
		</div>
	)
}

export default SkillGroupItem
import React from 'react'

const SkillItem = ({title, icon}: {title: string, icon: string}) => {

	return (
		<div key={title}>
			<img src={icon} alt={title} title={title} className="size-10 cursor-pointer text-white" />
		</div>
	)
}

export default SkillItem
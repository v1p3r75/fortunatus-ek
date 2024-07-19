import Image from "next/image"

const SkillItem = ({ title, icon }: { title: string, icon: string }) => {

	return (
		<div key={title}>
			<Image src={icon} alt={title} title={title} width={40} height={40} className="cursor-pointer" />
		</div>
	);
};

export default SkillItem;
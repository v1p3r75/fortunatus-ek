import Image from "next/image"

const SkillItem = ({ title, icon }: { title: string, icon: string }) => {

	return (
		<div key={title}>
			<Image src={icon} alt={title} title={title} className="size-10 cursor-pointer text-white" />
		</div>
	);
};

export default SkillItem;
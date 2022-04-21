import sideBarContent from "../assets/sideBarContent";

const SideBar = () => {
	return (
		<div className="side-bar border">
			{sideBarContent.map((option, index) => (
				<div key={index} className="side-bar-option fcc">
					{option}
				</div>
			))}
		</div>
	);
};

export default SideBar;

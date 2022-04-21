

const ListItem = ({ center }) => {
	return (
		<div className="list-item border">
			<h2>{center.centerName}</h2>
			<h2>{center.availableCapacity} quintals</h2>
		</div>
	);
};

export default ListItem;

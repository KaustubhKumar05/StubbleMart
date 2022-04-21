import { Link } from "react-router-dom";
import data from "../assets/procurementCenterData";
import ListItem from "./ListItem";
const List = () => {
	return (
		<div className="center-list border">
			{data.map((center) => (
				<ListItem key={center.id} center={center} />
			))}
		</div>
	);
};

export default List;

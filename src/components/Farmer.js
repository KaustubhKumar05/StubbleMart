import Search from "./Search";
import SideBar from "./SideBar";
import List from "./List";
import Rates from "./Rates";

const Farmer = () => {
	return (
		<div className="customer-page">
			<Search />
			<SideBar />
			<List />
			<Rates />
		</div>
	);
};

export default Farmer;

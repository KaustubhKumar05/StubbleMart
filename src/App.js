import "./App.css";
import Farmer from "./components/Farmer";
import Buyer from "./components/Buyer";
import ProcurementCenter from "./components/ProcurementCenter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Farmer/>} />
				<Route path="/buyer" element={<Buyer/>} />
				<Route path="/center" element={<ProcurementCenter/>} />
			</Routes>
		</Router>
	);
}

export default App;
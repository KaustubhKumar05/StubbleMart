import { TextField, InputLabel, NativeSelect, Button } from "@mui/material";
const Search = () => {
	return (
		<div className="search-component border">
			<div className="title fcc">StubbleMart</div>
			<div className="search-bar">
				<TextField
					type="search"
					id="outlined-basic"
					label="Search for centers"
					variant="filled"
				/>
				{/* Distance filters */}
				<InputLabel variant="standard" htmlFor="uncontrolled-native">
					Distance
				</InputLabel>
				<NativeSelect
					defaultValue={"Closest first"}
					inputProps={{
						name: "distanceOptions",
						id: "uncontrolled-native",
					}}
				>
					<option value={1}>Closest first</option>
					<option value={0}>Farthest first</option>
				</NativeSelect>

				{/* Capacity filters */}
				<InputLabel variant="standard" htmlFor="uncontrolled-native">
					Capacity
				</InputLabel>
				<NativeSelect
					defaultValue={"High to Low"}
					inputProps={{
						name: "capacityOptions",
						id: "uncontrolled-native",
					}}
				>
					<option value={1}>High to Low</option>
					<option value={0}>Low to High</option>
				</NativeSelect>
				<Button id="searchBtn" variant="contained" color="success">
					Search
				</Button>
			</div>
		</div>
	);
};

export default Search;

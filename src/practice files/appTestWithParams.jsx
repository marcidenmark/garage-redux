const App = (props) => {
	return (
		<div className="app">
			<CarsArray channelFromParams={props.match.params.cars} />

			<Garage />
			<h2>fdkæjfæajfdlæ (Nothing is rendering from here yet.)</h2>
			<CarShow  />
			<CarNewForm />
		</div>
	);
};

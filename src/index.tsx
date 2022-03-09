import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/store";
import Root from "./page/root";

const store = ConfigureStore();
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Root />
		</Router>
		,
	</Provider>,
	document.getElementById("root")
);

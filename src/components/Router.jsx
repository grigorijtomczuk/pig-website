import { Routes, Route } from "react-router-dom";

import Page from "./Page";
import Home from "../pages/Home";
import Old from "../pages/Old";

// TODO: Add a 404 page.

export default function Router() {
	return (
		<Routes>
			<Route
				path="/*"
				element={
					<Page title="Свиной сайтик &bull; Главная">
						<Home />
					</Page>
				}
			/>
			<Route
				path="/old"
				element={
					<Page title="Свиной сайтик &bull; Архив">
						<Old />
					</Page>
				}
			/>
		</Routes>
	);
}

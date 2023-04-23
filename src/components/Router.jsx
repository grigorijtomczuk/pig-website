import { Routes, Route } from "react-router-dom";

import Page from "./Page";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Ratings from "../pages/Ratings";
import Gallery from "../pages/Gallery";
import Registry from "../pages/Registry";
import Old from "../pages/Old";

export default function Router() {
	return (
		<Routes>
			<Route
				path="/*"
				element={
					<Page title="Свиной сайтик &bull; 404">
						<NotFound />
					</Page>
				}
			/>

			<Route
				path="/"
				element={
					<Page title="Свиной сайтик &bull; Главная">
						<Home />
					</Page>
				}
			/>

			<Route
				path="/ratings"
				element={
					<Page title="Свиной сайтик &bull; Рейтинги">
						<Ratings />
					</Page>
				}
			/>

			<Route
				path="/gallery"
				element={
					<Page title="Свиной сайтик &bull; Галерея">
						<Gallery />
					</Page>
				}
			/>

			<Route
				path="/registry"
				element={
					<Page title="Свиной сайтик &bull; Регистрация свиньи">
						<Registry />
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

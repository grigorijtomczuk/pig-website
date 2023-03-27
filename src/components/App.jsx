import Navbar from "./Navbar";
import Router from "./Router";
import Footer from "./Footer";

import "../styles/reset.css";
import "../styles/main.css";
import "../styles/media.css";

import "../styles/old.css";

export default function App() {
	return (
		<>
			<div className="wrapper">
				<Navbar />
				<Router />
				<Footer />
			</div>
		</>
	);
}

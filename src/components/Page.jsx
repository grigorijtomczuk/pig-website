import { useEffect } from "react";

// A custom scroll function to pass in the "scroll" property of <HashLink> elements
export function scrollWithOffset(element) {
	// Define viewport units
	// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
	const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
	const yOffset = -vh / 6;
	window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
}

// A wrapper function to use in routing that makes possible to alter page's <title> depending on the current route.
export default function Page(props) {
	useEffect(() => {
		document.title = props.title || "";
	}, [props.title]);
	return props.children;
}

export default function Footer() {
	return (
		<footer>
			<p>
				Made with &#128151;
				<br />
				Copyright &copy; {new Date().getFullYear()}{" "}
				<a className="simple-link" href="https://github.com/grigorijtomczuk" target="_blank">
					grigorijtomczuk
				</a>
			</p>
		</footer>
	);
}

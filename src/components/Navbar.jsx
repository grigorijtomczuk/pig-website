import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";

import PigLogo from "../assets/images/icons/pig.svg";
import TelegramLogo from "../assets/images/icons/tg-logo.svg";
import GitHubLogo from "../assets/images/icons/gh-logo.svg";

export default function Navbar() {
	return (
		<header>
			<nav>
				<Link className="title" to="/">
					<h1>
						Свиной
						<br />
						сайтик
					</h1>

					<div className="pig-icon-wrapper">
						<SVG className="pig-icon" src={PigLogo} />
					</div>
				</Link>

				<ul>
					<li>
						<Link to="/">Главная</Link>
					</li>

					<li>
						<Link to="/ratings">Рейтинги</Link>
					</li>

					<li>
						<Link to="/gallery">Галерея</Link>
					</li>

					<li>
						<Link to="/registry">Регистрация свиньи</Link>
					</li>

					<li>
						<Link to="/old">Архив</Link>
					</li>
				</ul>

				<div className="nav-logos-container">
					<a className="nav-logo-wrapper" href="https://t.me/strawberrette_pig_bot" target="_blank" title="Telegram Бот">
						<SVG className="nav-logo" src={TelegramLogo} />
					</a>

					<a className="nav-logo-wrapper" href="https://github.com/grigorijtomczuk/pig-website" target="_blank" title="GitHub">
						<SVG className="nav-logo" src={GitHubLogo} />
					</a>
				</div>
			</nav>
		</header>
	);
}

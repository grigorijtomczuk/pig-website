import { Link } from "react-router-dom";

import PigLogo from "../assets/images/icons/pig.svg";
import TelegramLogo from "../assets/images/icons/tg-logo.svg";
import GitHubLogo from "../assets/images/icons/gh-logo.svg";

export default function Navbar() {
	return (
		<header>
			<nav>
				<Link to="/" className="title">
					<h1>
						Свиной
						<br />
						сайтик
					</h1>
					<div className="pig-icon-wrapper">
						<img className="pig-icon" src={PigLogo} alt="Pig Logo" />
					</div>
				</Link>
				<ul>
					<li>
						<Link to="/">Главная</Link>
					</li>
					<li>
						<Link to="#">Рейтинги</Link>
					</li>
					<li>
						<Link to="#">Галерея</Link>
					</li>
					<li>
						<Link to="/registry">Регистрация свиньи</Link>
					</li>
					<li>
						<Link to="/old">Архив</Link>
					</li>
				</ul>
				<div className="nav-logos-container">
					<a href="https://t.me/strawberrette_pig_bot" target="_blank" className="nav-logo-wrapper">
						<img className="nav-logo" src={TelegramLogo} alt="Telegram Bot" />
					</a>
					<a href="https://github.com/grigorijtomczuk/pig-website" target="_blank" className="nav-logo-wrapper">
						<img className="nav-logo" src={GitHubLogo} alt="GitHub Repo" />
					</a>
				</div>
			</nav>
		</header>
	);
}

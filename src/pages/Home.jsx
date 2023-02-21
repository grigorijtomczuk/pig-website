import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { scrollWithOffset } from "../components/Page";

import PigLogo from "../assets/images/icons/pig.svg";
import TelegramLogo from "../assets/images/icons/tg-logo.svg";
import GitHubLogo from "../assets/images/icons/github-logo.svg";
import LittlePigsImage from "../assets/images/content/little-pigs.jpg";
import FencePigImage from "../assets/images/content/fence-pig.jpg";
import MeadowPigsImage from "../assets/images/content/meadow-pigs.jpg";

// TODO: Add "scroll to the top" button.

export default function Home() {
	return (
		<>
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
							<Link to="#">Регистрация свиньи</Link>
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
			<main>
				<div className="hero">
					<h2 className="hero-title">
						Добро пожаловать на <span>Свиной сайтик</span>!
					</h2>
					<p className="hero-subtitle">Интернет-портал для свиней</p>
					<p>
						<HashLink scroll={scrollWithOffset} to="#main-articles" className="hero-scroll">
							похрюкали!
						</HashLink>
					</p>
				</div>
				<div className="container" id="main-articles">
					<article>
						<div className="article-text" data-number="01">
							<div className="article-title">Кто такие свиньи?</div>
							<p>Быть или не быть свиньей &#8212; это выбор каждого. Многие считают, что это странно! Однако ничего необычного в этом нет. Быть свиньей &#8212; это значит любить и хрючить. Это стиль жизни. Это жизнь. Каждый желающий может стать свиньей. Свиньи не злятся и не ссорятся. Вот такие мы! Самые умные свиньи! Самые хрючные!</p>
						</div>
						<div className="article-img">
							<img src={LittlePigsImage} alt="Маленькие свинки" />
						</div>
					</article>
					<article>
						<div className="article-text" data-number="02">
							<div className="article-title">Что это за сайтик?</div>
							<p>Мы создали Свиной сайтик, чтобы все свиньи могли здесь хрюкать, делиться фотографиями и общаться! Создание свиной инфраструктуры &#8212; это важный этап в развитии свиной культуры. Постоянно расширяющийся функционал этого сайтика не даст заскучать ни одной свинье!</p>
						</div>
						<div className="article-img">
							<img src={FencePigImage} alt="Свин на заборе" />
						</div>
					</article>
					<article>
						<div className="article-text" data-number="03">
							<div className="article-title">Как стать свиньей?</div>
							<p>
								Зарегистрироваться на Свином сайтике очень просто: нужно просто заполнить{" "}
								<Link className="simple-link" to="#">
									свиную анкетку
								</Link>
								! После регистрации Вы обретете все хорошие качества свиньи, а именно: хрючность, ласковость, няшность, милый пятачок, красивые глазки, восхитительные ушки и очаровательный голосок!
							</p>
						</div>
						<div className="article-img">
							<img src={MeadowPigsImage} alt="Свиньи гуляют" />
						</div>
					</article>
				</div>
			</main>
			<footer>
				<p>
					Made with &#128151;
					<br />
					Copyright &copy; 2023{" "}
					<a className="simple-link" href="https://github.com/grigorijtomczuk" target="_blank">
						grigorijtomczuk
					</a>
				</p>
			</footer>
		</>
	);
}

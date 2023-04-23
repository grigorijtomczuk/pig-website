import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { scrollWithOffset } from "../components/Page";

import LittlePigsImage from "../assets/images/content/little-pigs.jpg";
import FencePigImage from "../assets/images/content/fence-pig.jpg";
import MeadowPigsImage from "../assets/images/content/meadow-pigs.jpg";

// TODO: Add "scroll to the top" button.

export default function Home() {
	return (
		<main>
			<div className="hero">
				<h2 className="hero-title">
					Добро пожаловать на <span>Свиной сайтик</span>!
				</h2>

				<p className="hero-subtitle">Интернет-портал для свиней</p>

				<p>
					<HashLink className="hero-scroll" scroll={scrollWithOffset} to="#articles">
						похрюкали!
					</HashLink>
				</p>
			</div>

			<div className="container" id="articles">
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
							<Link className="simple-link" to="/registry">
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
	);
}

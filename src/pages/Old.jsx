export default function Old() {
	return (
		<div className="old-wrapper">
			<div className="old-container">
				<h1 className="old-heading-1">Свинья моя - одна такая!</h1>
				<p className="old-paragraph">Вот такие мы! Самые умные свиньи! Самые хрючные! {":)"}</p>
				<br />
				<img src="https://i.pinimg.com/originals/8a/9a/2d/8a9a2d7a465724b4fb536419e901581c.jpg" style={{ width: "35%" }} alt="Pig picture" />
				<br />
				<br />
				<a className="old-link" href="https://youtu.be/6zbsUtQL4nY" target="_blank">
					🐷
				</a>
				<br />
				<br />
				<h3 className="old-heading-3">Хорошие качества свньи</h3>
				<ol className="old-ordered-list">
					<li>Хрючность</li>
					<li>Ласковость</li>
					<li>Няшность</li>
					<li>Милый пятачок</li>
					<li>Красивые глазки</li>
					<li>Восхитительные ушки</li>
					<li>Очаровательный голосок</li>
				</ol>
				<a className="old-link" href="https://c.tenor.com/s1oZocMQdm8AAAAM/sexy-wierd.gif" target="_blank">
					<button className="old-button" type="button">
						Нажми на меня 😏
					</button>
				</a>
				<br />
				<br />
				<hr />
				<h3 className="old-heading-3">Свиная анкетка!!! Обязатльно к заполнению!</h3>
				<form className="old-form">
					<label htmlFor="name">Ваше свиное имя: </label>
					<input id="name" name="name" type="text" placeholder="Свин Хрючный" />
					<br />
					<label htmlFor="date">Дата вашего свинячества (не раньше 2005!): </label>
					<input id="date" name="date" type="date" min="2005-01-01" />
					<br />
					<label htmlFor="tel">Телефончик для связи: </label>
					<input id="tel" name="tel" type="tel" />
					<br />
					<label htmlFor="svin">Вы подтверждаете, что вы свинья?: </label>
					<input id="svin" name="svin" type="checkbox" />
					<br />
					<input type="submit" />
					<input type="reset" />
				</form>
			</div>
		</div>
	);
}

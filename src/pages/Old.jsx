export default function Old() {
	return (
		<div className="old-container">
			<h1>Свинья моя - одна такая!</h1>
			<p id="paragraph">Вот такие мы! Самые умные свиньи! Самые хрючные! {":)"}</p>
			<br />
			<img src="https://i.pinimg.com/originals/8a/9a/2d/8a9a2d7a465724b4fb536419e901581c.jpg" style={{ width: "35%" }} alt="Pig picture" />
			<br />
			<br />
			<a href="https://youtu.be/6zbsUtQL4nY" target="_blank">
				🐷
			</a>
			<br />
			<br />
			<h3>Хорошие качества свньи</h3>
			<ol className="old-ordered-list">
				<li>Хрючность</li>
				<li>Ласковость</li>
				<li>Няшность</li>
				<li>Милый пятачок</li>
				<li>Красивые глазки</li>
				<li>Восхитительные ушки</li>
				<li>Очаровательный голосок</li>
			</ol>
			<a href="https://c.tenor.com/s1oZocMQdm8AAAAM/sexy-wierd.gif" target="_blank">
				<button type="button">Нажми на меня 😏</button>
			</a>
			<br />
			<br />
			<hr />
			<h3>Свиная анкетка!!! Обязатльно к заполнению!</h3>
			<form>
				<label for="name">Ваше свиное имя: </label>
				<input id="name" name="name" type="text" placeholder="Свин Хрючный" />
				<br />
				<label for="date">Дата вашего свинячества (не раньше 2005!): </label>
				<input id="date" name="date" type="date" min="2005-01-01" />
				<br />
				<label for="tel">Телефончик для связи: </label>
				<input id="tel" name="tel" type="tel" />
				<br />
				<label for="svin">Вы подтверждаете, что вы свинья?: </label>
				<input id="svin" name="svin" type="checkbox" />
				<br />
				<input type="submit" />
				<input type="reset" />
			</form>
		</div>
	);
}

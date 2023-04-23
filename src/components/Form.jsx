import "../styles/module_styles/registry.css";

export default function Form() {
	return (
		<form className="registry-form">
			<label className="form-item">
				<div className="form-item-wrapper">
					<p>Ваше свиное имя</p>
					<input name="name" type="text" placeholder="Свин Хрючный" />
				</div>
			</label>

			<label className="form-item" title="Не позже 01.01.2005!">
				<div className="form-item-wrapper">
					<p>Дата вашего свинячества</p>
					<input name="birthDate" type="date" max="2005-01-01" />
				</div>
			</label>

			<label className="form-item">
				<div className="form-item-wrapper">
					<p>Телефончик для связи</p>
					<input name="tel" type="tel" placeholder="+7 (xxx) xxx-xx-xx" />
				</div>
			</label>

			<label className="form-item">
				<div className="form-item-wrapper">
					<p>Вы подтверждаете, что вы свинья?</p>
					<input name="isPig" type="checkbox" />
				</div>
			</label>

			<input className="form-button" type="submit" value="Зарегистрировать" />
			<input className="form-button" type="reset" value="Сбросить" />
		</form>
	);
}

import "../styles/module_styles/registry.css";

export default function Form() {
	function handleSubmit(event) {
		event.preventDefault();
		alert("Свинья зарегистрирована!");
	}

	return (
		<form className="registry-form">
			<label className="form-item">
				<div className="form-item-wrapper">
					<p>Ваше свиное имя</p>
					<input name="name" type="text" placeholder="Свин Хрючный" />
				</div>
			</label>

			<label className="form-item">
				<div className="form-item-wrapper">
					<p>Дата вашего свинячества</p>
					<input name="birthDate" type="date" min="1900-01-01" />
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

			<input className="form-button" type="submit" value="Зарегистрировать" onClick={handleSubmit} />
			<input className="form-button" type="reset" value="Сбросить" />
		</form>
	);
}

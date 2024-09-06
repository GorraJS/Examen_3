import { useState } from "react";
import axios from "axios";

function Form() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const newPost = () => {
		axios.post("http://localhost:3000/usuarios",
			{
				nombre: name,
				email: email,
			});
	};

    const Enviar = () => {
        newPost()
    }

	const newName = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};

	const newEmail = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};

	return (
		<>
			<form>
				<fieldset>
					<label>
						Nombre
						<input
							type="texta"
							name="first_name"
							placeholder="Ingrese Nombre"
							value={name}
							onChange={newName}
						/>
					</label>
					<label>
						Email
						<input
							type="text"
							name="email"
							placeholder="Ingrese Email"
							value={email}
							onChange={newEmail}
						/>
					</label>
				</fieldset>

				<input type="submit" onClick={Enviar} value="Enviar" />
			</form>
		</>
	);
}

export default Form;

import { useState } from "react";
import axios from "axios";

function UserList({ prop }) {
	const [newName, setNewName] = useState("");
	const [newEmail, setNewEmail] = useState("");

	const editarUsuario = () => {
		axios.put(`http://localhost:3000/usuarios/${prop}`);
	};

	const eliminarUsuario = () => {
		axios.delete(`http://localhost:3000/usuarios/${prop[0].id}`);
	};

	//----------------------------------//

	const handleName = (e) => {
		e.preventDefault();
		setNewName(e.target.value);
	};

	const handleEmail = (e) => {
		e.preventDefault();
		setNewEmail(e.target.value);
	};

	//---------------------------//

	const Editar = () => {
		editarUsuario();
	};
	const Eliminar = () => {
		eliminarUsuario();
	};

	return (
		<>
			<table>
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Nombre</th>
						<th scope="col">Email</th>
						<th scope="col">Editar</th>
						<th scope="col">Eliminar</th>
					</tr>
				</thead>
				<tbody>
					{prop.map((elem, i) => (
						<tr key={i}>
							<td>{elem.id}</td>
							<td>{elem.nombre}</td>
							<td>{elem.email}</td>
							<td>
								<button type="submit" onClick={Editar}>
									Editar
								</button>
							</td>
							<td>
								<button type="submit" onClick={Eliminar}>
									Eliminar
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* --------------------------------- */}

			<form>
				<h3>Editar usuarios</h3>
				<fieldset>
					<label>
						Nombre
						<input
							type="text"
							name="first_name"
							placeholder="Editar nombre"
							value={newName}
							onChange={handleName}
						/>
					</label>
					<label>
						Email
						<input
							type="text"
							name="email"
							placeholder="Editar email"
							value={newEmail}
							onChange={handleEmail}
						/>
					</label>
				</fieldset>
			</form>
		</>
	);
}

export default UserList;

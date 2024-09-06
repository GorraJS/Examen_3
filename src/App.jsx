import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./UserList";
import Form from "./Form";

function App() {
	const [datos, setDatos] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/usuarios")
			.then((res) => {
				setDatos(res.data);
				console.log(datos);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
      <h4>(Para ver cambios hay que refrescar la pagina)</h4>
			<Form />
			<h1></h1>
			<UserList prop={datos} />
		</>
	);
}

export default App;

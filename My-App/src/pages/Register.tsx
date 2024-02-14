import { useEffect } from "react";
import axios from "axios";

export default function Register() {
	useEffect(() => {
		axios
			.post("http://localhost:8000/register", {
				name: "Fred",
				email: "",
				password: "123456",
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	return (
		<div>
			<h1>Register</h1>
		</div>
	);
}

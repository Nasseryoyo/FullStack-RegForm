import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function Register() {
	const handleSubmit = () => {
		const name = (document.getElementById("name") as HTMLInputElement)
			.value;
		const email = (document.getElementById("email") as HTMLInputElement)
			.value;
		const age = (document.getElementById("age") as HTMLInputElement).value;
		if (
			name === "" ||
			email === "" ||
			age === "" ||
			isNaN(+age) ||
			+age < 0 ||
			+age > 150 ||
			!email.includes("@") ||
			!email.includes(".")
		) {
			return;
		} else {
			axios
				.post("http://localhost:8000/register", {
					name: name,
					email: email,
					age: age,
				})
				.then(() => {
					toast.success("Successfully Registered!");
				});
		}
	};
	return (
		<form className=" flex flex-col gap-3">
			<Toaster />
			<div className=" flex flex-col gap-3">
				<label htmlFor="name" className="text-red">
					Name
				</label>
				<input type="text" id="name" />
			</div>
			<div className=" flex flex-col gap-3">
				<label htmlFor="email">Email</label>
				<input type="email" id="email" />
			</div>
			<div className=" flex flex-col gap-3">
				<label htmlFor="age">Age</label>
				<input type="number" id="age" />
			</div>
			<button onClick={handleSubmit}>Submit</button>
		</form>
	);
}

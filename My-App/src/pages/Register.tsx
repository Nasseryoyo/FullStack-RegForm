import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import {
	buttonClass,
	containerClass,
	InputClass,
	TextClass,
	TitleClass,
} from "../assets/Styles";

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
			toast.error("Invalid Input");
		} else {
			axios
				.post("http://localhost:8000/register", {
					name: name,
					email: email,
					age: age,
				})
				.then(() => {
					toast.success("Successfully Registered!");
				})
				.catch(() => {
					toast.error("Register failed");
				});
		}
	};
	return (
		<div className="flex h-full w-full flex-col items-center justify-center bg-gray-900 ">
			<Toaster />
			<form className={containerClass}>
				<h1 className={TitleClass}>Register</h1>
				<div className=" flex flex-col gap-2">
					<label htmlFor="name" className={TextClass}>
						Name
					</label>
					<input type="text" id="name" className={InputClass} />
				</div>
				<div className=" flex flex-col gap-2">
					<label htmlFor="email" className={TextClass}>
						Email
					</label>
					<input type="email" id="email" className={InputClass} />
				</div>
				<div className=" flex flex-col gap-2">
					<label htmlFor="age" className={TextClass}>
						Age
					</label>
					<input type="number" id="age" className={InputClass} />
				</div>
				<button onClick={handleSubmit} className={buttonClass}>
					Submit
				</button>
			</form>
		</div>
	);
}

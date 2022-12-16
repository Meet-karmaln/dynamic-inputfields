import { useEffect, useState } from "react";
import { Button, Paper, ThemeProvider } from "@mui/material";

import customTheme from "./Theme";
import requirements from "./app.config";
import Fields from "./Fields";

const Main = () => {
	const [data, setData] = useState(requirements);
	const [error, setError] = useState("");

	// function for form validation
	const validateForm = () => {
		const tempError = {};
		data.map(
			({
				type,
				name,
				mandatory,
				errorHelperText,
				fieldValue,
				isChecked,
			}) => {
				if (
					(type === "text" ||
						type === "textarea" ||
						type === "radio" ||
						type === "number" ||
						type === "date" ||
						type === "datetime") &&
					mandatory
				) {
					tempError[name] = fieldValue ? "" : errorHelperText;
				}

				if (type === "email" && mandatory) {
					tempError[name] = fieldValue
						? /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gi.test(
								fieldValue
						  )
							? ""
							: "please enter valid email"
						: errorHelperText;
				}

				if (type === "checkbox" && mandatory) {
					tempError.checkBox = isChecked ? "" : errorHelperText;
				}

				if (type === "dropdown" && mandatory) {
					tempError.dropdown = fieldValue ? "" : errorHelperText;
				}
				return tempError;
			}
		);
		setError({ ...tempError });
		return Object.values(tempError).every((item) => item === "");
	};

	useEffect(() => {
		setData(requirements);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			console.log("done");
		} else {
			console.log("not valid");
		}
	};

	return (
		<ThemeProvider theme={customTheme}>
			<Paper
				elevation={2}
				sx={{
					borderRadius: "20px",
					width: "90vw",
					maxWidth: "1800px",
				}}
				className='container'
			>
				<form className='form max-h-[30rem] px-6'>
					<Fields data={data} setData={setData} error={error} />
					<Button
						size={"medium"}
						onClick={handleSubmit}
						variant='contained'
					>
						Submit
					</Button>
				</form>
			</Paper>
		</ThemeProvider>
	);
};

export default Main;

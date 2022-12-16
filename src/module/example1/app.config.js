export const textFieldVariant = "outlined"; //outlined, filled & standard are available variants
export const view = "small"; //small, medium & large  (large is available for checkbox and radio)
export const density = "dense"; //dense and normal spacing between 2 textField component
export const mainThemeColor = "rgb(23, 74, 69)";
export const buttonTextColor = "rgb(233, 231, 231)";

//for checkbox and radio button
export const selectedColor = "rgb(48, 116, 112)";
export const normalColor = "rgb(111, 240, 150)";

const requirements = [
	{
		name: "First name",
		type: "text",
		fieldValue: "",
		mandatory: true,
		options: [{ text: "" }],
		errorHelperText: "First name is required",
	},
	{
		name: "Last name",
		type: "text",
		fieldValue: "",
		mandatory: true,
		options: [{ text: "" }],
		errorHelperText: "Last name is required",
	},
	{
		name: "Email",
		type: "email",
		fieldValue: "",
		mandatory: true,
		options: [{ text: "" }],
		errorHelperText: "email is required",
	},
	{
		name: "Mobile number",
		type: "number",
		fieldValue: "",
		mandatory: true,
		options: [{ text: "" }],
		errorHelperText: "Number is required",
	},
	{
		name: "Date of birth",
		type: "date",
		fieldValue: "",
		mandatory: true,
		options: [{ text: "" }],
		errorHelperText: "DOB is required",
	},
	{
		name: "percise DOB",
		type: "datetime",
		fieldValue: "",
		mandatory: true,
		options: [{ text: "" }],
		errorHelperText: "DOB is required",
	},
	{
		name: "select one",
		type: "radio",
		fieldValue: "",
		mandatory: true,
		options: [
			{ text: "option 1" },
			{ text: "option 2" },
			{ text: "option 3" },
			{ text: "option 4" },
		],
		errorHelperText: "Select atleast one",
	},
	{
		name: "select appropriate options",
		type: "checkbox",
		fieldValue: "",
		mandatory: true,
		options: [
			{ text: "option 1" },
			{ text: "option 2" },
			{ text: "option 3" },
			{ text: "option 4" },
		],
		errorHelperText: "this field is required",
	},
	{
		name: "select something",
		type: "dropdown",
		fieldValue: "",
		mandatory: true,
		options: [
			{ text: "option 1" },
			{ text: "option 2" },
			{ text: "option 3" },
			{ text: "option 4" },
		],
		errorHelperText: "Select atleast one",
	},
	{
		name: "Address",
		type: "textarea",
		fieldValue: "",
		mandatory: true,
		options: [{ text: "" }],
		errorHelperText: "address is required",
	},
];

export default requirements;

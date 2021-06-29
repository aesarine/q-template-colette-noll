import React from 'react';
import atomize from "@quarkly/atomize";
const Form = atomize.form();

const CustomForm = ({
	children,
	...props
}) => <Form {...props}>
	{children}
</Form>;

export default atomize(CustomForm)({
	name: "CustomForm",
	propInfo: {
		action: {
			title: "Action",
			control: "input",
			type: "text",
			weight: 1
		}
	}
});
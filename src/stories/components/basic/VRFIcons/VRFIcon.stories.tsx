import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Icon } from "../../../../components";

const meta: Meta<typeof Icon> = {
	component: Icon,
	title: "COMPONENTS/Basic/Icon",
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const SelectIcon: Story = {
	args: {
		iconName: 'icon-mobile'
	},
	render: (args) => (
		<Icon {...args} />
	)
};
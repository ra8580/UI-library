import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Logo } from "../../../components";

const meta: Meta<typeof Logo> = {
	component: Logo,
	title: "COMPONENTS/Brand/Logo",
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div style={{ height: '150px' }}>
			  <Story />
			</div>
		  ),
	],
	argTypes: {
		variant: {
		  description: 'Below are the available variants:'
		 },
	  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const VirginWhiteBoxWhitePlusRow: Story = {
	args: {
		variant: 'virginWhiteBoxWhitePlusRow'
	},
	parameters: {
		backgrounds: {
		  default: 'Primary',
		}
	},
	render: (args) => (
		<Logo {...args} />
	)
};

export const VirginWhiteBoxWhitePlusColumn: Story = {
	args: {
		variant: 'virginWhiteBoxWhitePlusColumn'
	},
	parameters: {
		backgrounds: {
		  default: 'Primary',
		}
	},
	render: (args) => (
		<Logo {...args} />
	)
};

export const VirginRedBoxBlackPlusRow: Story = {
	args: {
		variant: 'virginRedBoxBlackPlusRow',
	},
	parameters: {
		backgrounds: {
		  default: 'Midnight',
		}
	},
	render: (args) => (
		<Logo {...args} />
	) 
};

export const VirginRedBoxBlackPlusColumn: Story = {
	args: {
		variant: 'virginRedBoxBlackPlusColumn'
	},
	parameters: {
		backgrounds: {
		  default: 'Midnight',
		}
	},
	render: (args) =>(
		<Logo {...args} />
	)
};

export const VirginRedBoxWhitePlusRow: Story = {
	args: {
		variant: 'virginRedBoxWhitePlusRow'
	},
	render: (args) =>(
		<Logo {...args} />
	)
};

export const VirginRedBoxWhitePlusColumn: Story = {
	args: {
		variant: 'virginRedBoxWhitePlusColumn'
	},
	render: (args) =>(
		<Logo {...args} />
	)
};
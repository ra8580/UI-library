import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from "../../../components";

const meta: Meta<typeof Button> = {
	component: Button,
	title:  "COMPONENTS/Events/Button",
	tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		variant: 'primary'
	},
	render: (args) => <Button {...args}>Button</Button>
};

export const PrimarySmall: Story = {
	args: {
		variant: 'primarySmall'
	},
	render: (args) => <Button {...args}>Button</Button>
};

export const PrimaryReverse: Story = {
	args: {
		variant: 'primaryReverse'
	},
	parameters: {
		backgrounds: {
		  default: 'Primary',
		}
	},
	render: (args) => (
		<Button {...args}>Button</Button>
	)
};


export const primarySmallReverse: Story = {
	args: {
		variant: 'primarySmallReverse'
	},
	parameters: {
		backgrounds: {
		  default: 'Primary',
		}
	},
	render: (args) => (
		<Button {...args}>Button</Button>
	)
};

export const Secondary: Story = {
	args: {
		variant: 'secondary'
	},
	render: (args) => <Button {...args}>Button</Button>
};

export const SecondarySmall: Story = {
	args: {
		variant: 'secondarySmall'
	},
	render: (args) => <Button {...args}>Button</Button>
};

export const SecondaryReverse: Story = {
	args: {
		variant: 'secondaryReverse'
	},
	parameters: {
		backgrounds: {
		  default: 'Primary',
		}
	},
	render: (args) => (
		<Button {...args}>Button</Button>
	)
};

export const SecondarySmallReverse: Story = {
	args: {
		variant: 'secondarySmallReverse'
	},
	parameters: {
		backgrounds: {
		  default: 'Primary',
		}
	},
	render: (args) => (
		<Button {...args}>Button</Button>
	)
};

export const Disabled: Story = {
	args: {
		variant: 'primary',
		isDisabled: true
	},
	render: (args) => <Button {...args}>Button</Button>
};

export const SetText: Story = {
	args: {
		variant: 'primary',
		text: "sample button"
	},
	render: (args) => <Button {...args} />
};
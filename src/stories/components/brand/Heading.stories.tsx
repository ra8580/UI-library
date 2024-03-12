import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Heading } from "../../../components";

const meta: Meta<typeof Heading> = {
	component: Heading,
	title: "COMPONENTS/Brand/Heading",
	tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const XLarge: Story = {
	args: {
		variant: 'xlarge',
		HeadingLevel: "h1"
	},
	render: (args) => <Heading {...args}>Headline</Heading>
};

export const Large: Story = {
	args: {
		variant: 'large',
		HeadingLevel: "h2"
	},
	render: (args) => <Heading {...args}>Headline</Heading>
};

export const Medium: Story = {
	args: {
		variant: 'medium',
		HeadingLevel: "h3"
	},
	render: (args) => <Heading {...args}>Headline</Heading>
};

export const Small: Story = {
	args: {
		variant: 'small',
		HeadingLevel: "h4"
	},
	render: (args) => <Heading {...args}>Headline</Heading>
};

export const XSmall: Story = {
	args: {
		variant: 'xsmall',
		HeadingLevel: "h5"
	},
	render: (args) => <Heading {...args}>Headline</Heading>
};

export const Set_Text: Story = {
	args: {
		variant: 'xsmall',
		HeadingLevel: "h5",
		text: "edit me"
	},
	render: (args) => <Heading {...args}/>
};
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { FooterMinimal } from "../../../components";

const meta: Meta<typeof FooterMinimal> = {
	component: FooterMinimal,
	title: "COMPONENTS/Layouts/FooterMinimal",
	tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof FooterMinimal>;

export const Primary: Story = {
	args: {
		brandAllRights: '© Virgin Mobile Canada. All rights reserved.',
        links: [{"linkName": "Contact Us", "linkUrl": "#" }, {"linkName": "Privacy", "linkUrl": "#" }, {"linkName": "Legal Regulatory", "linkUrl": "#" }, {"linkName": "Wireless Code Member Rights", "linkUrl": "#" }],
		skipToMainTxt: "Skip to main"
	},
	render: (args) => <FooterMinimal {...args} />
};
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Link } from "../../../components";

const meta: Meta<typeof Link> = {
	component: Link,
	title: "COMPONENTS/Basic/Link",
	tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Link>;

export const NormalLink: Story = {
	args: {
		variant: 'normalLink'
	},
	render: (args) => (
		<Link {...args}>Link</Link>
	)
};

export const NormalLink_With_Disabled: Story = {
	args: {
		variant: 'normalLink',
    isDisabled: true
	},
	render: (args) => (
		<Link {...args}>Link</Link>
	)
};

export const NormalLink_With_Reverse: Story = {
	args: {
		variant: 'normalLink',
    isReverse: true
	},
	parameters: {
		backgrounds: {
		  default: 'Primary',
		}
	},
	render: (args) => (
    <Link {...args}>Link</Link>
  )
};

export const NormalLink_With_Reverse_And_Disable: Story = {
	args: {
		variant: 'normalLink',
    isReverse: true,
    isDisabled: true
	},
	parameters: {
		backgrounds: {
		  default: 'Primary',
		}
	},
	render: (args) => (
    <Link {...args}>Link</Link>
  )
};

export const LinkWithIconLeft: Story = {
	args: {
		variant: 'linkWithIconLeft'
	},
	render: (args) => (
		<Link {...args}>Link</Link>
	)
};

export const LinkWithIconLeft_With_Disabled: Story = {
	args: {
		variant: 'linkWithIconLeft',
    isDisabled: true
	},
	render: (args) => (
		<Link {...args}>Link</Link>
	)
};

export const LinkWithIconLeft_With_Reverse: Story = {
	args: {
		variant: 'linkWithIconLeft',
    isReverse: true
	},
	parameters: {
		backgrounds: {
		  default: 'Primary',
		}
	},
	render: (args) => (
    <Link {...args}>Link</Link>
  )
};

export const LinkWithIconLeft_With_Reverse_And_Disable: Story = {
	args: {
		variant: 'linkWithIconLeft',
    isReverse: true,
    isDisabled: true
	},
	parameters: {
		backgrounds: {
		  default: 'Primary',
		}
	},
	render: (args) => (
    <Link {...args}>Link</Link>
  )
};

export const LinkWithIconLeft_With_Custom_Icon: Story = {
	args: {
		variant: 'linkWithIconLeft',
    icon: 'icon-download-Icon'
	},
	render: (args) => (
		<Link {...args}>Link</Link>
	)
};

export const LinkWithIconRight: Story = {
	args: {
		variant: 'linkWithIconRight'
	},
	render: (args) => (
		<Link {...args}>Link</Link>
	)
};

export const LinkWithIconRight_With_Disabled: Story = {
	args: {
		variant: 'linkWithIconRight',
    isDisabled: true
	},
	render: (args) => (
		<Link {...args}>Link</Link>
	)
};

export const LinkWithIconRight_With_Reverse: Story = {
	args: {
		variant: 'linkWithIconRight',
    isReverse: true
	},
	parameters: {
		backgrounds: {
		  default: 'Primary',
		}
	},
	render: (args) => (
    <Link {...args}>Link</Link>
  )
};

export const LinkWithIconRight_With_Reverse_And_Disable: Story = {
	args: {
		variant: 'linkWithIconRight',
    isReverse: true,
    isDisabled: true
	},
	parameters: {
		backgrounds: {
		  default: 'Primary',
		}
	},
	render: (args) => (
    <Link {...args}>Link</Link>
  )
};

export const Custom_Icon: Story = {
	args: {
		variant: 'linkWithIconRight',
    icon : 'icon-vrf icon-Edit-icon'
	},
	render: (args) => (
		<Link {...args}>Link</Link>
	)
};

export const Custom_Icon_With_Custom_Icon_Class: Story = {
	args: {
		variant: 'linkWithIconLeft',
    icon : 'icon-vrf icon-download-Icon',
		iconCustomClass: "link-icon-left t-1"
	},
	render: (args) => (
		<Link {...args}>Link</Link>
	)
};

export const SetText: Story = {
	args: {
		variant: 'linkWithIconRight',
    text : 'edit me'
	},
	render: (args) => (
		<Link {...args} />
	)
};

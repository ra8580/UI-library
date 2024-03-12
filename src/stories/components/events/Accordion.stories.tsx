import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Accordion } from "../../../components";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "Events/Accordion",
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const VirginHorizontalAtBlackBg: Story = {
  args: {
    id: 'accordion'
  },
  render: (args) => (
    <Accordion id="accordion" collapseTitle="Read less" expandTitle="Read more">
      <p className="no-margin">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis turpis, ultrices in sem tincidunt, 
        cursus imperdiet eros. Sed volutpat, metus non tristique finibus, lectus enim commodo orci, sit amet hendrerit sapien arcu ut sem.
        Curabitur non dolor enim. Sed hendrerit ligula felis, in euismod nulla bibendum a.
        Integer mollis nisi nisl. Nam tincidunt neque sapien, a posuere dui consectetur sed. Aliquam erat volutpat.
      </p>
    </Accordion>
  )
};

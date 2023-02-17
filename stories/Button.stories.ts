import { Button } from '@/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  tags: ['autodocs'],
  component: Button,
  args: {
    children: 'Label'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Error: Story = {
  args: {
    kind: 'error'
  }
};

export const Large: Story = {
  args: {
    size: 'large'
  }
};

export const Small: Story = {
  args: {
    size: 'small'
  }
};

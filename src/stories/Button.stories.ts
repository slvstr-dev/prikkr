import Button from '@/components/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
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
    variant: 'error'
  }
};

export const Large: Story = {
  args: {
    size: 18
  }
};

export const Small: Story = {
  args: {
    size: 14
  }
};

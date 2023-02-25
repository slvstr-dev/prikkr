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

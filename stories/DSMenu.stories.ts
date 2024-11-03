import type { Meta, StoryObj } from '@storybook/react';
import '../styles/app.scss';

import DSMenu from '../components/design-system/DSMenu';
import '../components/design-system/DSMenu/DSMenu.scss';

const meta: Meta<typeof DSMenu> = {
  component: DSMenu,
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof DSMenu>;

export const Default: Story = {
  args: {
    viewport: 'tablet-view',
    menuItems: [
      {
        label: "Início", 
        href:"/"            
      },
      {
        label: "Transferência", 
        href:"/transferencia" 
      }
    ]
  }
}
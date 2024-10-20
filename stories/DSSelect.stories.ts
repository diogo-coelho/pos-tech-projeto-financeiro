import type { Meta, StoryObj } from '@storybook/react';
import '../styles/app.scss';

import DSSelect from '../components/DSSelect';
import '../components/DSSelect/DSSelect.scss';

const meta: Meta<typeof DSSelect> = {
  component: DSSelect,
  tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof DSSelect>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Selecione o tipo de transação",
    options: [
      "Câmbio de Moeda",
      "DOC/TED",
      "Empréstimo e Financiamento"
    ]
  }
}
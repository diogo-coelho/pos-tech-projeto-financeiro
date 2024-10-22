import type { Meta, StoryObj } from '@storybook/react';
import '../styles/app.scss';

import DSSelect from '../components/design-system/DSSelect';
import '../components/design-system/DSSelect/DSSelect.scss';

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

export const SelectedValue: Story = {
  args: {
    type: "text",
    placeholder: "Selecione o tipo de transação",
    selectedValue: "DOC/TED",
    options: [
      "Câmbio de Moeda",
      "DOC/TED",
      "Empréstimo e Financiamento"
    ],
  }
}
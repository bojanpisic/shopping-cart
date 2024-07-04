import { ReactNode } from 'react';

export type AccordionItemType = {
  key: string;
  title: string;
  render: () => ReactNode;
};

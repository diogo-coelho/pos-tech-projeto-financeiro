export interface ListItem {
  title: string,
  value: number,
  date: Date
}

export interface ListProps {
  items: ListItem[]
}
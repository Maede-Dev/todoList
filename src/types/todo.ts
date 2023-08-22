export interface ITodo {
  title: string;
  id: number;
  category?: string;
  status: string;
}

export enum Categories {
  Personal = "Personal",
  Work = "Work",
  Shopping = "Shopping",
  NoCategory = "No Category",
}

export enum Statuses {
  Done = "Done",
  Todo = "Todo",
}

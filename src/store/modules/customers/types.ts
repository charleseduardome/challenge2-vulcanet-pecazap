export interface lastConversations {
  channel: number;
  finishedAt: number;
}

export interface Customer {
  readonly id: number;
  readonly name: string;
  readonly photo: string;
  readonly company: string;
  readonly lastConversations: lastConversations[];
  readonly observations: string;
}

export interface CustomersState {
  readonly customers: Customer[];
  readonly customerSelected: number;
}

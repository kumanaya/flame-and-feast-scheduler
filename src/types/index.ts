export interface IEvent {
  id: string;
  emoji: string;
  title: string;
  date: string;
  participants: number;
  totalRaised: number;
}

export interface IRow {
  id?: string;
  name: string;
  donatedAmount: number;
}

export interface ISchedule {
  id: string;
  emoji: string;
  title: string;
  date: string;
  description: string;
  rows: IRow[];
}

type SummaryProps = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];

export const MOCK_SUMMARY: SummaryProps = [
  {
    id: "d69c9920-81b7-4a0c-9476-30d59541ab17",
    date: "2023-01-04T03:00:00.000Z",
    completed: 2,
    amount: 2,
  },
  {
    id: "3ac628bf-c932-452d-abb8-4bf44b316dce",
    date: "2023-01-06T03:00:00.000Z",
    completed: 1,
    amount: 1,
  },
  {
    id: "d465acd9-03ee-414f-b1dc-d9a14f4ffef9",
    date: "2023-01-02T03:00:00.000Z",
    completed: 1,
    amount: 1,
  },
  {
    id: "02fdbad8-f52a-4544-9b06-1da419410502",
    date: "2023-01-21T03:00:00.000Z",
    completed: 2,
    amount: 7,
  },
];

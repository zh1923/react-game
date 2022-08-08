interface RouteType {
  key: string;
  path: string;
  menuName: string;
  children?: RouteType[];
}

export const route: RouteType[] = [
  {
    key: "invoices",
    path: "invoices",
    menuName: "Invoices",
    children: [
      {
        key: "invoiceId",
        path: ":invoiceId",
        menuName: "invoiceId",
      },
    ],
  },
  {
    key: "tic-tac-toe",
    path: "tic-tac-toe",
    menuName: "井字棋",
  },
  {
    key: "eliminate-happy",
    path: "eliminate-happy",
    menuName: "消消乐",
  },
];

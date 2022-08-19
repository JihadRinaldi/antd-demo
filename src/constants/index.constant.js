export const FRUITS = ['Banana', 'Mango', 'Orange', 'Apple', 'Grape', 'Cherry'];
export const TABLE_COLUMN = [
  {
    key: '1',
    title: 'ID',
    dataIndex: 'id',
  },
  {
    key: '2',
    title: 'User ID',
    dataIndex: 'userId',
    sorter: (record1, record2) => {
      return record1.userId > record2.userId;
    },
  },
  {
    key: '3',
    title: 'Status',
    dataIndex: 'completed',
    render: (completed) => {
      return <p>{completed ? 'Completed' : 'In Progress'}</p>;
    },
    filters: [
      { text: 'Completed', value: true },
      { text: 'In Progress', value: false },
    ],
    onFilter: (value, record) => {
      return record.completed === value;
    },
  },
];

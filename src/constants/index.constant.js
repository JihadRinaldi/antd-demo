export const FRUITS = ['Banana', 'Mango', 'Orange', 'Apple', 'Grape', 'Cherry'];

export function generateTableData() {
  const maxAge = 40;
  const minAge = 17;

  const TABLE_DATA = [];
  for (let i = 0; i < 100; i++) {
    TABLE_DATA.push({
      key: i,
      name: `User ${i}`,
      age: Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge,
      address: `Jakarta Park no. ${i}`,
    });
  }
  return TABLE_DATA;
}

export const TABLE_COLUMN = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'key',
    fixed: 'left',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'key',
    sorter: (a, b) => a.age - b.age,
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'key',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'key',
    width: 150,
  },

  {
    title: 'Graduated',
    key: 'key',
    render: (payload) => {
      return <p>{payload.age > 20 ? 'Yes' : 'No'}</p>;
    },
    width: 150,
  },
];

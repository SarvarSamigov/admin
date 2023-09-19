import { Table } from "antd"
  export const Table1 = () => {
  return (
    <div>
         <Table dataSource={[
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },{
    key: '4',
    name: 'Mike',
    age: 32,
    address: '10 Sarvar Samigov',
  },
  {
    key: '5',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]} columns={[
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]} />
    </div>
  )
}
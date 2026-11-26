import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import axios from "axios"
import { useEffect, useState } from "react"

const Users = () => {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      )
      setUsers(response.data)
    }

    const addUser = async () => {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        {
          name: 'Test',
          email: "test@gmail.com"
        }
      )
      console.log(response.data);
    }

    const deleteUser = async () => {
      const response = await axios.delete(
        'https://jsonplaceholder.typicode.com/users/11'
      )
      console.log("user deleted");
    }

    useEffect(() => {
        addUser()
        getUsers()
        deleteUser()
    }, [])

  return (
    <div>
      <h1>User Names</h1>
      <hr />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <ul>
          {users.map((user) => {
            return (
              <li>
                Name-{user.name} <br />
                Email-{user.email} <hr />
              </li>
            )
          })}
        </ul> */}
    </div>
  )
}

export default Users
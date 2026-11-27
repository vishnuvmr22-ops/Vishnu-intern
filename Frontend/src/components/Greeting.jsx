import { StudentContext } from '@/StudentContext'
import { useContext } from 'react'

const Greeting = () => {
  const studentName = useContext(StudentContext)

  return (
    <div>
      <h1>Greeting {studentName}</h1>
    </div>
  )
}

export default Greeting

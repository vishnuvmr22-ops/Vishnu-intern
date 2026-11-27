import Students from '@/components/Students'
import { Button } from '@/components/ui/button'
import Users from '@/hooks/Users'

const Service = () => {
  return (
    <div>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Users />
      <Students name="user" age={20} />
    </div>
  )
}

export default Service

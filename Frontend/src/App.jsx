//rafce-react arrow function component export

import Students from "./components/Students"
import {Button} from '@/components/ui/button'
import Count from "./hooks/Count"
const App = () => {
  let name="test"
  return (
    <>
      <div className="pl-96 text-cyan-300 bg-blue-700 ">App</div>
      <Count/>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <h1>This is {name}</h1>

      <Students name="user" age={20} />
    </>
  )
}
export default App
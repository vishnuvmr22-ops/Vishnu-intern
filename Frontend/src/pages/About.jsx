import Parent from '@/components/Parent'
import Count from '@/hooks/Count'
import { StudentContext } from '@/StudentContext'

const About = () => {
  const studentName = 'Student'

  return (
    <div>
      <StudentContext.Provider value={studentName}>
        <Parent />
      </StudentContext.Provider>
      <Count />
    </div>
  )
}

export default About

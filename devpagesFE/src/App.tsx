import Navbar from './components/Navbar'
import AboutPage from './Pages/AboutPage'
import ProjectsPage from './Pages/ProjectsPage'
import ContactsPage from './Pages/ContactsPage'
// import { returnedData } from './sampleData'
import { ReturnedDataType } from './types.types'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState<ReturnedDataType | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      console.log('HELLLOOO fetching data')
      try {
        const response = await fetch('http://localhost:3000/user/jakezegil/dev_page', { mode: 'cors' })
        const data = await response.json()
        console.log('receieved', data)
        setData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])
  console.log('bruhhh')
  console.log('hereee', data)
  return (
    <>
      {/* <Navbar data={data} />
      <AboutPage data={data} />
      <ProjectsPage data={data} />
      <ContactsPage data={data} /> */}
    </>
  )
}

export default App

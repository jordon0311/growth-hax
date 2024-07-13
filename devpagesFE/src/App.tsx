import Navbar from './components/Navbar'
import AboutPage from './Pages/AboutPage'
import ProjectsPage from './Pages/ProjectsPage'
import ContactsPage from './Pages/ContactsPage'
import { returnedData } from './sampleData'
import { ReturnedDataType } from './types.types'

function App() {

  const data = returnedData as ReturnedDataType
  return (
    <>
      <Navbar data={data} />
      <AboutPage data={data} />
      <ProjectsPage data={data} />
      <ContactsPage data={data} />
    </>
  )
}

export default App

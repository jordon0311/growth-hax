// import { returnedData } from './sampleData'
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AboutPage from "./Pages/AboutPage";
import ContactsPage from "./Pages/ContactsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import { ReturnedDataType } from "./types.types";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 30000,
});

function App() {
  const [data, setData] = useState<ReturnedDataType | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  console.log("username", username);

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const user = pathArray.length > 1 ? pathArray[1] : null;
    setUsername(user);
  }, []);
  const fetchData = async () => {
    console.log("HELLLOOO fetching data");
    try {
      const response = await instance.get<ReturnedDataType>(`/user/${username}/dev_page`);
      const data = response.data;
      console.log("receieved", data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    console.log("mount");
    if (!username) return;
    fetchData();
  }, [username]);
  console.log("bruhhh");
  console.log("hereee", data);
  if (!data) return <div>Loading...</div>;
  return (
    <>
      {/* <button onClick={fetchData}>Fetch data</button> */}
      <Navbar data={data} />
      <AboutPage data={data} />
      <ProjectsPage data={data} />
      <ContactsPage data={data} />
    </>
  );
}

export default App;

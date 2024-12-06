import Layout from "./components/Layout"
import Hero from "./components/Hero"
import CoffeeForm from "./components/CoffeeForm"
import Stats from "./components/Stats"
import Authentication from "./components/Authentication"
import History from "./components/History"
import Modal from "./components/Modal"
import { useAuth } from "./context/AuthContext"
import { coffeeConsumptionHistory } from "./utils"



function App() {
  const {globalUser, isLoading, globalData} = useAuth()
  const isAuthenticated = globalUser
  const isData = globalData && !!Object.keys(globalData || {}).length

  const authenticatedContent = (
    <>
    
    <Stats />
    <History />

    </>
  )
  
  return (
      <Layout>
        <Hero />
        <CoffeeForm isAuthenticated={isAuthenticated}/>
        {(isAuthenticated && isLoading) && (
          <p>Loading data...</p>
        )}
        {(isAuthenticated && isData) && (authenticatedContent)}
      </Layout>



  )
}

export default App

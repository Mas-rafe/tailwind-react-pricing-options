
import { Suspense } from 'react'
import './App.css'
import Daisynav from './Components/DaisyNav/Daisynav'
import NavBar from './NavBar/NavBar'
import PricingOptions from './Components/pricingOptions/pricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart'
import MarksChart from './Components/MarksChart/MarksChart'
import axios from 'axios'

const pricingPromise = fetch('PricingData.json').then(res => res.json());
const marksPromise = axios.get('marksData.json')
function App() {


  return (
    <>
     
     <header>
      <NavBar></NavBar>
      {/* <Daisynav></Daisynav> */}
     </header>
    <main>
      <Suspense fallback ={<span className="loading loading-spinner loading-lg"></span>}>
       <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <MarksChart  marksPromise={marksPromise}></MarksChart>

      </Suspense>

  
    <ResultsChart></ResultsChart>
    </main>
    </>
  )
}

export default App

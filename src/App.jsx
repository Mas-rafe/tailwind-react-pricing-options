
import { Suspense } from 'react'
import './App.css'
import Daisynav from './Components/DaisyNav/Daisynav'
import NavBar from './NavBar/NavBar'
import PricingOptions from './Components/pricingOptions/pricingOptions'

const pricingPromise = fetch('PricingData.json').then(res => res.json());
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

    </main>
    </>
  )
}

export default App

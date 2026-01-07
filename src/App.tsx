import { useState } from "react"
import Header from "./components/layout/header"
import Info from "./components/portal/Info/Info";
import Portal from "./components/portal/Portal";
import ErrorPortal from "./components/error/error";
import wilm from "./assets/wilmIo.png"

const App = () => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false)

  return (
    <>
    <Header />
    <div className="flex flex-col p-5 gap-2.5">
      <h2 className="text-2xl">
        Donations to local organizations are the backbone to 
        community advancement. We appreciate your kind heart.
      </h2>
      <div className="flex bg-gray-100 p-2 gap-2 rounded-md items-center justify-between">
        <div>
          <img className="rounded-full" src={wilm} alt="Wilmington IO Group" height={50} width={50}/>
        </div>
        <div className="d-flex-col">
          <p className="font-bold">Wlmington Input Output</p>
          <p>Wimlmington base tech group where everyone is welcome!</p>
        </div>
        <div className="d-flex-col justify-content-center align-items-center">
          <div>
            Quick Donate
          </div>
          <div className="flex flex-col">
            <ul className="flex items-center gap-2">
              <li className="p-2 bg-gray-800 rounded-md"><button onClick={() => setErrorOpen(true)} className="border-0 text-white cursor-pointer"><span>$</span>1</button></li>
              <li className="p-2 bg-gray-800 rounded-md"><button onClick={() => setErrorOpen(true)} className="border-0 text-white cursor-pointer"><span>$</span>5</button></li>
              <li className="p-2 bg-gray-800 rounded-md"><button onClick={() => setInfoOpen(true)} className="border-0 text-white cursor-pointer"><span>$</span>10</button></li>
            </ul>
          </div>
        </div>
      </div>
      {infoOpen && <Portal isOpen={infoOpen} children={<Info />} />}
      {errorOpen && 
      <Portal 
      isOpen={errorOpen} 
      children={<ErrorPortal 
      onCancel={() => setErrorOpen(false) }
        message="Sorry, There seems to be an issue. Please select another donation amount. You can change this amount later" />} 
        />}
    </div>
    </>
    
  )
}

export default App
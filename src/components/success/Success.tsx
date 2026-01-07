import { useState } from "react"
import Portal from "../portal/Portal"
import IlmDonation from "../portal/donation/ilmDonation"

type SuccessTypes = {
    name: string
    email: string
}

const Success = ({ name, email }: SuccessTypes) => {
    const [ilmOpen, setIlmOpen] = useState(false);
    const handleClick = () => {
        setIlmOpen(true)
    }
    return (
        <div className="max-w-120 p-2 flex flex-col gap-1.5">
            <p className="text-2xl font-bold">WOW! What a donation, {name}</p>
            <p>We will get this proccessed immediately and email {email} your receipt.</p>
            <div className="flex justify-between items-center bg-white gap-2 p-2">
                <img src="/ILM_sec.avif" alt="ILM Security" height={40} width={100}/>
                <div className="flex flex-col items-start ">
                    <p>Based on your intrests...</p>
                    <p>Would you be interested in donating to the ILM Security group?</p>
                </div>
            </div> 
            <div className="flex  justify-between p-3">
                    <button className="bg-red-500 p-1 rounded-md cursor-pointer" onClick={handleClick}>Hell NO</button>
            </div> 
            {ilmOpen && <Portal isOpen={ilmOpen} children={<IlmDonation name={name} email={email} />} />}
        </div>
    )
}

export default Success
import { useState } from "react"
import Review from "../review/Review"
import Portal from "../Portal"

type DonationPageTypes = {
    name: string
    email: string
}

const IlmDonation = ({ name, email }: DonationPageTypes) => {
    const [amount, setAmount] = useState(10)
    const [click, setClick] = useState(0)
    const [reviewOpen, setReviewOpen] = useState(false)

    
    const handleIncrease = () => {
        setAmount(prev => prev * 4)
        setClick(prev => prev + 1)
    }

    
    return (
        <>
        <button className="bg-transparent border-0 p-1 cursor-pointer" onClick={handleIncrease}>x</button>
        <div className="flex flex-col w-100 p-2 justify-center items-center">
                <p className="text-2xl font-bold">WOW, you are on a roll!! We cant thank you enough!</p>
                <img className="text-center" src="/ILM_sec.avif" alt="ILM Security Image" height={40} width={100}/>
                <h5>ILM Security Donate</h5>
                <p>Thank you {name}, We appreciate your support!</p>
                <p>A receipt will be sent to {email}</p>
                <div className="d-flex align-items-center ">
                <div className="flex justify-center items-center">
                <p className="m-0">
                    Donation: 
                    <span className="bg-white p-1 rounded-md">${amount}.00</span>
                </p>
                                  
                <div className="flex flex-col justify-center items-center px-1 b-1">
                        <svg 
                        onClick={handleIncrease}
                        xmlns="http://www.w3.org/2000/svg" width="12" height="10" fill="currentColor" className="bi bi-chevron-compact-up" viewBox="0 0 12 12">
                        <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 12 12">
                        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                        </svg>
                    </div>
                </div>
                 </div> 
                {click >= 3 && 
                    <div className="pt-4 -flex flex-column justify-content-center align-items-center">
                        <p>It seems that something is wrong..</p>
                        <button className="bg-gray-800 text-white p-1.5 rounded-md cursor-pointer" onClick={() => {
                            setReviewOpen(true)
                            setAmount(prev => prev * 5)
                            }
                            }>Just leave a review?</button>
                    </div>
                }
                <div className="flex w-100 justify-between p-3">
                    <button className={`p-1 rounded-md ${amount <= 2000 ? `bg-gray-400` : `bg-green-500 cursor-pointer`}`}>Submit</button>
                    <button className="bg-red-500 p-1 rounded-md cursor-pointer" onClick={handleIncrease}>Cancel</button>
                </div>
                {reviewOpen && <Portal isOpen={reviewOpen} children={<Review name={name} email={email} group="ILM Security" onCancel={() => setReviewOpen(false)} />} /> }
                
            </div>
        </>
    )
}

export default IlmDonation
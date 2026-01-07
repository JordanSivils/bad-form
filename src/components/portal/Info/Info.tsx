import { useState } from "react"
import Portal from "../Portal";
import DonationPage from "../donation/DonationPage";

const Info = () => {
    const [email, setEmail] = useState<string >("")
    const [name, setName] = useState<string>("");
    const [donationOpen, setDonationOpen] = useState(false)
    const onSubmit = () => {
        setDonationOpen(true);
    }
    return (
            <div>
                {donationOpen && <Portal isOpen={donationOpen} children={<DonationPage name={name} email={email} donationAmt={10}/>} />}
                <form className="p-3 flex flex-col gap-2">
                    <div className="flex flex-col">
                    <label className="px-2">Full Name</label>
                    <input
                    type="text"
                    className="px-2 border active:outline-0"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>

                <div className="flex flex-col">
                    <label className="px-2">Email</label>
                    <input
                    type="email"
                    className="px-2 border"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>

                <button
                    type="button"
                    disabled={!email || !name}
                    className={`  ${!email || !name ? `` : "bg-green-500"}`}
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Info
type ReviewTypes = {
    name: string
    email: string
    onCancel: () => void
    group: string
}

const Review = ({name, email, onCancel, group}: ReviewTypes) => {
    return (
        <div className="flex flex-col gap-2 p-2 max-w-100 ">
            <h3 className="m-0 font-bold">{group} Review</h3>
            <p>Reviews are just as important as donations, we appreciate your support!</p>
            <p>We will ensure that this message is posted to all {group} social accounts and definitely include your name and email!</p>
            <div className="bg-white p-1 rounded-md">
                <p className="p-1"><span className="font-bold">Sender: </span>{name}</p>
                <p className="p-1"><span className="font-bold">Email: </span>{email}</p>
                <p className="border p-1 rounded-md"><span className="font-bold">Message</span> : This is the biggest group of idiots in ILM. What a joke.</p>
            </div>
            <div>
                <p className="border p-1 rounded-md bg-white">We will also let the authorities know you plan to burn your neigbors house down at 2am tonight and provide them with your I.P. address.</p>
            </div>
            <div>
                <p className="text-sm italic text-fuchsia-950">You cant submit this. But incase you refresh or disconnect, we will automatically send these messages so your generosity is not missed!</p>
            </div>
            <button className="bg-red-500 rounded-md" onClick={onCancel}>Cancel</button>
        </div>
    )
}

export default Review
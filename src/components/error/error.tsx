type ErrorPortalTypes = {
    message: string
    onCancel: () => void
}

const ErrorPortal = ({message, onCancel}: ErrorPortalTypes) => {
    return (
        <div className="flex flex-col gap-3 p-4 max-w-100">
             <h1 className="font-bold text-2xl">Oops...</h1>
             <p>{message}</p>
             <button onClick={onCancel} className="bg-green-500 p-2 rounded-md cursor-pointer">OK</button>
        </div>
    )
}

export default ErrorPortal
export default function Login() {
    return (
        <div className="flex flex-row items-center justify-center min-h-screen bg-maroon">
            <section className="w-full max-w-md p-6 bg-white rounded-lg shadow-md flex-col gap-6">
                <label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-maroon focus:border-maroon"
                        placeholder="Enter your username">
                    </input>
                </label>
                <label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-maroon focus:border-maroon"
                        placeholder="Enter your password">
                    </input>
                </label>
                <button 
                className="w-full px-4 py-2 mt-4 text-white bg-maroon rounded-md hover:bg-maroon-dark focus:outline-none focus:ring focus:ring-maroon focus:border-maroon">
                    Login
                </button>
            </section>
        </div>
    );
}
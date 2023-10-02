import Image from "next/image"

const Signup = () => {
    return (
        <div className="w-full flex flex-col min-h-screen text-[#242731] justify-center items-center">
            <div className="flex flex-col gap-4 justify-center">
                <h1 className="text-xl font-semibold">Get Started</h1>
                <p className="text-sm text-gray-400"> Have an account? <span className="text-[#A162F7]">Sign in</span></p>
                <div className="flex flex-row items-center gap-4">
                    <div className="py-4 px-6 rounded-lg flex flex-row items-center gap-2 border border-[#E6E8EC]">
                        <Image src={"/google.png"} alt="Google icon" width={20} height={20} />
                        <p className="text-base font-medium">Sign in with Google</p>
                    </div>
                    <div className="py-4 px-5 rounded-lg flex flex-row items-center gap-2 bg-[#4776D0]">
                        <Image src={"/Filled.png"} alt="Facebook icon" width={20} height={20} />
                        <p className="text-base text-white font-medium">Sign in with Facebook</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center ">
                    <div className="border h-[1px] w-[48%]"></div>
                    <div className="font-medium text-gray-600 text-base">Or</div>
                    <div className="border h-[1px] w-[48%]"></div>
                </div>
                <div className="bg-white flex flex-col gap-3 shadow-lg rounded-lg p-4">
                    <div className="flex flex-col justify-center gap-2">
                        <h1 className="text-sm font-medium">First Name</h1>
                        <input type="text" name="fname" className="w-full border border-[#B1B5C3] rounded-md py-2 px-4" placeholder="Delowar" />
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                        <h1 className="text-sm font-medium text-black">Last Name</h1>
                        <input type="text" name="lname" className="w-full border border-[#B1B5C3] rounded-md py-2 px-4" placeholder="Hossen" />
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                        <h1 className="text-sm font-medium text-black">Email</h1>
                        <input type="email" name="fname" className="w-full border border-[#B1B5C3] rounded-md py-2 px-4" placeholder="uistore@gmail.com" />
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                        <h1 className="text-sm font-medium text-black">Password</h1>
                        <input type="password" name="fname" className="w-full border border-[#B1B5C3] rounded-md py-2 px-4" placeholder="********" />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <input type="checkbox" />
                        <p className="text-sm text-gray-400">Remember me</p>
                    </div>
                    <p className="text-sm text-[#A162F7]">Forgot your password?</p>
                </div>
                <button className="text-center p-2 bg-[#A162F7] text-white rounded-lg text-semibold text-lg">Sign up</button>
            </div>
        </div>
    )
}

export default Signup
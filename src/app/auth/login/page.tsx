import Image from "next/image";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-[#242731]">
      <div className="flex flex-col gap-6 justify-center">
        <h1 className="text-xl font-semibold">Get Started</h1>
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
        <Link className="text-[#A162F7]" href={"/auth/signup"}>Sign up</Link>
        </p>
        <div className="flex flex-row items-center gap-4">
          <AuthButton
            imageSrc={"/google.png"}
            altText="Google icon"
            buttonText="Sign in with Google"
          />
          <AuthButton
            imageSrc={"/Filled.png"}
            altText="Facebook icon"
            buttonText="Sign in with Facebook"
            bgColor="bg-[#4776D0] text-white"
          />
        </div>
        <div className="flex flex-row gap-2 justify-center items-center ">
          <div className="border h-[1px] w-[48%]"></div>
          <div className="font-medium text-gray-600 text-base">Or</div>
          <div className="border h-[1px] w-[48%]"></div>
        </div>
        <div className="bg-white flex flex-col gap-6 shadow-lg rounded-lg p-4">
          {renderInput("Email", "uistore@gmail.com", "email")}
          {renderInput("Password", "********", "password")}
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" />
            <p className="text-sm text-gray-400">Remember me</p>
          </div>
          <p className="text-sm text-[#A162F7]">Forgot your password?</p>
        </div>
        <button className="text-center p-2 bg-[#A162F7] text-white rounded-lg text-semibold text-lg">
          Sign in
        </button>
      </div>
    </div>
  );
};

interface AuthButtonProps {
  imageSrc: string;
  altText: string;
  buttonText: string;
  bgColor?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  imageSrc,
  altText,
  buttonText,
  bgColor = "bg-white",
}) => (
  <div className={`py-4 px-6 rounded-lg flex flex-row items-center gap-2 border border-[#E6E8EC] ${bgColor}`}>
    <Image src={imageSrc} alt={altText} width={20} height={20} />
    <p className="text-base font-medium">{buttonText}</p>
  </div>
);

const renderInput = (label: string, placeholder: string, type: string) => (
  <div className="flex flex-col justify-center gap-2">
    <h1 className="text-sm font-medium text-black">{label}</h1>
    <input
      type={type}
      name={label}
      className="w-full border border-[#B1B5C3] rounded-md py-3 px-4"
      placeholder={placeholder}
    />
  </div>
);

export default Login;
import reactLogo from "../images/react.svg"
export default function Navbar() {
    return (
        <>
        <header className="bg-[#21222A] h-[90px] px-[25px] py-[30px]">
            <nav className="flex items-center h-full">
                <img className="w-[40px] mr-[7px]" src={reactLogo} alt="react-logo" />
                <span className="text-[#61DAFB] text-[1.4rem] font-bold">ReactFacts</span>
            </nav>
        </header>
        </>
    )
}
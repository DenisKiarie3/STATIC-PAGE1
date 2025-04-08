export default function Main () {
    return (
        <>
            <main className="py-[60px] px-[30px] bg-[url('./images/react-logo.svg')] bg-no-repeat bg-[123%_70%]">
                <h1 className="m-0 font-bold text-3xl">Fun facts about React</h1>
                    <ul className="mt-[35px] list-disc pl-5 marker:text-sky-400 marker:text-[1.3rem]">
                        <li className="py-[10px]">Was first released in 2013</li>
                        <li className="py-[10px]">Was originally created by Jordan Walke</li>
                        <li className="py-[10px]">Has well over 200K stars on GitHub</li>
                        <li className="py-[10px]">Is maintained by Meta</li>
                        <li className="py-[10px]">Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
            </main>
        </>
    )
}
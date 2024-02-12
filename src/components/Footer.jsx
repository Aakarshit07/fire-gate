import Logo from "../assets/logo.png";


function Footer() {
  return (

    <footer className="w-ful bg-[#3f8a90] border-2 border-t-neutral-300 rounded-sm px-4 text-white pt-8 flex flex-col items-center md:flex-row flex-wrap md:justify-between">
        <div className="flex flex-col items-center md:items-start">
            <img className="w-28 h-28" src={Logo} alt="" />
            <p className="py-4 text-gray-300 hover:text-white">Email us: support@firegate.com</p>
        </div>
        <div>
        <h2 className="font-bold text-xl mt-4">Fire Gare &#x1F525;</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded"></div>
            <div className="text-gray-300">
                <p className="hover:text-white">About us</p>
                <p className="hover:text-white">Careers</p>
                <p className="hover:text-white">Privacy Policy</p>
            </div>
        </div>
        <div>
            <h2 className="font-bold text-xl mt-4">Contact Us</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded"></div>
            <div className="text-gray-200">
                <p className="hover:text-white">Discord</p>
                <p className="hover:text-white">X / Twitter</p>
                <p className="hover:text-white">Blog</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
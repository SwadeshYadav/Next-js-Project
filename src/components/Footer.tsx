
const Footer = () => {
  return (
    
    <footer className="bg-neutral-900 shadow-lg text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4 sm:px-6 lg:px-8">
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                <p className="mb-4 text-white"> Music School is a premier institution dedicated to teaching the art
                Music School is a premier institution dedicated to teaching the art
                Music School is a premier institution dedicated to teaching the art </p>
            </div>
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">Quick Link</h2>
                <ul className="text-[18px] text-gray-300">
                    <li>
                        <a href="#" className="hover:text-white transition-colors duration-300 py-2">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition-colors duration-300 py-2">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition-colors duration-300 py-2">
                            Courses
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition-colors duration-300 py-2">
                            Contact Us
                        </a>
                    </li>
                   
                </ul>

            </div>
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                <ul className="text-[18px] text-gray-300 flex felx-row gap-2">
                    
                    <li>
                        <a href="#" className="hover:text-white transition-colors duration-300 py-2">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition-colors duration-300 py-2">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition-colors duration-300 py-2">
                            Instagram
                        </a>
                    </li>
                   
                </ul>

            </div>
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">Contact us</h2>
                <p className="mb-4 text-white"> Uttar Pradesh, India
                Noida,201303
                Email: yadavswadesh9670@gmail.com
                phone: 9670164031
                 </p>
            </div>
        </div>
        <p className="text-center text-xs pt-8">2024 Musical School. All right reserved.</p>

    </footer>
  )
}

export default Footer;
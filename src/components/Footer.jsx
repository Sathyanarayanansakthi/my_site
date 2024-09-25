

function Footer() {
  return (

    <footer className="bg-slate-800 text-white py-10">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between">
        {/* <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">About Us</h2>
          <p className="mt-2 text-sm">
            We are a passionate team dedicated to building innovative solutions for our clients.
          </p>
        </div> */}
  
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Contact</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="https://linkedin.com/in/sathya-narayanans" className="hover:text-indigo-400">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/sathyanarayanansakthi?igsh=MWFzbTZzemNpeXppZw==" className="hover:text-indigo-400">Instagram</a></li>
            <li><a href="https://github.com/Sathyanarayanansakthi" className="hover:text-indigo-400">Github</a></li>
            <li><a href="https://dly.to/sBFI3z051ds" className="hover:text-indigo-400">Daily.dev</a></li>
          </ul>
        </div>
  
        <div>
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p className="mt-2 text-sm">Email: <a href="mailto:info@example.com" className="hover:text-indigo-400">sathyanarayanansakthi04@gmail.com</a></p>
          <p className="mt-1 text-sm">Phone: <a href="tel:+1234567890" className="hover:text-indigo-400">+91 8122103066</a></p>
        </div>
      </div>
  
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
  </footer>
  
  )
}

export default Footer

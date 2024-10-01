import React from 'react'

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-black flex gap-2">
            <p>Terms & Conditions</p>
            <p></p>
            <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
            <div className="social-icon">
                <a href="https://github.com/st101cc" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                </a>
            </div>

            <div className="social-icon">
                <a href="https://www.linkedin.com/in/cherrie-chen-33138724a/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <img src="/assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2" />
                </a>
            </div>

            <div className="social-icon">
                <a href="https://www.instagram.com/cherrie____cy____/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
                </a>
            </div>
        </div>

        <p className="text-white-500"> © 2024 Cherrie. All rights reserved.</p>
    </section>
  )
}

export default Footer
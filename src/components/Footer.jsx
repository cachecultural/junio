import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-galaxy-100 py-12 border-t border-gray-900">
            <div className="container mx-auto px-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            LAD <span className="text-brand-primary">NEBULA</span>
                        </h3>
                        <p className="text-gray-400 text-sm max-w-md">
                            The integrated growth partner for businesses ready to scale.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Instagram</a>
                        <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">LinkedIn</a>
                    </div>
                </div>
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Lad Nebula. All rights reserved.</p>
                    {/* <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

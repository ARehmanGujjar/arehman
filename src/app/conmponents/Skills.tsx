import csslogo from "@/app/public/skills/css_logo.png";
import jslogo from "@/app/public/skills/js_logo.png";
import htmllogo from "@/app/public/skills/html_logo.png";
import bootstraplogo from "@/app/public/skills/bootstrap_logo.png";
import tailwindlogo from "@/app/public/skills/tailwind.png";
import phplogo from "@/app/public/skills/php_logo.png";
import reactlogo from "@/app/public/skills/react.png";
import nextlogo from "@/app/public/skills/nextjs_logo.png";

import Image from "next/image";
const Skills = () => {
  return (
    <>
      <section className="bg-[#19194F] m-1 rounded-md py-12">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mb-5 w-6 h-6 ml-5 sm:ml-20 text-white">
        <path fillRule="evenodd"
          d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          clipRule="evenodd"></path>
      </svg>
        <h1 className="text-3xl sm:text-4xl text-left ml-5 sm:ml-20 mb-10 text-white">Languages</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-5 sm:gap-8 sm:grid-cols-3 lg:grid-cols-4">
            <div className="bg-white  bg-opacity-10 rounded-lg shadow-lg p-3 relative overflow-hidden">
              <div className="flex justify-between items-center w-full py-4 px-3 sm:px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-[#DC4A29] to-slate-600 hover:from-orange-700 hover:to-slate-700">
                HTML
              <Image src={htmllogo} alt="html logo" width={50} height={50}/>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-3 relative overflow-hidden">
              <div className="flex justify-between items-center w-full py-3 px-3 sm:px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-[#2B4CDF] to-slate-300 hover:from-blue-700 hover:to-slate-400">
                CSS
              <Image src={csslogo} alt="css logo" width={50} height={50}/>

              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-3 relative overflow-hidden">
              <div className="flex justify-between items-center w-full py-3 px-3 sm:px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-yellow-400 to-orange-300 hover:from-yellow-500 hover:to-orange-400">
                Javascript
                <Image src={jslogo} alt="js logo" width={50} height={50}/>

              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-3 relative overflow-hidden">
              <div className="flex justify-between items-center w-full py-6 px-3 sm:px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-[#7377AD] to-gray-500 hover:from-blue-800 hover:to-gray-600">
                PHP
                <Image src={phplogo} alt="js logo" width={50} height={50}/>

              </div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl text-left ml-5 sm:ml-20 my-10 text-white">& frameworks</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-5 sm:gap-8 sm:grid-cols-3 lg:grid-cols-4">
            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-3 relative overflow-hidden">
              <div className="flex justify-between items-center w-full py-3 px-2 sm:px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-[#8C16FD] to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Bootstrap
                <Image src={bootstraplogo} alt="bootstrap logo" width={50} height={50}/>

              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-3 relative overflow-hidden">
              <div className="flex justify-between items-center w-full py-4 px-2 sm:px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-[#60BEF8] to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Tailwind
                <Image src={tailwindlogo} alt="tailwind logo" width={50} height={50}/>

              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-3 relative overflow-hidden">
              <div className="flex justify-between items-center w-full py-3 px-1 sm:px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-[#6AD3F3] to-slate-300 hover:from-indigo-700 hover:to-slate-400">
                React JS
                <Image src={reactlogo} alt="react logo" width={50} height={50}/>

              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-3 relative overflow-hidden">
              <div className="flex justify-between items-center w-full py-4 px-2 sm:px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-gray-700 to-slate-200 hover:from-gray-800 hover:to-slate-300">
                Next JS
                <Image src={nextlogo} alt="next logo" width={50} height={50}/>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

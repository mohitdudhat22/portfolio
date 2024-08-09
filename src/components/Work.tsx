import Image from "next/image";

export default function Work() {
  return (
    <>
     <div className="bg-[#1a1a1a] text-white rounded-lg shadow-md p-4 flex flex-wrap justify-center ">
      <div>
      <div className="flex items-center justify-between font-jetbrain">
        <div className="flex items-center">
        <Image
          src="/profile.webp"
          alt="Profile Image"
          width={50}
          height={50}
          className="rounded-full mr-4"
        />
        <h2 className="text-xl">
          Mohit Dudhat
        </h2>
        </div>
        <p className="text-gray-400 text-sm">Remote, India • May 2024 - Present</p>
      </div>
      <div className="font-grotesk">
        <h2 className="text-4xl font-grotesk mb-4">Devkit</h2>
        <p className="text-2xl font-grotesk">Software Engineer Intern</p>
        <p className="text-white text-sm font-jetbrain mt-2">
        • Built Nextjs Based landing page for the company, resulting in a 30% increase in user engagement.
        </p>
        <ul className="flex gap-2 mt-5 justify-start items-center flex-wrap">
          <li className=" text-sm font-jetbrain rounded-md text-[#34c07c]">
            Javascript,
          </li> <li className=" text-sm font-jetbrain  rounded-md text-[#34c07c]">
            Javascript
          </li><li className=" text-sm font-jetbrain  rounded-md text-[#34c07c]">
            Javascript
          </li><li className=" text-sm font-jetbrain  rounded-md text-[#34c07c]">
            Javascript
          </li><li className=" text-sm font-jetbrain  rounded-md text-[#34c07c]">
            Javascript
          </li><li className=" text-sm font-jetbrain  rounded-md text-[#34c07c]">
            Javascript
          </li><li className=" text-sm font-jetbrain  rounded-md text-[#34c07c]">
            Javascript
          </li>
      
        </ul>
      </div>
      </div>
    </div>
    </>
  );
}

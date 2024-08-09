import { WorkData } from "@/data/work";
import Image from "next/image";

function ProjectCard() {
  return (
    <>
      
        <div className="grid grid-cols-2">
        {WorkData.map((item) => {
              return (
                <div className="bg-stone-800/20 border-t-[1px] border-foreground border-solid border-l-[1px] px-8 py-4 select-none cursor-pointer rounded-xl shadow-for md:shadow-[6px_6px_0px_1px_#8646d7]  md:w-[800px]  w-fit flex-col mb-[100px] text-white shadow-md p-4 flex flex-wrap justify-center" key={item.name}>
                  <div className="flex items-center justify-between font-jetbrain">
                    <div className="flex items-center">
                      <Image
                        src="/profile.webp"
                        alt="Profile Image"
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                      />
                      <h2 className="text-xl">Mohit Dudhat</h2>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Remote, India • May 2024 - Present
                    </p>
                  </div>

                  <div className="font-grotesk">
                    <h2 className="text-4xl font-grotesk mb-4">{item.name}</h2>
                    <p className="text-2xl font-grotesk">{item.postion}</p>
                    <p className="text-white text-sm font-jetbrain mt-2">
                      
                    </p>
                    <ul className="flex gap-2 mt-5 justify-start items-center flex-wrap">
                      {item.skills.map((skill, index) => {
                        return (
                          <li
                            className=" text-sm font-jetbrain rounded-md text-[#34c07c]"
                            key={index + skill}
                          >
                            {skill},
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
        </div>
    </>
  );
}

export default function Projects() {
  return (
    <>
      <section className="mx-auto px-4 py-8 max-w-[1050px]">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="cursor-pointer z-[9] rounded-xl w-fit font-jetbrain">
            <h1 className="font-jetbrain text-center text-5xl mb-16">
              <span className="text-green-300">code</span>
              <span className="text-foreground">:</span>
              <span className="text-cyan-300">work </span>
            </h1>
          </div>
          <ProjectCard />
        </div>
      </section>
    </>
  );
}

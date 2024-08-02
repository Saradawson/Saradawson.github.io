import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-green-200 to-purple-400">
      <div className="flex flex-col justify-center bg-slate-50 w-full h-3/4 rounded-lg">
        <div className="flex justify-center items-start w-full h-full p-4 bg-gradient-to-b from-red-200">
          <Image 
            className="w-1/4 h-auto shrink-0 grow-0 rounded-full bg-red-50 float-left"
            src="/headShot.JPG"
            alt="headshot"
            width={1200}
            height={600}>
          </Image>
          <div className="flex flex-col h-full gap-5 m-7 items-center justify-center w-full text-center">
            <h1 className="text-7xl text-slate-400 font-bold font-sans">Full-stack-web Developer</h1>
            <p className="text-slate-400 text-xl max-w-prose text-left leading-loose">{`Hi, my name is Sara! I am Currently located in Salt Lake City, where the city is small and the mountains are big. I specialize in Next.js, Tailwind CSS, and Typescript. I am dedicated to finding a developer job, whether it is remote or in person to put my skills to work.`}
            </p>
            <div className="flex gap-3">
              <Link
              href="https://www.linkedin.com/in/sara-dawson13/">
                <Image
                src="/linkedInIcon.png"
                alt="LinkedIn icon by Icons8"
                width={50}
                height={50}/>
              </Link>
              <Link
              href="https://www.linkedin.com/in/sara-dawson13/">
                <Image
                src="/githubIcon.png"
                alt="Github icon by Icons8"
                width={50}
                height={50}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <div className="sidebar grid grid-cols-2 h-[84vh] bg-purple-300 place-items-baseline">
        <ul className="grid gap-5 pl-4 pt-40">
          <li>gmail</li>
          <li>github</li>
          <li>linkedin</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="item border-2 border-red-500 grid w-full">
        <div className="grid place-content-center h-[84vh]">
          <h1 className="text-8xl font-bold">ASHISH KUMAR</h1>
          <div className="flex justify-center">
            <p class="text-2xl">
              An experienced full-stack developer , tech instructor and writer.
              <br></br> I enjoy building web-based applications that leaves a
              lasting impression on users. <br></br>I contribute to Open Source
              and write about my work on medium.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded text-2xl">
              Resume
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

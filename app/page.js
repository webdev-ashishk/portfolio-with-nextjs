import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex">
      <div className="sidebar grid grid-cols-2 h-[84vh] place-items-baseline opacity-80">
        <ul className="grid gap-8 pl-4 pt-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="gmail"
            width={50}
            height={50}
            className="cursor-pointer"
          >
            <Link href="https://google.com">
              <path fill="#ECEFF1" d="M2 2h12v12H2z"></path>
              <path fill="#CFD8DC" d="M8 9.262 14 14V4.646z"></path>
              <path
                fill="#F44336"
                d="M14.5 2H14L8 6.738 2 2h-.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2V4.646l6 4.615 6-4.616V14h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"
              ></path>
            </Link>
          </svg>
          {/* github */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="github"
            width={50}
            height={50}
            className="cursor-pointer"
          >
            <Link href="https://facebook.com">
              <path
                fill="#5C6BC0"
                d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
              ></path>
            </Link>
          </svg>
          {/* linked  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 72 72"
            id="linkedin"
            width={50}
            height={50}
            className="cursor-pointer"
          >
            <Link href="https://microsoft.com">
              <g fill="none" fill-rule="evenodd">
                <g>
                  <rect width="72" height="72" fill="#117EB8" rx="4"></rect>
                  <path
                    fill="#FFF"
                    d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
                  ></path>
                </g>
              </g>
            </Link>
          </svg>
        </ul>
      </div>
      <div className="item grid w-full">
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

export function Footer() {
  return (
    <>
      <p className="text-center pt-12 ">
        Site built with React, Tailwind CSS, and Chart.js
      </p>
      <div className="w-full text-lg flex justify-center items-center gap-4">
        <p className="p-2">2023</p>
        <a
          className="flex gap-4 items-center p-2"
          href="https://www.linkedin.com/in/denver-siu/"
        >
          <p className=" transition duration-200 hover:text-blue-700">
            Denver Siu
          </p>
          <span className="devicon-linkedin-plain text-2xl text-blue-500 hover:text-blue-700 transition duration-150"></span>
        </a>
        <a
          className="flex gap-4 items-center p-2"
          href="https://github.com/dpsiu"
        >
          <p className=" transition duration-200 hover:text-blue-700">dpsiu</p>
          <span className="devicon-github-original text-2xl text-blue-500 hover:text-blue-700 transition duration-150"></span>
        </a>
      </div>
    </>
  );
}

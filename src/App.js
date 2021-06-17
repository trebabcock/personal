import logo from "./logo.svg";
import "./App.css";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  return (
    <div
      class="
          bg-gray-800
          lg:px-24
          md:px-24
          sm:h-64
          p-4
          lg:h-44
          md:h-44
          w-full
          flex flex-row flex-grow
          border-b-4 border-green-400
          space-y-4
          mb-2
        "
    >
      <div class="block md:px-40 lg:px-40">
        <img
          class="rounded-lg float-left mr-2 mb-2 lg:mb-4 md:mb-4 object-scale-down w-36 h-36"
          src="tre.jpg"
        />
        <p class="text-green-400 text-3xl">Tre Babcock</p>
        <p class="break-words text-gray-400">
          Hello, my name is Bobby! I usually go by Tre, but you can call me
          whatever you want! I'm a software developer with 9 years of personal
          experience. I have experience with many languages, but I use C#, Go,
          and JavaScript most often. I use some other languages, such as Ruby,
          Lua, PHP, C, and Rust when the situation calls for it. I also have 6
          years of experience with query and scripting languages such as Bash
          and SQL.
        </p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <div class="p-4 flex flex-col items-center text-green-400 text-lg">
        <h1 class="text-3xl font-bold mb-2 text-center">Links</h1>
        <div class="flex flex-col md:flex-row lg:flex-row items-center">
          <p class="border m-2 border-green-400 px-4 p-1 rounded-xl bg-green-400 text-gray-700 cursor-pointer">
            <a href="https://github.com/trebabcock" target="_blank">
              GitHub
            </a>
          </p>
          <p class="border m-2 border-green-400 px-4 p-1 rounded-xl bg-green-400 text-gray-700 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/bobby-babcock-51603011b"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
          <p class="border m-2 border-green-400 px-4 p-1 rounded-xl bg-green-400 text-gray-700 cursor-pointer">
            <a href="https://trebabcock.me/resume.pdf" target="_blank">
              Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div class="flex flex-col items-center px-4 mt-4">
      <div>
        <h1 class="mb-4 text-3xl text-green-400 font-bold text-center">
          Skills
        </h1>
        <div>
          <h2 class="text-xl text-green-400 font-bold">
            Programming Languages
          </h2>
          <div class="py-2 mb-4 space-y-2 space-x-1 text-green-300">
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Golang
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Python
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              C#
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Java
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              JavaScript
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Lua
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Ruby
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              C
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Vala
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Rust
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-xl text-green-400 font-bold">Technologies</h2>
          <div class="py-2 mb-4 space-y-2 space-x-1 text-green-300">
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              SQL
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Bash
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              RESTful APIs
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Linux
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Git
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              HTML/CSS
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Docker
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Nginx
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-xl text-green-400 font-bold">Frameworks</h2>
          <div class="py-2 mb-4 space-y-2 space-x-1 text-green-300">
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Vue.js
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              React
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Svelte
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Node.js
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              ASP.NET
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Bootstrap
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Tailwind
            </div>
            <div class="inline-block px-4 py-1 border-2 transition ease-in-out duration-200 hover:bg-green-400 hover:text-gray-800 border-green-400 rounded-xl">
              Gtk
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div class="bg-transparent p-4">
      <h1 class="text-3xl mb-4 font-bold text-green-400 text-center">
        Projects
      </h1>
      <div class="flex flex-col items-center">
        <div class="flex lg:flex-row md:flex-row flex-col">
          <div class="m-2 cursor-pointer border-b-4 hover:border-gray-800 border-green-400 transition ease-in-out duration-200 p-4 text-gray-400 hover:text-gray-800 bg-gray-800 w-80 h-80 rounded-xl hover:bg-green-400 transform hover:-translate-y-2 hover:shadow-md">
            <div class="text-center bg-transparent">
              <p class="text-3xl pb-2">Teamhub</p>
              <p class="break-words overflow-hidden">
                Teamhub is a place for teams to collaborate and share ideas. It
                is still very much a work in progress. I'm using Vue.js and
                Electron, with Tailwind CSS for styling. Check out the{" "}
                <a
                  href="https://github.com/trebabcock/teamhub"
                  class="text-green-600"
                >
                  GitHub repo!
                </a>
              </p>
            </div>
          </div>
          <div class="m-2 cursor-pointer border-b-4 hover:border-gray-800 border-green-400 transition ease-in-out duration-200 p-4 text-gray-400 hover:text-gray-800 bg-gray-800 w-80 h-80 rounded-xl hover:bg-green-400 transform hover:-translate-y-2 hover:shadow-md">
            <div class="text-center bg-transparent">
              <p class="text-2xl pb-2">Teamhub Backend</p>
              <p class="break-words overflow-hidden">
                This is the backend for Teamhub. It's written in Go, and uses
                PostgreSQL as the database. Most of the functionality is
                complete, except for some very important stuff like
                authentication and middleware, and then a few more handlers I
                need to write. Check out the{" "}
                <a
                  href="https://github.com/trebabcock/teamhub-backend"
                  class="text-green-600"
                >
                  GitHub repo!
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="flex lg:flex-row md:flex-row flex-col">
          <div class="m-2 cursor-pointer border-b-4 hover:border-gray-800 border-green-400 transition ease-in-out duration-200 p-4 text-gray-400 hover:text-gray-800 bg-gray-800 w-80 h-80 rounded-xl hover:bg-green-400 transform hover:-translate-y-2 hover:shadow-md">
            <div class="text-center bg-transparent">
              <p class="text-2xl pb-2">Gemchan</p>
              <p class="break-words overflow-hidden">
                Gemchan is a textboard for Gemini. It's written in Go. You can
                make posts on different boards, and comment on those posts. It's
                currently online, but it's not very active. Just visit
                gemini://gemchan.space/ in any Gemini client. I wrote an article
                about making something like this on Derek Taylor's website. You
                can view that{" "}
                <a
                  href="https://distrotube.com/guest-articles/dynamic-capsules-with-go.html"
                  class="text-green-600"
                >
                  here
                </a>
                . Check out the{" "}
                <a
                  href="https://github.com/trebabcock/teamhub-backend"
                  class="text-green-600"
                >
                  GitHub repo!
                </a>
              </p>
            </div>
          </div>
          <div class="m-2 cursor-pointer border-b-4 hover:border-gray-800 border-green-400 transition ease-in-out duration-200 p-4 text-gray-400 hover:text-gray-800 bg-gray-800 w-80 h-80 rounded-xl hover:bg-green-400 transform hover:-translate-y-2 hover:shadow-md">
            <div class="text-center bg-transparent">
              <p class="text-2xl pb-2">Forces Simulator</p>
              <p class="break-words overflow-hidden">
                This is (supposed to be) a fundamental forces simulator, but I
                only got around to implementing Gravity. The only reason this
                project is on here is because it's the only GitHub-ready C#
                project I have. C# is the first language I learned, 9 years ago,
                but I mostly use Go these days. Check out the{" "}
                <a
                  href="https://github.com/trebabcock/Forces-Simulator"
                  class="text-green-600"
                >
                  GitHub repo!
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="flex lg:flex-row md:flex-row flex-col">
          <div class="m-2 cursor-pointer border-b-4 hover:border-gray-800 border-green-400 transition ease-in-out duration-200 p-4 text-gray-400 hover:text-gray-800 bg-gray-800 w-80 h-80 rounded-xl hover:bg-green-400 transform hover:-translate-y-2 hover:shadow-md">
            <div class="text-center bg-transparent">
              <p class="text-2xl pb-2">This Website</p>
              <p class="break-words overflow-hidden">
                This website was built from scratch using React and Tailwind. I
                plan to add more over time, including data that is fetched from
                an API that I am writing. And of course, you can check out the{" "}
                <a
                  href="https://github.com/trebabcock/personal"
                  class="text-green-700"
                >
                  GitHub repo!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div class="bg-gray-800 px-4 py-1 border-t-4 border-green-400 text-gray-500">
      <p class="text-center text-xs">Copyright &copy; 2021 Tre Babcock</p>
    </div>
  );
}

function App() {
  return (
    <div className="App" class="bg-gray-700">
      <Header />
      <Contact />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

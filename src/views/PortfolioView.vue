<template>
  <div
    class="w-full h-full bg-transparent text-slate-800 dark:text-slate-300 flex items-center justify-center"
  >
    <div class="w-full px-4 md:px-0 md:w-[70%]">
      <div class="py-4 w-full border-b-2 border-slate-300">
        <p class="text-3xl">Work Experience</p>
        <br />
        <p class="text-xl">Software Developer - Marcia Brenner Associates</p>
        <p class="text-sm text-slate-500">Apr, 2022 - Present</p>
        <div class="w-full">
          <p class="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <br />
        <p class="text-xl">Application Support Analyst - Q2 Software</p>
        <p class="text-sm text-slate-500">Aug, 2021 - Apr, 2022</p>
        <div class="w-full">
          <p class="leading-relaxeed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div class="py-4 w-full border-b-1 border-slate-400">
        <p class="text-3xl">Projects</p>
        <br />
        <p class="text-xl">Work Projects</p>
        <p class="text-sm text-slate-500">
          Internal tools that I can talk about, but cannot share.
        </p>
        <p class="mb-3 leading-relaxed">
          <span class="font-bold">wrap</span> - A command line utility to
          quickly bundle plugins at work. With a single command, it clones the
          repository, checks out the desired branch, parses the XML plugin
          manifest, then adds the necessary files to a zip archive with the
          plugin name and version. This took the process down from several
          minutes to a few seconds. Written in Go.
        </p>
        <p class="leading-relaxeed">
          <span class="font-bold">dsync</span> - A command line utility for
          synchronizing files in a local repository with files on a remote SMB
          share. During development, we update the code on our development
          servers as we code. This tool watches for file and directory changes
          locally, and mirrors those changes on the remote server. It also
          contains a deploy feature that will push all of the code in the local
          repository to the remote server, which is useful for switching between
          development and release branches. Written in Go.
        </p>
        <br />
        <p class="text-xl">Side Projects</p>
        <p class="text-sm text-slate-500">
          Projects that I work on in my spare time.
        </p>
        <p class="leading-relaxeed">
          Current Focus - A federated communication server. I'm working on a
          macOS client in tandem with the server, and I want to eventually make
          an iOS client as well.
        </p>
      </div>
    </div>
  </div>
</template>

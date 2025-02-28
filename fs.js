class Folder {
  constructor(data) {
    this.parent = null;
    this.children = {};

    this.data = {
      name: "folder",
      icon: "img/desktop/Folder.png",
      title: "Folder",
      contents: [],
    };

    if (data !== undefined) {
      this.data = {
        ...this.data,
        ...data,
      };
    }
  }

  calculatePath() {
    if (this.parent === null) {
      return ["C:"];
    }

    return [...this.parent.calculatePath(), this.getName()];
  }

  getName() {
    return this.data.name;
  }

  getIcon() {
    return this.data.icon;
  }

  getContents() {
    return this.data.contents;
  }

  getChildren() {
    return this.children;
  }

  addChild(child) {
    child.parent = this;
    this.children[child.getName()] = child;
  }

  async getChild(name) {
    if (!(name in this.children)) {
      return null;
    }
    return this.children[name];
  }

  hasChild(name) {
    return name in this.children;
  }
}

class Filesystem {
  constructor() {
    this.root = new Folder({ name: "C:", title: "C:" });
  }

  async get(path) {
    const segs = path.split("/");

    if (segs.length === 1) {
      return this.root;
    }

    const searcher = async (segs, folder) => {
      if (folder === null) return null;

      if (segs.length === 0) {
        return folder;
      }

      const next = await folder.getChild(segs[0]);

      return await searcher(segs.slice(1), next);
    };

    return await searcher(segs.slice(1), this.root);
  }

  addChild(folder) {
    this.root.addChild(folder);
  }

  async loadFilesystem() {
    // file extension -> thumb image helpers
    const get_extension = (name) =>
      name.split(".").slice(-1).pop().toLowerCase();
    const extension_map = {
      exe: "img/desktop/EXE.png",
      com: "img/desktop/EXE.png",
      ini: "img/desktop/INI.png",
      cfg: "img/desktop/INI.png",
      txt: "img/desktop/TextFile.png",
      wav: "img/desktop/WavFile.png",
      dll: "img/desktop/DLL.png",
      bat: "img/desktop/BatchFile.png",
      bmp: "img/desktop/Bitmap.png",
      sys: "img/desktop/SystemFile.png",
    };
    const get_thumb = (name) => {
      const ext = get_extension(name);
      if (ext in extension_map) {
        return extension_map[ext];
      }

      return "img/desktop/File.png";
    };

    // recursion helper through the fs dump
    const recurse_helper = (folder, info) => {
      // if there are files ...
      if ("_files" in info) {
        // ... hydrate them
        folder.data.contents = info._files.map((name) => ({
          img: get_thumb(name),
          title: name,
          launch:
            "dialog:Error|Disk Error|Disk read error!<br/>Please insert the Windows 98 installation floppy to continue.|ARI",
        }));
      }

      const forbidden = [".fseventsd", "_files"];
      for (let key in info) {
        // skip forbidden file names (leftover from scrapes)
        if (forbidden.indexOf(key) !== -1) {
          continue;
        }

        // don't stomp on default filesystem
        if (folder.hasChild(key)) {
          continue;
        }

        // make a new folder ...
        const new_folder = new Folder({
          title: key,
          name: key,
        });

        // ... populate it ...
        recurse_helper(new_folder, info[key]);

        // ... and add it to this folder
        folder.addChild(new_folder);
      }
    };

    const fs_scrape = await fetch("/data/filesystem.json").then((r) =>
      r.json()
    );

    recurse_helper(this.root, fs_scrape);
  }
}

window.fs = new Filesystem();

/* --- DEFAULT FILESYSTEM --- */
window.fs.addChild(
  new Folder({
    icon: "img/desktop/MyDocuments.png",
    name: "My Documents",
    contents: [
      {
        img: "img/desktop/WordPad.png",
        title: "Resume.pdf",
        launch: "resume",
      },
      {
        img: "img/desktop/WordPad.png",
        title: "cv.pdf",
        launch: "cv",
      },
      {
        img: "img/desktop/InternetExplorer.png",
        title: "GitHub",
        shortcut: true,
        launch: "web:https://github.com/thounny",
      },
      {
        img: "img/desktop/InternetExplorer.png",
        title: "LinkedIn",
        shortcut: true,
        launch: "web:https://www.linkedin.com/in/thounny/",
      },
      {
        img: "img/desktop/InternetExplorer.png",
        title: "YouTube",
        shortcut: true,
        launch: "web:https://www.youtube.com/channel/UCTPSmsWGmrVXjVXD2DPXoUQ",
      },
      {
        img: "img/desktop/InternetExplorer.png",
        title: "My Blog",
        shortcut: true,
        launch: "web:https://www.thounny.com/blog/",
      },
      {
        img: "img/desktop/Email.png",
        title: "Email",
        shortcut: true,
        launch: "email",
      },
      {
        img: "img/desktop/MyBriefcase.png",
        title: "My Portfolio",
        shortcut: true,
        launch: "portfolio",
      },
      {
        img: "img/special/arena-logo.png",
        title: "Are.na",
        shortcut: true,
        launch: "web:https://www.are.na/thounny-keo/s-tier-shit",
      },
      {
        img: "img/desktop/SystemFile.png",
        title: "Welcome",
        shortcut: true,
        launch: "welcome",
      },
    ],
  })
);

window.fs.addChild(
  new Folder({
    name: "Recycling Bin",
    icon: "img/desktop/RecyclingBin.png",
    contents: [
      {
        img: "img/desktop/InternetExplorer.png",
        title: "Tone",
        shortcut: true,
        launch: "web:https://thounny.com",
      },
      {
        img: "img/desktop/WavFile.png",
        title: "pretty_brown_eyes.wav",
        shortcut: true,
        launch: "web:https://www.youtube.com/watch?v=OgCv-qrlRrI",
      },
    ],
  })
);

window.fs.addChild(
  new Folder({
    name: "Network Neighborhood",
    icon: "img/desktop/NetworkNeighborhood.png",
    contents: [
      {
        img: "img/desktop/NetDrive.png",
        title: "Host Computer",
        launch: `dialog:img/dialog/Attention.png|just kidding.|just kidding.<br>but that wouldve been pretty crazy huh?|yeah.`,
      },
      {
        img: "img/desktop/Web Folders.png",
        title: "Web Folders",
        launch: "nop",
      },
      {
        img: "img/desktop/Entire Internet.png",
        title: "Entire Internet",
        launch: "nop",
      },
    ],
  })
);

window.fs.root.children["My Documents"].addChild(
  new Folder({
    name: "My Papers",
    icon: "img/desktop/Favorites.png",
    contents: [
      {
        img: "img/special/ArXivFile.png",
        title: "javascript...",
        shortcut: true,
        launch:
          "web:https://dev.to/thounny/building-a-room-cost-estimator-with-javascript-45h7",
      },
      {
        img: "img/desktop/WordPad.png",
        title: "Code Tone",
        shortcut: true,
        launch:
          "web:https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7256298468892143616",
      },
    ],
  })
);

// hello

window.fs.root.children["My Documents"].addChild(
  new Folder({
    name: "My Talks",
    icon: "img/desktop/Favorites.png",
    contents: [
      {
        img: "img/desktop/Mplayer.png",
        title: "Code Core: Coding Journeys",
        shortcut: true,
        launch: "web:https://youtu.be/NNLbJ_gWW_Q?si=DdfZ_nXuVJCu1Emg",
      },
      {
        img: "img/desktop/Mplayer.png",
        title: "Code Core: Building the Foundation",
        shortcut: true,
        launch: "web:https://youtu.be/nvXc3rI8xuc?si=mkLsA7e0vRK6mkqX",
      },
    ],
  })
);

window.fs.loadFilesystem();

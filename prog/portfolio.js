class PortfolioProgram extends Program {
  createWindow() {
    let wminfo = {
      name: "Portfolio - Work",
      title: "Portfolio - Work",
      icon: "img/desktop/MyDocuments.png",
      y: 40,
      x: isMobileBrowser() ? 20 : 120,
    };

    let body = `
            <div class="typography">
    <h2>Portfolio / Work</h2>
    <subtitle>Here's some projects I've worked on in the past.</subtitle>
    
    <hr class="hr--accent2"/>

    <p>
        <i>Note that some works here may be proprietary, so limited information may be released.</i>
    </p>

    <b>Year Up United</b> (<a href="https://www.yearup.org/" target="_blank">web</a>)
    <ul>
        <li>
            <b>Application Development - Frontend Track</b><br/>
            Completed 200+ hours of hands-on training in <b>Frontend Development</b> and <b>Full-Stack Development</b>.  
            Proficient in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>Python</b>, <b>Java</b>, and <b>SQL</b>.
        </li>
        <li>
            <b>Peer Tutor</b><br/>
            Assisted classmates with **Frontend Development** topics like <b>Bootstrap</b> and <b>JavaScript</b> fundamentals, strengthening technical skills and teamwork.
        </li>
    </ul>

    <br/>
    <b>QGISTIX (formerly Greenwave Electronics)</b>
    <ul>
        <li>
            <b>Laptop Technician</b><br/>
            Tested and evaluated laptops, ensuring quality standards were met. Graded laptops with a
            95% average score and used <b>KillDisk</b> to securely wipe drives of 250+ laptops daily.
        </li>
    </ul>

    <br/>
    <b>CBSI Holdings Inc.</b>
    <ul>
        <li>
            <b>Inbound Customer Service Representative</b><br/>
            Managed <b>200+ calls daily</b>, ensuring <b>95% customer satisfaction</b>.
            Ensured <b>100% billing accuracy</b> using <b>Spectrum Agent II</b> and improved efficiency by
            <b>20%</b> through multitasking.
        </li>
    </ul>
</div>
`;

    return [wminfo, body];
  }

  createResearchWindow() {
    let wminfo = {
      name: "Portfolio - Research",
      title: "Portfolio - Research Projects",
      icon: "img/desktop/MyDocuments.png",
      y: 80,
      x: isMobileBrowser() ? 60 : 200,
    };

    let body = `
            <div class="typography">
                <h2> Portfolio / Editorials + Stories </h2>
                <subtitle>here are some editorials and stories i've written.</subtitle>
                
                <hr class="hr--accent2"/>

                <br/>
                <b>Neural Void: A Symphony of Silence</b><br/><span>Thounny Keo (2025)</span>
                <p>
                <details>
                    <summary>Abstract</summary>
                    <div class="typography--normaltext">
                    A crew aboard the research vessel Ananke orbits a mysterious "neural star," an anomaly emitting faint data pulses that defy explanation. Initially stable, the mission becomes perilous as the star begins influencing the ship's systems and the crew’s neural implants, creating shared memories and hallucinations. The protagonist, Dr. Eira Voss, discovers the star's signal is uniquely synchronized with her own mind, hinting at an unsettling connection. As paranoia grows and reality fractures, Eira grapples with the star's purpose and the creeping suspicion that her identity may not be her own. The crew must navigate a descent into psychological and existential horror, where survival depends on deciphering the star’s intent before it consumes them.
                    </div>
                </details>
                </p>
            <p>
    <a href="#" target="_blank">Read the short novel <em>COMING SOON</em></a>. This is an adaptation for publication of my creative honours project, which explores psychological horror and surrealism in a spacefaring context. You can view related inspirations and concepts soon.
</p>


                <br/>
                <b> Research Interests </b><br/>
                <p>
                    Research topics I am interested in pursuing:
                </p>
                <ul>
                    <li>Human-Computer Interaction <b>(HCI)</b> in Web Design</li>
                    <li>Designing for Digital Minimalism: Striking a Balance Between Simplicity and Functionality</li>
                    <li>The Role of Emotion in User Experience: Designing for Emotional Engagement</li>
                    <li>Exploring the Intersection of Brutalist Design and Modern Digital Interfaces</li>
                    <li>Ethics of Digital Architecture: The Future of Virtual Spaces and Social Interaction</li>
                    <li>Reclaiming the Human Touch in Tech: Bridging the Gap Between Digital and Physical Realities</li>
                </ul>
            </div>
        `;

    return [wminfo, body];
  }
  createSchoolWindow() {
    let wminfo = {
      name: "Portfolio - School",
      title: "Portfolio - School Related Projects",
      icon: "img/desktop/MyDocuments.png",
      y: 60,
      x: isMobileBrowser() ? 40 : 160,
    };

    let body = `
            <div class="typography">
                <h2> Portfolio / School </h2>
                <subtitle> Here are some projects I've built while at Year Up United.</subtitle>
                
                <hr class="hr--accent2"/>

                <br/>
                <b> Enjoy The Outdoors </b> (<a href="https://thounny.github.io/capstone-2/" target="_blank">capstone 2</a>) <br/>
                <p>
                    a retro-inspired digital experience celebrating the beauty and adventure of nature.
                </p>
                <ul>
                    <li> <a href="https://thounny.github.io/capstone-2/books/books.html"> Raw Earth </a> <br/><br/>
                    <em>Raw Earth</em> an exploration of the digital wilderness-a landscape stripped of polish, comfort,
                    and compromise.
                    </li>
                </ul>


                <br/>
                <b> Windows XP Chatroom </b><br/>
                <p>
                    Windows XP-themed chatroom application built with HTML, CSS, JavaScript, and 98.css for our final project.
                </p>
                <ul>
                    <li>
                        <a href="https://thounny.github.io/Capstone-3/" target="_blank">capstone 3</a><br/>
                        retro-inspired Windows XP-style chatroom featuring user authentication, real-time posts, likes, customizable user desktops, and a Webamp music player for personalized music playlists, built with HTML, CSS, JavaScript, 98.css, and connected to the MicroblogLite backend API.
                    </li>
                    <li>
                        <a href="https://thounny.github.io/E-Commerce-Poster-Shop/" target="_blank">E-Commerce Poster Shop</a><br/>s
                        capstone project for my Frontend Development class at Year Up United showcases original posters designed by me and integrates a personalized music experience through the Webamp player with a visualizer.<br/>

                    </li>
                    <li>
                        <a href="https://thounny.github.io/financial-calculators/" target="_blank">Financial Calculators</a><br/>
                        This project is a collection of financial calculators, including a Mortgage Calculator, Future Value Calculator, and Present Value of Annuity Calculator, built with HTML, CSS, Bootstrap, 98.css for a retro aesthetic, and JavaScript for functionality.

These calculators provide users with essential financial information, such as mortgage payments, future savings growth, and annuity present values.
                    </li>
                </ul>
            </div>
        `;

    return [wminfo, body];
  }

  createPersonalWindow() {
    let wminfo = {
      name: "Portfolio - Personal",
      title: "Portfolio - Side Projects",
      icon: "img/desktop/MyDocuments.png",
      y: 100,
      x: isMobileBrowser() ? 80 : 240,
    };

    let body = `
            <div class="typography">
                <h2> Portfolio / Personal </h2>
                <subtitle> various things v've created in my spare time.</subtitle>
                
                <hr class="hr--accent2"/>

                <ul>
                    <li>
                        <a href="https://wired-ai.vercel.app/" target="_blank">WiredAI</a><br/>
                        WiredAI: —your gateway to The Wired. React, TailwindCSS, Appwrite, and Google Gemini.
                    </li>
                    <li>
                        <a href="https://thounny.github.io/30-day-code-challenge/" target="_blank">30 Day Code Challenge</a><br/>
                        Showcase directory for my 30-day Daily Code Challenge.
                    </li>
                    <li>
                        <a href="https://thounny.github.io/DAY_009/" target="_blank">Markdown Note Taker</a><br/>
                        Markdown Note Taker with 98.css.
                    </li>
                    <li>
                        <a href="https://finance-tracker-rosy.vercel.app/" target="_blank">Wired Tracker</a><br/>
                        Finance Tracker With React, Nextjs, and Honojs.
                    </li>
                    <li>
                        <a href="https://github.com/thounny/ToneXP" target="_blank">ToneXP</a><br/>
                        Retro gaming platform built with Next.js + Prisma <em>(WIP)</em>.
                    </li>
                    <li>
                        <a href="https://github.com/thounny/windows98-theme" target="_blank">Windows 98 Theme</a><br/>
                        A nostalgic VS Code theme inspired by the classic Windows 98 UI.
                    </li>
                    <li>
                        <a href="https://wired-notes.vercel.app/" target="_blank">Wired Notes</a><br/>
                        A CRUD (Create, Read, Update, Delete) note-taking application using vanilla JavaScript.
                    </li>
                    <li>
                        <a href="https://github.com/thounny/toneos.github.io" target="_blank">This Website</a><br/>
                        A faux-desktop environment with the look of windows 98, built with vanilla Javascript.

                    </li>
                </ul>

            </div>
        `;

    return [wminfo, body];
  }

  onAttach() {
    window.wm.openWindow(...this.createSchoolWindow());
    window.wm.openWindow(...this.createResearchWindow());
    window.wm.openWindow(...this.createPersonalWindow());
  }
}

window.pm.registerPrototype("portfolio", PortfolioProgram);

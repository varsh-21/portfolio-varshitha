import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import SocialIcons from "./Social";
import { Link } from "gatsby";

type Props = {};

function Home({}: Props) {
  return (
    <Layout>

      {/* Hero Section */}
      <div className="varsh_bio">
        <StaticImage
          src="../assets/Hello.webp"
          height={200}
          width={200}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Varshitha BR"
        />
        <div className="varsh_bio" style={{ color: "#fff" }}>
          <p className="varsh_tagline">Creative Portfolio · CODE & Design the future</p>
          <h2>Hi,&thinsp;I'm Varshitha <span className="varsh_pronoun">(she/her)</span></h2>
          <h3 className="varsh_role">Software Developer</h3>
          <img
            src="https://readme-typing-svg.herokuapp.com?font=Raleway+semiBold&weight=600&size=26&pause=1000&color=4493F8&center=true&vCenter=true&width=1000&lines=Hey+there!+%F0%9F%91%8B+I'm+Varshitha+%F0%9F%92%BB;Full+Stack+Engineer!+%F0%9F%92%BB;React+%C2%B7+NodeJS+%C2%B7+Next.JS;Building+test+automation+and+web+apps"
            alt="Typing animation"
            style={{ maxWidth: "100%", display: "block" }}
          />
          <p className="varsh_cta_text">Looking for building End to End E-commerce sites?</p>
          <div className="varsh_cta_buttons">
            <a href="https://www.linkedin.com/in/varshitha-br1/overlay/1774443844636/single-media-viewer/?profileId=ACoAACjg6isB-UrX7hrvLF2XhJnssyVIPnxwMUc" target="_blank" rel="noreferrer" className="varsh_btn varsh_btn_primary">
              Resume
            </a>
          </div>
          <StaticImage
            src="../assets/laptop.webp"
            height={200}
            width={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Varshitha BR"
          />
          <SocialIcons />
        </div>
      </div>

      {/* About Me */}
      <div className="varsh_bio">
        <div className="varsh_bio" style={{ color: "#fff" }}>
          <h2>About Me</h2>
          <p className="varsh_about_tagline">
            I Code ✨ 💻 &nbsp;·&nbsp; I Blog! 🎶 &nbsp;·&nbsp; I Read 📕 &nbsp;·&nbsp; I Pen ✍️
          </p>
          <p className="varsh_about_text">
            I am a tech-savvy individual with a Bachelor's degree in Software
            Development. I am passionate about building websites.
          </p>
          <p className="varsh_about_text">
            💻 They call me Byte 📊 sized ⚡, Born ⚙️ in the cloud ☁️. In
            realms of 🔢 zeros and ones, I dance 💃 with Data. 💫 Love ❤️
            Math ➕, Science 🚀 & Computers ✨
          </p>
        </div>
      </div>

      {/* GitHub Stats */}
      <div className="varsh_bio">
        <div className="varsh_bio" style={{ color: "#fff" }}>
          <h2>GitHub Stats</h2>
          <div className="varsh_stats_grid">
            {/* <img
              src="https://github-readme-stats.vercel.app/api?username=varsh-21&show_icons=true&theme=dark"
              alt="GitHub Stats"
            /> */}
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=varsh-21&theme=dark"
              alt="GitHub Streak"
            />
            {/* <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=varsh-21&layout=compact&theme=dark"
              alt="Top Languages"
            /> */}
          </div>
        </div>
      </div>

      {/* Stories I Carry */}
      <div className="varsh_bio">
        <div className="varsh_bio" style={{ color: "#fff" }}>
          <h2>Stories I Carry</h2>
          <p className="varsh_about_text">
            Fragments of life observed, remembered, and shared.
          </p>
          <p className="varsh_about_text">~ I  Blog · CODE · Travel !</p>
          <br/>
          <Link to="https://varshdev.medium.com/" className="varsh_btn varsh_btn_outline">
            Read Blog →
          </Link>
          <br/>
        </div>
      </div>

      {/* Let's Create */}
      <div className="varsh_bio">
        <div className="varsh_bio" style={{ color: "#fff" }}>
          <h2>Let's Create</h2>
          <p className="varsh_about_text">
            Alongside personal story.
          </p>
          <p className="varsh_about_text">
          </p>
          <Link to="https://linktr.ee/hailthelord" className="varsh_btn varsh_btn_primary">
            View Projects →
          </Link>
          <br/>
        </div>
      </div>

      {/* Contact */}
      <div className="varsh_bio">
        <div className="varsh_bio" style={{ color: "#fff" }}>
          <h2>Contact!</h2>

          <SocialIcons />
        </div>
      </div>

    </Layout>
  );
}

export default Home;
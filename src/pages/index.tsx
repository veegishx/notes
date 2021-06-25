import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Hi there 👋<span className="fancy">.</span>
          </h1>
          <p>You are probably wondering what this is about. To summarise, this isn't a personal blog, but rather a personal space where I publish some of my study notes. The focus of this online space is simply to gather a collection of knowledge about some of the topics which I'm currently exploring. The notes I publish here can be viewed by anyone, but the main reason I publish them here is to expand my own understanding of those topics, so don't expect them to be perfect or error-free. That being said, I greatly appreaciate feeback! Please feel free to reach out via <a href="mailto:hello@veegish.com">Email</a> or <a href="https://twitter.com/veegish" target="_blank">Twitter</a> if there's anything you would like to discuss with me :)</p>
          <span className="handle"><strong>Looking for a blog instead?</strong></span>
          <p><a href="https://veegish.com/blog">veegish.com/blog</a></p>
          <h2>Social Links</h2>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          max-width: 800px;
          margin: 0px auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}

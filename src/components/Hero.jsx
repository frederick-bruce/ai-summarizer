import { logo } from "../assets";

const Hero = () => {
  const githubUrl = "https://github.com/frederick-bruce/ai-summarizer";
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <h1 className="text-3xl orange_gradient">AI Summarizer</h1>

        <button
          type="button"
          onClick={() => window.open(githubUrl)}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;

import { FaTwitter, FaDiscord } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex items-center space-x-2">
      <a
        className="border border-twitter bg-twitter p-4 rounded transition duration-300 hover:bg-transparent focus:bg-transparent"
        href="http://twitter.com/5_ikigai"
      >
        <FaTwitter size={18} />
      </a>
      <a
        className="border border-discord bg-discord p-4 rounded transition duration-300 hover:bg-transparent focus:bg-transparent"
        href="https://discord.gg/uCnMb4TJpY"
      >
        <FaDiscord size={18} />
      </a>
    </div>
  );
}

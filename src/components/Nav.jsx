import Button from "./Button";
import { FaPlus } from "react-icons/fa";
import Socials from "./Socials";

export default function Nav({connectMetaMask,account}) {
  return (
    <nav className="bg-primary text-secondary absolute top-0 left-0 w-full shadow-2xl z-50">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center p-4">
        <Socials />
        <div>
          <Button onClick={connectMetaMask}>
            <div className="flex items-center space-x-2">
              <FaPlus />
              {account
          ? account.slice(0, 8) + "..." + account.slice(account.length - 5)
          : "Connect Wallet"}
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
}

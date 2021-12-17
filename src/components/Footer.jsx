import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="mx-auto max-w-screen-xl p-4 flex justify-between items-center">
        <Socials />
        <p>&copy; {new Date().getFullYear()} - Ikigai Five</p>
      </div>
    </footer>
  );
}

export default function Button({ primary, type, children }) {
  return (
    <button
      type={type ? type : "button"}
      className="bg-secondary text-primary py-3 px-8 border border-secondary rounded font-bold cursor-pointer transition duration-300 hover:text-secondary hover:bg-transparent focus:text-secondary focus:bg-transparent"
    >
      {children}
    </button>
  );
}

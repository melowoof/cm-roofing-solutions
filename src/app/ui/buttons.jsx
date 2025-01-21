export default function SquareBlackButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white p-5 font-serif text-xl cursor-pointer hover:bg-white hover:text-black transition-colors pointer-events-auto"
    >
      {text}
    </button>
  );
}

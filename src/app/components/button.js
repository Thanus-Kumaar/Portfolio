export default function Button({ buttonBody, onClick }) {
  return (
    <div className="font-sans">
      <button
        className="relative min-w-24 h-10 rounded-md bg-secondary-dark dark:bg-secondary-light text-lg text-secondary-light dark:text-primary-dark text-center p-[5px]"
        onClick={onClick}
      >
        {buttonBody}
      </button>
    </div>
  );
}

export default function Button({ buttonBody, onClick }) {
  return (
    <div className="font-sans">
      <button
        className="relative min-w-24 h-10 rounded-md bg-secondary-dark dark:bg-secondary-light text-lg text-secondary-light dark:text-primary-dark text-center p-[5px] before:absolute before:content-[''] before:inset-0 before:border-[1px] before:border-secondary-light dark:before:border-primary-dark before:translate-x-[3px] before:translate-y-[3px] before:rounded-md before:transition before:duration-200 hover:before:translate-x-0 hover:before:translate-y-0 active:before:translate-x-[-1px] active:before:translate-y-[-1px]"
        onClick={onClick}
      >
        {buttonBody}
      </button>
    </div>
  );
}

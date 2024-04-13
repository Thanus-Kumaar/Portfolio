export default function Button({ buttonBody, onClick }) {
  return (
    <div className="font-sans cursor-buttons">
      <button
        className="relative group min-w-24 h-10 rounded-md bg-secondary-dark dark:bg-secondary-light text-lg text-secondary-light dark:text-primary-dark text-center p-[5px] before:absolute before:content-[''] before:inset-0 before:border-[1px] before:border-secondary-light dark:before:border-primary-dark before:translate-x-[5px] before:translate-y-[5px] before:rounded-md before:transition before:duration-200 hover:before:translate-x-0 hover:before:translate-y-0 active:before:translate-x-[-1px] active:before:translate-y-[-1px]"
        onClick={onClick}
      >
        <div className="transition duration-200 translate-x-[3px] translate-y-[3px] group-hover:translate-x-0 group-hover:translate-y-0 group-active:translate-x-[-1px] group-active:translate-y-[-1px]">{buttonBody}</div>
      </button>
    </div>
  );
}

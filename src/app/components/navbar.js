"use client";
import Button from "./button";

export default function NavBar() {
  const redirectProjects = () => {
    console.log("Projects clicked");
  };

  return (
    <div className="h-20 flex flex-row px-6 py-3 justify-between">
      <div>
        <div className="text-3xl">Thanus Kumaar</div>
        <div className="pl-1 text-md">A curious mind</div>
      </div>
      <div className="flex flex-row gap-4 pt-2">
        <Button buttonBody={"Home"} onClick={redirectProjects} />
        <Button buttonBody={"Projects"} onClick={redirectProjects} />
        <Button buttonBody={"Skills"} onClick={redirectProjects} />
        <Button buttonBody={"About"} onClick={redirectProjects} />
      </div>
    </div>
  );
}

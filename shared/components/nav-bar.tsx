import { ModeToggle } from "./mode-toggle";

export default function NavBar() {
  return (
    <nav className="max-w-6xl w-full mx-auto px-3 py-3 relative">
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold italic dark:text-gray-300">niraina</h1>
        <ModeToggle />
      </div>
    </nav>
  )
}

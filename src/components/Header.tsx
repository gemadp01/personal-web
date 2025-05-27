import { DropdownMenu } from "./ui/DropdownMenu";

export const Header = () => {
  return (
    <header className="flex justify-around items-center h-24">
      <h2 className="bg-color-dark">Test</h2>

      <nav>
        <DropdownMenu items={["About", "Projects", "Contact"]} />
      </nav>
    </header>
  );
};

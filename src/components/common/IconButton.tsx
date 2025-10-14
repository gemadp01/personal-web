import { JSX } from "react";
import { Link } from "react-router-dom";

type TIconButtonProps = {
  icon: JSX.ElementType;
  to: string;
};

export const IconButton = ({ icon: Icon, to }: TIconButtonProps) => {
  return (
    <Link
      to={to}
      target="_blank"
      className="group bg-white hover:bg-dark dark:bg-dark dark:hover:bg-light dark:border dark:border-border-dark p-2 rounded-lg transition"
    >
      <Icon className="w-5 h-5 text-primary group-hover:text-secondary dark:text-secondary dark:group-hover:text-primary" />
    </Link>
  );
};

import { JSX } from "react";

type TContactCardProps = {
  icon: JSX.ElementType;
  title: string;
  detail: string;
};

export const ContactCard = ({
  icon: Icon,
  title,
  detail,
}: TContactCardProps) => {
  return (
    <div className="flex items-center p-4 bg-white dark:bg-dark dark:border dark:border-border-dark shadow rounded-xl">
      <div className="p-2 dark:bg-dark dark:border dark:border-border-dark rounded-full mr-4">
        <Icon className="w-5 h-5 text-primary dark:text-secondary" />
      </div>
      <div className="text-start">
        <p className="text-sm text-description dark:text-inverse">{title} :</p>
        <p className="text-base text-primary dark:text-secondary font-medium ">
          {detail}
        </p>
      </div>
    </div>
  );
};

import { TypeAnimation } from "react-type-animation";

type TBaseProps = React.ComponentProps<typeof TypeAnimation>;

export type TTypingTextProps = {
  textSequence: TBaseProps["sequence"];
  speed?: TBaseProps["speed"];
  repeat?: TBaseProps["repeat"];
  wrapper?: TBaseProps["wrapper"];
  className?: string;
};

export const TypingText = ({
  textSequence,
  speed = 60,
  repeat = Infinity,
  wrapper = "span",
  className,
}: TTypingTextProps) => {
  return (
    <TypeAnimation
      sequence={textSequence}
      speed={speed}
      repeat={repeat}
      wrapper={wrapper}
      className={className}
    />
  );
};

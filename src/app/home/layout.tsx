import { PropsWithChildren } from "react";
import Image from "next/image";

interface HomeLayoutProps extends PropsWithChildren {
  [x: string]: any;
}

export default function HomeLayout(props: HomeLayoutProps) {
  const { children, ...rest } = props;

  return (
    <div
      className="flex flex-col w-screen sm:h-fit md:h-screen p-14"
      style={{ backgroundColor: "#222222" }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/trinca-logo.png"
          alt="Logotipo Inferior"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
}

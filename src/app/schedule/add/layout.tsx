import { PropsWithChildren } from "react";
import Image from "next/image";

interface ScheduleLayoutProps extends PropsWithChildren {
  [x: string]: any;
}

export default function SchedulePage(props: ScheduleLayoutProps) {
  const { children, ...rest } = props;

  return (
    <div className="flex flex-col" style={{ backgroundColor: "#222222" }}>
      <div className="flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
      <div className="flex flex-col items-center justify-center pb-8">
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

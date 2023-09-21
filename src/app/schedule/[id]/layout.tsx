import { PropsWithChildren } from "react";
import Image from "next/image";

interface ScheduleLatoutProps extends PropsWithChildren {
  [x: string]: any;
}

export default function SchedulePage(props: ScheduleLatoutProps) {
  const { children, ...rest } = props;

  return (
    <div className="flex flex-col w-screen h-fit" style={{ backgroundColor: "#222222" }}>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
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

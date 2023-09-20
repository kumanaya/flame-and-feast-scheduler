import { PropsWithChildren } from "react";
import Image from "next/image";

interface ScheduleLatoutProps extends PropsWithChildren {
  [x: string]: any;
}

export default function SchedulePage(props: ScheduleLatoutProps) {
  const { children, ...rest } = props;

  return (
    <div className="flex flex-col sm:h-fit md:h-screen" style={{ backgroundColor: "#222222" }}>
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

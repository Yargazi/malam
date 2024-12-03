import Image from "next/image";
import vehicleDataImage from "../pablic/img/upload.svg";
import CloudChatIco from "../pablic/img/message-square.svg";
import settings from "../pablic/img/settings.svg";
import swagger from "../pablic/img/swagger.svg";
const PageHeader = () => {
  return (
    <header className="container mx-auto p-10">
      <div className="flex flex-row-reverse items-center justify-between">
        <h1 className="text-4xl font-bold text-right text-blue-900" dir="rtl">
          מאגר מספרי רישוי של כלי רכב
        </h1>

        <div className="flex flex-col justify-between gap-2">
          <div className="flex flex-row justify-start gap-2">
            <button
              className="p-2 rounded-full bg-white border-2 border-gray-300  hover:bg-gray-300"
              aria-label="Settings"
            >
              <Image
                src={vehicleDataImage}
                alt="Vehicle Data"
                width={15}
                height={15}
              />
            </button>
            <button
              className="p-2 rounded-full bg-white border-2 border-gray-300  hover:bg-gray-300"
              aria-label="Settings"
            >
              <Image
                src={CloudChatIco}
                alt="Vehicle Data"
                width={15}
                height={15}
              />
            </button>
          </div>
          <div className="flex gap-4">
            <button className=" flex gap-2 p-4  items-center bg-blue-800 text-white rounded-xl hover:bg-blue-900">
              לנתונים API{" "}
              <Image
                src={settings}
                alt="Vehicle Data"
                width={15}
                height={15}
                className="stroke-white "
              />
            </button>
            <button
              className="p-4 rounded-full bg-white border-2 border-gray-300  hover:bg-gray-300"
              aria-label="Settings"
            >
              <Image src={swagger} alt="Vehicle Data" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;

import Image from "next/image";
import gov_cloud from "../pablic/img/gov_cloud.png";
const Navbar = () => {
  return (
    <nav className="bg-gray-100 mx-auto py-4 w-full ">
      <div
        className="container mx-auto flex justify-around gap-10 items-center "
        dir="rtl"
      >
        <div className=" flex flex-col  " dir="rtl">
          <div className="flex flex-row ">
            <Image
              src={gov_cloud}
              alt="Data Gov Logo"
              width={50}
              height={50}
              className=" ml-2"
            />

            <div>
              <h1
                className="text-[30px] font-semibold leading-tight mr-1"
                style={{
                  letterSpacing: "-0.84px",
                  color: "#ec1651",
                }}
              >
                Data Gov
              </h1>
            </div>
          </div>
          <p
            className="text-[20px] leading-tight "
            style={{
              letterSpacing: "-0.53px",
              color: "#183c7c",
            }}
          >
            מאגרי המידע הממשלתיים
          </p>
        </div>
        <a
          href="#"
          className="text-[20px] font-medium hover:underline"
          style={{
            color: "#000",
          }}
        >
          דף בית
        </a>
        <a
          href="#"
          className="text-[20px] font-medium hover:underline"
          style={{
            color: "#000",
          }}
        >
          אודות
        </a>
        <a
          href="#"
          className="text-[20px] font-medium hover:underline"
          style={{
            color: "#000",
          }}
        >
          ארגונים
        </a>
        <a
          href="#"
          className="text-[20px] font-medium hover:underline"
          style={{
            color: "#000",
          }}
        >
          מאגרי מידע
        </a>
        <a
          href="#"
          className="text-[20px] font-medium hover:underline"
          style={{
            color: "#000",
          }}
        >
          צור קשר
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

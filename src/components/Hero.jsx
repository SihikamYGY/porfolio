import image from "./kuning.jpg";
import pp from "./ego.png";
import html from "./html.png"

function Hero() {
  return (
    <>
      <div className=" h-[653px] flex">
        <div>
          <h1 className="text-7xl font-bold mt-[150px] ml-[350px] w-[500px]">
            Hello, I'm <br /> Hikam.
          </h1>
          <p className="text-md ml-[350px]">
            Man Who Love Coding And <br />
            Want To Be A Programmer
          </p>
          <button className="riffad ml-[350px] rounded-md h-7 w-[130px] mt-3 font-medium text-[15px] hover:bg-cyan-900">
            Contact Me 🦆
          </button>
        </div>
        <div className=" mt-[100px]">
          <img
            src={image}
            alt="Gambar Isagi"
            className=" w-[350px] h-[350px] rounded-xl shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
          />
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="text-5xl font-bold flex justify-center mt-[3em] ">
            About Me
          </div>
          <div className="ml-[720px] font-semibold text-md">Who I'am?</div>
        </div>
        <div className="flex h-[600px] ">
          <div className="mt-[100px] ml-[100px]">
            <img
              src={pp}
              alt="Egoist"
              className="rounded-xl w-[600px] shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
            />
          </div>
          <div className="mt-[130px] ml-[100px]">
            <p className="text-lg  mb-3">
              I like Programming when i School at SMP Binaqurani <br />
              Islamic School, i like playing game like Minecraft, Valorant,
              <br />
              and other viral game, And i like Watch anime, my favorite <br />
              anime is Blue Lock, i like to learn new langguage and coding.{" "}
              <br />
            </p>
            <p className="text-lg  mb-3 text-pink-500 font-semibold">
              Roisul Hikam AKA Kamse | 2/24/2024
            </p>
            <button className="bg-sky-500 w-[120px] h-[30px] rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="text-5xl pl-[2em] pb-[1em] pr-[150px] mt-7">
          <p className="mb-5">HTML</p>
          <p className="mb-5">CSS</p>
          <p className="mb-5">JS</p>
          <p className="mb-5">React</p>
          <p>NotePad</p>
        </div>
        <div>
          <img src={html} alt="html" className="w-[700px]"/>
        </div>

        <div>
          <p></p>
        </div>

      </div>
    </>
  );
}

export default Hero;

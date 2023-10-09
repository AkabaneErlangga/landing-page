import background from "@/public/img/background2.png"
import background2 from "@/public/img/background3.png"
import chat from "@/public/img/chat.png"
import Image from "next/image";

const HowWeWorkSection = () => {
  return (
    <div className="flex flex-col p-4 mt-3 lg:p-8 gap-4 lg:gap-8 items-center justify-center" style={{ backgroundImage: `url(${background.src})`, backgroundRepeat: "no-repeat" }}>
      <h3 className="text-2xl font-semibold">How We Work</h3>
      <div className="flex flex-col rounded-xl lg:flex-row lg:mx-80 p-7 gap-4 max-w-[700px]" style={{ backgroundImage: `url(${background2.src})`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <Image
          src={chat}
          alt="chat-image"
        />
        <div className="flex flex-col items-center lg:gap-3 lg:w-2/3 lg:items-start lg:p-3">
          <h4 className="text-lg font-semibold">Estimate</h4>
          <p>Estimate the cost of creating your application with us. Pricing is transparent at the start with a gradual payment method.</p>
        </div>
      </div>
    </div>
  );
}

export default HowWeWorkSection;
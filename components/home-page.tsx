import background from "@/public/img/background.png"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 p-6 lg:py-56 lg:px-16" style={{backgroundImage: `url(${background.src})`, backgroundPosition: "right", backgroundRepeat: "no-repeat"}}>
      <h3 className="text-3xl lg:text-5xl font-bold">
        Make Your Own<br/>
        Website and Mobile Application<br/>
        With Nodewave
      </h3>
      <button className="bg-green py-2 px-4 rounded-full w-fit">
        Get Started Now
      </button>
      <p className="lg:text-lg">Create Mobile Applications and Websites for Companies or Your Business
        <br/>Have a transparent pricing, easy and straightforward development process</p>
    </div>
  );
}

export default HomePage;
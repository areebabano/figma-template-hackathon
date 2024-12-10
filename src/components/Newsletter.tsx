import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: "url('/bgimage.png')", // Replace with your image path
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-white opacity-0"></div>

        {/* Content on top of the background */}
        <div className="relative z-10 text-center">
          <h1
            className="text-[#151875] text-2xl mb-4 mt-8 leading-tight tracking-wide"
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontWeight: "bolder",
            }}
          >
            Get Latest Update By Subscribing <br /> Our Newsletter
          </h1>
          <button className="px-6 py-2 bg-pink-500 text-white hover:bg-purple-700 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Centered Image Section */}
      <div className="flex justify-center mt-14">
        <Image
          src="/newsletter.png" // Replace with your image path
          alt="News Letter"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};
<<<<<<< HEAD
   
=======

>>>>>>> 917b7661c6aa097032c6ef3f24a1e82973450f1f
export default Newsletter;

  
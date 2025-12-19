import React from "react";

const Hero = () => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-6">

      {/* Umbrella */}
      <div className="mt-24 sm:mt-32 lg:mt-46 mb-24 sm:mb-32 lg:mb-46 flex justify-center">
        <img
          src="/umbrella.png"
          alt="Umbrella Icon"
          className="h-24 sm:h-32 lg:h-48 w-auto"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-9xl text-center font-extrabold text-black mb-10 sm:mb-12 lg:mb-16">
        STAND OUT.
      </h1>

      {/* Paragraphs */}
      <p className="text-base sm:text-lg lg:text-xl font-semibold text-black max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-2">
        They told us the future would be bright. <br />
        They forgot to mention it would also be monitored.
      </p>

      <p className="text-base sm:text-lg lg:text-xl font-semibold text-black max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-8">
        We grew up in a digital world that promised freedom and delivered surveillance.
      </p>

      <p className="text-base sm:text-lg lg:text-xl font-semibold text-black max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-8">
        That promised connection and delivered detachment. That promised empowerment and delivered dependency.
      </p>

      <p className="text-base sm:text-lg lg:text-xl font-semibold text-black max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-8">
        Slowly, quietly, heartbreakingly, the miracle of the internet became a bureaucracy of surveillance.
      </p>

      <p className="text-base sm:text-lg lg:text-xl font-semibold text-black max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-8">
        The promise, of the virtual road that once shattered the world open, became a cage we politely decorated with apps.
      </p>

      <p className="text-base sm:text-lg lg:text-xl font-semibold text-black max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-8">
        Children of the Internet Nation, carrying the dream of a world without all borders, any instant access and any permanence of any kind.
      </p>

      <p className="text-base sm:text-lg lg:text-xl font-semibold text-black max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-8">
        They all climb trees, we just search among them. Everything is here, all the value of this group is in those who decided to sail away to keep their dreams alive.
      </p>

      <p className="text-base sm:text-lg lg:text-xl font-semibold text-black max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-8">
        We can either stand out, or we silence the voices of the self-called resistance efforts to break free, those too distant from the crowd and the common thinking.
      </p>

      <p className="text-base sm:text-lg lg:text-xl font-semibold text-black max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-8">
        Park is a declaration that the digital world is just as real as the main.
      </p>

      <p className="text-base sm:text-lg lg:text-xl font-semibold text-black max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-24">
        Nothing is worse than a narrow mind, look much further than anybody else. Be smart enough to be different, be lost enough to find yourself, be wise enough to be real.
      </p>

    </div>
  );
};

export default Hero;

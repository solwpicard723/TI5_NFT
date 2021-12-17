import airSign from "../../assets/signs/air.png";
import earthSign from "../../assets/signs/earth.png";
import fireSign from "../../assets/signs/fire.png";
import waterSign from "../../assets/signs/water.png";
import spaceSign from "../../assets/signs/space.png";
import bg from "../../assets/bg.png";

export default function Signs() {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 flex flex-col lg:flex-row justify-between items-center lg:items-start space-x-4 text-secondary">
        <div className="flex flex-col items-center">
          <img
            className="w-1/2 lg:w-full object-contain"
            src={fireSign}
            alt="Fire Sign"
          />
          <ul className="list-outside list-disc space-y-4">
            <li>
              <b>Aries</b> – March 21 – April 19
            </li>
            <li>
              <b>Leo</b> – July 22 – August 22
            </li>
            <li>
              <b>Sagittarius</b> – November 22 – December 21
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-1/2 lg:w-full object-contain"
            src={earthSign}
            alt="Earth Sign"
          />
          <ul className="list-outside list-disc flex flex-col space-y-4">
            <li>
              <b>Taurus</b> – April 20 – May 20
            </li>
            <li>
              <b>Virgo</b> – August 23 – September 22
            </li>
            <li>
              <b>Capricorn</b> – December 21 – January 19
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-1/2 lg:w-full object-contain"
            src={airSign}
            alt="Air Sign"
          />
          <ul className="list-outside list-disc flex flex-col space-y-4">
            <li>
              <b>Gemini</b> – May 21 – June 20
            </li>
            <li>
              <b>Libra</b> – September 22 – October 23
            </li>
            <li>
              <b>Aquarius</b> – January 20 – February 18
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-1/2 lg:w-full object-contain"
            src={waterSign}
            alt="Water Sign"
          />
          <ul className="list-outside list-disc flex flex-col space-y-4">
            <li>
              <b>Cancer</b> – June 21 – July 22
            </li>
            <li>
              <b>Scorpio</b> – October 23 – November 21
            </li>
            <li>
              <b>Pisces</b> – February 19 – March 20
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-1/2 lg:w-full object-contain"
            src={spaceSign}
            alt="Space Sign"
          />
          <ul className="list-outside list-disc flex flex-col space-y-4">
            <li>
              <b>Ophiuchus</b> – Unknown
            </li>
            <li>Plantoid 2060 Chiron</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

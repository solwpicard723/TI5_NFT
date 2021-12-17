import roadmap from "../../assets/roadmap.png";
import bg from "../../assets/bg.png";

export default function Banner() {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="text-secondary relative"
    >
      <div className="absolute z-10 w-full h-full bg-primary opacity-75"></div>
      <div className="mx-auto max-w-screen-xl px-4 relative z-20">
        <img className="mx-auto w-full" src={roadmap} alt="Ikigai Roadmap" />
      </div>
    </section>
  );
}

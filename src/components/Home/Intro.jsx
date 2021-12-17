import Socials from "../Socials";

export default function Intro() {
  return (
    <section className="bg-primary text-secondary">
      <div className="mx-auto max-w-screen-xl px-4 py-16 flex flex-col lg:flex-row justify-between">
        <div className="flex-1">
          <h1 className="text-6xl mb-4">Welcome</h1>
          <p className="text-xl">
            The Ikigai 5 was created by a team that has a love for anime! What
            sets this NFT collection apart from others? YOU have control of the
            characters and the storyline in the anime metaverse! We have plans
            on innovating like no other, making a storyline created by the
            community. Come be apart and defend your clan as you will be chosen
            to be apart of The Great Nation of Ikigai!
          </p>
          <div className="mt-6 flex justify-center">
            <Socials />
          </div>
        </div>
        <div className="flex-1 p-4 grid place-items-center">
          <button className="text-4xl">Launch!</button>
        </div>
      </div>
    </section>
  );
}

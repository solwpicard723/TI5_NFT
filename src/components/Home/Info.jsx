import SwiperCore, { Navigation, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { v4 as uuid } from "uuid";
//Images
import air from "../../assets/variants/air.png";
import water from "../../assets/variants/water.png";
import earth from "../../assets/variants/earth.png";
import fire from "../../assets/variants/fire.png";
import space from "../../assets/variants/space.png";

export default function Info() {
  SwiperCore.use([Navigation, EffectFade, Autoplay]);

  return (
    <section className="bg-primary text-secondary">
      <div className="overflow-hidden mx-auto max-w-screen-xl px-4 py-16 flex flex-col lg:flex-row justify-between">
        <div className="flex-1 text-center">
          <h2 className="text-6xl mb-4">The Great Nation:</h2>
          <p className="text-xl">
            Beginning of the 24th century, The Great Nation of Ikigai, was made
            up of four villages which represented each of the elements: earth,
            air, fire, and water. The four villages lived in harmony, defending
            and protecting one another. The Era of Peace remained strong for
            hundreds of years. That was until a new element arrived, which
            invaded and ravaged the unsuspecting villages. Unaware of the origin
            of this ‘new’ species, doubt and paranoia consumed the Lords of the
            Villages minds. It didn’t take long for each village to turn against
            one another ultimately disassembling The Great Nation of Ikigai.
            <br />
            <br />
            The year is now 2400, and at the turn of a new century, comes a new
            “Great Nation” …
          </p>
        </div>
        <div className="flex-1 grid place-items-center">
          <Swiper
            style={{
              width: "80%",
            }}
            navigation
            effect="fade"
            autoplay={{
              delay: 2000,
            }}
            spaceBetween={0}
            slidesPerView={1}
          >
            <SwiperSlide className="grid place-items-center" key={uuid()}>
              <img src={air} alt="Air" className="w-1/2 object-contain" />
            </SwiperSlide>
            <SwiperSlide className="grid place-items-center" key={uuid()}>
              <img src={earth} alt="Earth" className="w-1/2 object-contain" />
            </SwiperSlide>{" "}
            <SwiperSlide className="grid place-items-center" key={uuid()}>
              <img src={fire} alt="Fire" className="w-1/2 object-contain" />
            </SwiperSlide>{" "}
            <SwiperSlide className="grid place-items-center" key={uuid()}>
              <img src={water} alt="Water" className="w-1/2 object-contain" />
            </SwiperSlide>{" "}
            <SwiperSlide className="grid place-items-center" key={uuid()}>
              <img src={space} alt="Space" className="w-1/2 object-contain" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

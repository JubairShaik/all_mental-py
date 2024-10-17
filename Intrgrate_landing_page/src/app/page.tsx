// import data
import { gratitudeBenefits } from "./data/gratitudeBenefits";

// import components
import Link from "next/link";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Divider } from '@mui/material';
import Carousel from "./components/Carousel/Carousel";

export default function Home() {
  return (
    <main id="main" className="mb-4">
      <div className="w-full flex flex-col gap-4 p-4 md:p-20">
        <h1 className="text-4xl md:text-6xl text-gray-600 font-bold self-center leading-snug">
          Rooted in <span className="uppercase">reflection</span>, 
          blossoming in <span className="uppercase">growth</span>.
        </h1>

        <p className="text-sm md:text-base text-gray-500">
          Koru connects you to the Māori concept of growth and renewal, 
          inviting daily reflections to foster gratitude and mindfulness.
        </p>
        
      </div>

      <section className="main__quote md:p-20">
        <FormatQuoteIcon sx={{fontSize: "40px"}} />
        <h2 className="text-3xl md:text-5xl text-center mb-4">
          Gratitude unlocks the fullness of life.
          It turns what we have into enough, and more.
        </h2>
        
        <p className="text-sm md:text-base italic">
        — Melody Beattie
        </p>
      </section>

      <section className="main__benefits text-gray-500 h-content p-4 md:p-20">
        <h2 className="text-2xl md:text-4xl uppercase font-bold text-center mb-4 md:mb-8">
          Why Gratitude?
        </h2>

        <ul className="main__card-list">
          {gratitudeBenefits.map(benefit => (
            <li key={benefit.id} className="main__card-item">
              <img
                className="card__img w-36 h-36 rounded-full object-cover mb-4 md:w-40 md:h-40"
                src={benefit.image}
                alt={benefit.alt} />

              <h3 className="main__card-title">
                {benefit.title}
              </h3>

              <p className="text-sm md:text-base text-center">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="main__cta flex flex-col items-center gap-4 md:p-14">
        <h2 className="text-2xl md:text-4xl uppercase text-gray-500 font-bold text-center">
          Nurture Gratitude in Your Life with Koru
        </h2>

        <Carousel />

        <Link href="/register">
          <p className="main__cta-btn text-center uppercase mb-4 md:mb-0">
            Get started
          </p>
        </Link>
      </section>
    </main>
  );
};
import foto from "./assets/forest1.jpg";
import foto2 from "./assets/forest.webp";
import foto3 from "./assets/final-cover-forest.jpg";
const Body = () => {
  return (
    <>
      <div className="pb-6">
        <h1 className="font-extrabold mb-6 text-[45px] h-[101px] pl-[200px] pt-[179px]">
          Make mobile journeys easier, faster and frictionless for your clients.
        </h1>
        <div className="flex gap-10">
          <div className="card card-compact w-96 bg-base-100 shadow-xl mt-[173px] translate-x-44">
            <figure>
              <img src={foto} className="h-auto" alt="Shoes" />
            </figure>
            <div className="card-body pl-[15px] pr-[15px] rounded">
              <h2 className="card-title">Easy to use!</h2>
              <p>
                A complete set of tools to enable marketing teams to easily
                curate, personalize, contextualize, send, integrate and track
                campaigns - no coding required.Our software design philosophy is
                all about the mobile end user, in particular their preference to
                Tap not Type.
              </p>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl mt-[173px] translate-x-44">
            <figure>
              <img src={foto2} alt="Shoes" />
            </figure>
            <div className="card-body pl-[15px] pr-[15px] rounded">
              <h2 className="card-title">Revenue driving</h2>
              <p>
                Companies in the USA are claiming over 18.5% of online revenue
                is being generated from mobile commerce initiatives. With 100%
                views, 90% plus open rates and CTR's like the very early days of
                email, you can be confident your mobile marketing is being seen
                and your efforts aren’t going to waste.
              </p>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl mt-[173px] translate-x-44">
            <figure>
              <img src={foto3} alt="Shoes" />
            </figure>
            <div className="card-body pl-[15px] pr-[15px] rounded">
              <h2 className="card-title">Integrated with your stack</h2>
              <p>
                You don't want to be shifting data from platform to platform.
                intouch has complete set of API’s and Webhooks to enable
                integration with existing marketing stacks - as well as deep
                integration with a limited number of marketing platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;

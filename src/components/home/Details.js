import img2 from "../../assets/home/img2.jpg";

const Details = () => {
  return (
    <div className=" flex flex-col gap-12 lg:flex-row items-center lg:gap-6 xl:items-start ">
      <div className="flex-1 max-w-full md:max-w-1/2 mr-4">
        <h2 className="font-semibold text-center whitespace-nowrap lg:text-left text-4xl sm:text-4xl md:text-5xl lg:text-5xl text-white mb-8">
          A propos du site web
        </h2>
        <p className="text-center lg:text-left font-normal text-xl md:text-2xl lg:text-3xl text-white">
        L’entreprise s'engage à offrir des solutions adaptées aux besoins de ses clients grâce à des produits fiables et performants, accessibles en vente directe ou par facilités de paiement. Que vous soyez à la recherche d'équipements pour la maison, d'outils pour vos appareils électroniques, ou d'un moyen de transport pratique, Elemdani Litaksit assure un service de proximité et un accompagnement personnalisé pour chaque achat.

        Chez Elemdani Litaksit, nous mettons un point d'honneur à garantir la satisfaction de notre clientèle en alliant qualité, innovation et accessibilité pour une expérience d'achat agréable et sans contrainte.
        </p>
      </div>
      <div className="flex-1 max-w-full lg:max-w-1/2 ">
        <img
          src={img2}
          alt="image2"
          className="rounded-3xl max-w-full "
          style={{ "max-width": "500px", "max-height": "600px" }}
        />
      </div>
    </div>

    
  );
};

export default Details;

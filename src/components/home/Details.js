import img2 from "/home/oussama/Documents/trouve/src/assets/home/img2.jpg";

const Details = () => {
  return (
    <div className=" flex flex-col gap-12 lg:flex-row items-center lg:gap-6 xl:items-start ">
      <div className="flex-1 max-w-full md:max-w-1/2 mr-4">
        <h2 className="font-semibold text-center whitespace-nowrap lg:text-left text-4xl sm:text-4xl md:text-5xl lg:text-5xl text-white mb-8">
          A propos du site web
        </h2>
        <p className="text-center lg:text-left font-normal text-xl md:text-2xl lg:text-3xl text-white">
          TrouvImmo est un site web de recherche de biens immobiliers en
          Algerie, lancé avec un objectif simple : rendre la recherche
          immobilière plus agréable et rapide. Quand vous recherchez une annonce
          sur TrouvImmo, le site web repère plusieurs offres correspondantes
          parmi les plus grands sites d’immobiliers de l’Algerie. TrouvImmo vous
          permet de trouver et de publier des annonces de vente, location, et
          échange d’appartements, maisons, terrain et tout ce qui est un bien
          immobilier. Notre site web vous permet aussi de filtrer les annonces
          immobilières par critères, pour vous proposer des biens immobiliers
          correspondant exactement à vos besoins.
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

    // <div className="flex  mb-44 gap-6 ">
    //   <div className="">
    //     <h2 className=" font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-8">A propos du site web</h2>
    //     <p className="text-left font-normal whitespace-nowrap text-xl md:text-2xl lg:text-3xl text-white">
    //     TrouvImmo est un site web de recherche de biens<br /> immobiliers en Algerie, lancé avec un objectif simple :<br />rendre la recherche immobilière plus agréable et rapide.<br /> Quand vous recherchez une annonce sur TrouvImmo, le<br /> site web repère plusieurs offres correspondantes parmi<br /> les plus grands sites d’immobiliers de l’Algerie.<br />TrouvImmo vous permet de trouver et de publier des<br /> annonces de vente, location, et échange d’appartements,<br /> maisons, terrain et tout ce qui est un bien immobilier.<br /> Notre site web vous permet aussi de filtrer les annonces<br /> immobilières par critères, pour vous proposer des biens<br /> immobiliers correspondant exactement à vos besoins.
    //     </p>
    //   </div>
    //   <div  style={{'max-width':"500px",
    //         'max-height':"600px"
    //       }}>
    //     <img
    //       src={img2}
    //       alt="image2"
    //       className="  rounded-3xl  "

    //     />
    //   </div>
    // </div>
  );
};

export default Details;

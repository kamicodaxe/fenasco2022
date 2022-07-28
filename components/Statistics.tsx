import { useMemo } from "react";

interface Props {
  locale: string
}

const Statistics: React.FC<Props> = ({ locale }) => {
  const isFr = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
  const title = isFr ? "Les Jeux FENASSCO Ligue «A»" : "The FENASSCO League 'A' games"

  return (
    <div className="px-4 py-16 bg-primary text-gray-100 max-w-screen md:px-24 lg:px-8 lg:py-20">
      <div className="container mx-auto text-center pb-16">
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
      <div className="grid row-gap-8 sm:grid-cols-3 space-y-8 sm:space-y-0">
        <div className="text-center">
          <h6 className="text-5xl font-bold text-secondary">100 000+</h6>
          <p className="font-bold text-xl">{isFr ? "Licenciés" : "Licensees"}</p>
        </div>
        <div className="text-center">
          <h6 className="text-5xl font-bold text-secondary">12</h6>
          <p className="font-bold text-xl">{isFr ? "Disciplines Sportives" : "Sports"}</p>
        </div>
        <div className="text-center">
          <h6 className="text-5xl font-bold text-secondary">4000+</h6>
          <p className="font-bold text-xl">{isFr ? "Associations" : "Associations"} </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics
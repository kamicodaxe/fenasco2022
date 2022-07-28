

const Statistics: React.FC<{}> = ({ }) => {
  return (
    <div className="px-4 py-16 bg-primary text-gray-100 max-w-screen md:px-24 lg:px-8 lg:py-20">
      <div className="container mx-auto text-center pb-16">
        <h2 className="text-4xl font-bold">Les Jeux FENASSCO Ligue «A» c’est:</h2>
      </div>
      <div className="grid row-gap-8 sm:grid-cols-3 space-y-8 sm:space-y-0">
        <div className="text-center">
          <h6 className="text-5xl font-bold text-secondary">100 000+</h6>
          <p className="font-bold text-xl">Licenciés</p>
        </div>
        <div className="text-center">
          <h6 className="text-5xl font-bold text-secondary">12</h6>
          <p className="font-bold text-xl">Disciplines Sportives</p>
        </div>
        <div className="text-center">
          <h6 className="text-5xl font-bold text-secondary">4000+</h6>
          <p className="font-bold text-xl">Associations </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics
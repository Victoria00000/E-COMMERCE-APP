export const Footer = () => {
  const back = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div className="container pt-5">
      <div className="card text-center">
        <div className="card-header">
        YOUR PURCHASE IS 100% SECURE
        </div>
        <div className="card-body">
          <h5 className="card-title"> Our site has all the security for your purchase </h5>
          <p className="card-text"> © 2022 mySHOP is a company of xxx 11 S.A. CUIT 2222222222. All rights reserved. </p>
          <button className="btn btn-secondary" onClick={back}> Back to top </button>
        </div>
      </div>
    </div>
  );
};

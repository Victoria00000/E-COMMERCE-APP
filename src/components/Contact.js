export const Contact = () => {
  return (
    <div className="container p-5 column col-md-4" >
      <img src="https://cdn.pixabay.com/photo/2017/10/17/10/03/contact-2860030_960_720.jpg" className="card-img-top" alt="ilustrative" />
      <div className="mb-3 mt-3">
        <label for="exampleFormControlInput1" className="form-label"> Where do we contact you? </label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label"> Tell us your consults </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="">
          <button className="btn btn-dark" type="submit"> Send </button>
        </div>
    </div>
  );
};

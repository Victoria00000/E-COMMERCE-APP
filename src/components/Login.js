export const Login = () => {
  return (
    <div className="container p-5 column col-md-4">
      <form >
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label"> Email address </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-dark"> Login </button>
        <div className="mb-5" style={{height:'330px'}}>
        </div>
      </form>
    </div>
  );
};

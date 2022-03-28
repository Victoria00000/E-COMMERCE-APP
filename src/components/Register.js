export const Register = () => {
  return (
    <div className="container p-5 column col-md-4 mb-5">
      <form className="needs-validation" novalidate>
        <div className="">
          <label for="validationCustom01" className="form-label">First name</label>
          <input type="text" className="form-control" id="validationCustom01"  placeholder="Matt" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="">
          <label for="validationCustom02" className="form-label pt-2">Last name</label>
          <input type="text" className="form-control" id="validationCustom02" placeholder="Taylor" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="">
          <label for="validationCustomUsername" className="form-label pt-2"> Email </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
            <div className="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
        </div>
        <div className="">
          <label for="validationCustom03" className="form-label pt-2"> City </label>
          <input type="text" className="form-control" id="validationCustom03" required />
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div className="">
          <label for="validationCustom04" className="form-label pt-2"> Country </label>
          <select className="form-select" id="validationCustom04" required>
            <option selected disabled value="">Choose...</option>
            <option> USA </option>
            <option> Arg. </option>
          </select>
          <div className="invalid-feedback">
            Please select a valid Country.
          </div>
        </div>
        <div className="">
          <label for="validationCustom05" className="form-label pt-2"> Phone number </label>
          <input type="number" className="form-control" id="validationCustom05" required />
          <div className="invalid-feedback">
            Please provide a valid number.
          </div>
        </div>
        <div className="">
          <div className="form-check pt-3">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label className="form-check-label pb-3" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="">
          <button className="btn btn-dark" type="submit"> Register </button>
        </div>
      </form>
    </div>
  )
}

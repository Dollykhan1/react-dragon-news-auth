import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefult();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name,photo,email,password);

    createUser(email, password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.error(error)
    })
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center ">
        <h2 className="text-3xl my-10 text-center">Please Login</h2>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 max-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phoito url</span>
            </label>
            <input type="text"
              required
              name="photo"
              placeholder="photo"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Rester</button>
          </div>
        </form>
        <p className="text-center mr-4">
          Allready have an account?{" "}
          <link className="text-blue-500 font-bold" to="/Login">
            Login
          </link>
        </p>
      </div>
    </div>
  );
};

export default Register;

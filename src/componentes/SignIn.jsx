import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./Providers/AuthProvider";

function SignIn() {
  const { signIn } = useContext(AuthContext);

  const handelSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    signIn(email, password)
      .then(result => {
        console.log(result.user)
        const users = { email, lastLoggedAt: result.user?.metadata?.lastSignInTime };
        fetch('https://tea-store-server-n7p6qptt4-rifats-projects-9101b4d5.vercel.app/users', {
          method: "PATCH",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(users)
        })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount>0) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "SignIn Successfully!",
                showConfirmButton: false,
                timer: 1500
              });
            }
            console.log(data)
          })

      })
      .catch(err => {
        console.log(err.message)
      })

  }
  return (
    <div className="w-1/2 mx-auto pt-20">
      <h1 className="text-5xl text-center font-extrabold py-5">Please SignIn</h1>
      <form onSubmit={handelSignUp}>
        <div className="form-control mb-3">
          <label htmlFor="label">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="input input-bordered w-full" />
        </div>
        <div className="form-control">
          <label htmlFor="label">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="input input-bordered w-full" />
        </div>
        <input
          className="btn btn-success w-full text-white mt-5"
          type="submit"
          value="SignIn" />
      </form>
    </div>
  )
}

export default SignIn

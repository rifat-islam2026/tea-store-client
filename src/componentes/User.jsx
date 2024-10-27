import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function User() {
    const loadedUser = useLoaderData();
    const [users,setUser] = useState(loadedUser);
    console.log(users)
    const handelDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tea-store-server-n7p6qptt4-rifats-projects-9101b4d5.vercel.app/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = users.filter(user => user._id !== id);
                            setUser(remaining);
                        }
                    })
                
            }
        });
      
    }
  return (
      <div>
          <div className="overflow-x-auto">
              <table className="table">
                  {/* head */}
                  <thead>
                      <tr>
                          <th></th>
                          <th>Email</th>
                          <th>CreatedAt</th>
                          <th>LastLogged</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          users.map(user => <tr
                              key={user._id}
                              className="hover">
                          <th>1</th>
                              <td>{user.email}</td>
                              <td>{user.createdAt}</td>
                              <td>{user.lastSignInTime}</td>
                              <td><button
                                  onClick={()=>handelDelete(user._id)}
                                  className="btn"
                              >X</button></td>
                      </tr>)
                      }
                  </tbody>
              </table>
          </div>
    </div>
  )
}

export default User

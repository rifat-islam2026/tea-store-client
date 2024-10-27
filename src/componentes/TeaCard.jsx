import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function TeaCard({ tea ,teas,setTeas}) {
    const handelDelete = (_id) => {
        console.log(_id)
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
                fetch(`https://tea-store-server-n7p6qptt4-rifats-projects-9101b4d5.vercel.app/teas/${_id}`, {
                    method: 'DELETE'
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
                            const remaining = teas.filter(tea=>tea._id !== _id);
                            setTeas(remaining);
                        }
                    })
                
            }
        });
       
    }
  return (
    <div className="shadow-xl rounded-lg border">
          <div className="flex justify-between items-center">
                  <img src={tea.photo} className="w-1/3" />
              <div className="flex flex-col gap-2 ">
                  <h2>name : {tea.name}</h2>
                  <p>supplier : {tea.supplier}</p>
                  <p>supplier : {tea.quantity}</p>
                  <p>supplier : {tea.price}</p>
                  <p>supplier : {tea.details}</p>
              </div>
              <div className="flex flex-col gap-3 p-2">
                  <button className="btn btn-primary">View</button>
                  <Link to={`/updateTea/${tea._id}`}>
                      <button className="btn btn-secondary">Update</button>
                  </Link>
                  <button
                  onClick={()=>handelDelete(tea._id)}
                      className="btn btn-error">Delete</button>
              </div>
          </div>
    </div>
  )
}

export default TeaCard

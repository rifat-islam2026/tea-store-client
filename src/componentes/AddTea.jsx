import Swal from "sweetalert2";

function AddTea() {
    const handelAddTea = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const price = form.price.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newTea = { name, quantity, supplier, taste, price, details, photo };
        // console.log(newTea)
        fetch(`https://tea-store-server-n7p6qptt4-rifats-projects-9101b4d5.vercel.app/teas`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTea)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Oky'
                })
                }  
            })
    }
  return (
    <div>
          <h2 className="text-center text-3xl font-bold pt-7">Add Tea</h2>
          <div className="p-20">
              <form onSubmit={handelAddTea}>
                  <div className="flex gap-3 mb-4">
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Tea Name</span>
                          </label>
                          <input
                              name="name"
                              type="text"
                              placeholder="Tea Name"
                              className="input input-bordered w-full" required />
                      </div>
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Available Quantity</span>
                          </label>
                          <input
                              name="quantity"
                              type="text"
                              placeholder="Available Quantity"
                              className="input input-bordered w-full" required />
                      </div>
                  </div>
                  <div className="flex gap-4 mb-4">
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Supplier</span>
                          </label>
                          <input
                              name="supplier"
                              type="text"
                              placeholder="Supplier"
                              className="input input-bordered w-full" required />
                      </div>
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Taste</span>
                          </label>
                          <input
                              name="taste"
                              type="text"
                              placeholder="Taste"
                              className="input input-bordered w-full" required />
                      </div>
                  </div>
                  <div className="flex gap-3 mb-4">
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Price</span>
                          </label>
                          <input
                              name="price"
                              type="text"
                              placeholder="Price"
                              className="input input-bordered w-full" required />
                      </div>
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Details</span>
                          </label>
                          <input
                              name="details"
                              type="text"
                              placeholder="Details"
                              className="input input-bordered w-full" required />
                      </div>
                  </div>
                   <div className="form-control">
                          <label className="label">
                              <span className="label-text">Photo URL</span>
                          </label>
                          <input
                              name="photo"
                              type="text"
                              placeholder="Photo URL"
                              className="input input-bordered w-full mb-4" required />
                      </div>
                  <button
                      type="submit"
                      className="btn bg-yellow-600 hover:bg-yellow-900 text-white w-full"
                  >Add Tea</button>
              </form>
          </div>
    </div>
  )
}

export default AddTea

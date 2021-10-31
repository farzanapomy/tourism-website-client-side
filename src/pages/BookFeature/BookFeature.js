// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { useForm } from "react-hook-form";
// import useAuth from '../../hooks/useAuth';
// import { Link } from 'react-router-dom';


// const BookFeature = () => {
//     const { id } = useParams();
//     const [bookFeature, setBookFeature] = useState([])
//     const { user } = useAuth();
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm();



//     useEffect(() => {
//         const url = `'https://stark-tundra-60468.herokuapp.com/features/${id}'`
//         fetch()
//             .then(res => res.json())
//             .then(data => setBookFeature(data));
//     }, [])



//     const onSubmit = data => {
//         data.status = user?.email
//         // axios.post('http://localhost:5000/bookfeatures', data)
//         //     .then(res => {
//         //         console.log(res)
//         //     })

//         console.log(data)
//     };

//     const findFeature = bookFeature.filter(feature => feature._id == id)
//     const feature = findFeature[0];

//     return (
//         <div className='container'>
//             <h2 className='my-5 '>Hello User !! Please place your Order</h2>
//             <div className="row ">
//                 <div className="col-lg-6">
//                     <img src={feature?.img} className='img-fluid rounded' alt="" />
//                     <h2>{feature?.name}</h2>
//                     <h4>Price ৳ {feature?.price}</h4>
//                     <p>{feature?.description}</p>
//                 </div>
//                 <div className="col-lg-6">
//                     <h5 className=" text-center">
//                         Please register
//                     </h5>
//                     <div className="login-box w-25 m-auto mt-5">
//                         <div className="event-box border border d-flex justify-content-center align-items-center">
//                             <div className="login-form">
//                                 <form onSubmit={handleSubmit(onSubmit)}>
//                                     <input
//                                         {...register("name")}
//                                         placeholder="Name"
//                                         className="p-2 m-2"
//                                     />
//                                     <br />

//                                     <input
//                                         {...register("email", { required: true })}
//                                         placeholder="Email"
//                                         className="p-2 m-2"
//                                     />
//                                     <br />
//                                     <input
//                                         {...register("date", { required: true })}
//                                         placeholder="date"
//                                         defaultValue={new Date()}
//                                         className="p-2 m-2"
//                                     />
//                                     <br />
//                                     <input
//                                         {...register("description", { required: true })}
//                                         placeholder="Description"
//                                         className="p-2 m-2"
//                                     />
//                                     <br />
//                                     <input
//                                         {...register("address", { required: true })}
//                                         placeholder="Address"
//                                         className="p-2 m-2"
//                                     />
//                                     <br />
//                                     {errors.exampleRequired && <span>This field is required</span>}

//                                     <input type="submit" className="btn btn-info w-50" />
//                                 </form>
//                                 <p className="m-2 mb-2">
//                                     already have account?{" "}
//                                     <Link to="/login">
//                                         <span className="text-danger">create account</span>
//                                     </Link>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </div >
//     );
// };

// export default BookFeature;
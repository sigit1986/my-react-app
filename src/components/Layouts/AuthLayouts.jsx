import { Link } from "react-router-dom";
const AuthLayout = (props) =>{
    // eslint-disable-next-line react/prop-types
    const { children, title, type} = props;
    return(
      <div className="flex justify-center bg-blue-100 min-h-screen items-center flex-col">
        <div className="w-full max-w-xs ">
          <h1 className="text-3xl font-bold mb-2 text-blue-700">{title}</h1>
          <p className="font-medium text-slate-500 mb-2">Welcome, Please enter your details</p>
            {children}
            <Navigation type={type}/>
        </div>
      </div>
    )
}
// eslint-disable-next-line react/prop-types
const Navigation = ({type}) => {
  if (type === "Login") {
    return (
      <p className="text-sm mt-5 text-center">
        Do not have an account? {" "}
        <Link to="/register" className="font-bold text-blue-600 hover:underline">Register</Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account? {" "}
        <Link to="/login" className="font-bold text-blue-600 hover:underline">Login</Link>
      </p>
    );
  }
}


export default AuthLayout;
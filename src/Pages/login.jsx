import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () =>{
    return(
        <AuthLayout title="Login">
            <FormLogin />
            <p>Don't have an account? <a href="/register">Register</a></p>
        </AuthLayout>
    )
}

export default LoginPage;
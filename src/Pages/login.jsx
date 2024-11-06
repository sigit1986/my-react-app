import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () =>{
    return(
        <AuthLayout title="Login" type="Login">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage;
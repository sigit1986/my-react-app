import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FromRegister";

const RegisterPage = () =>{
    return(
        <AuthLayout title="Register" type="Register">
            <FormRegister />
        </AuthLayout>
    )
}

export default RegisterPage;
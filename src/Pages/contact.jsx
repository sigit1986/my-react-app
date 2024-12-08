import { useLogin } from "../hooks/useLogin";
const ContactPage = () => {
    const username = useLogin();
    return (
        <div>
            <h1 className="text-3xl text-center">Contact</h1>
            <p className="text-center">Hello {username}</p>
        </div>
    )
};

export default ContactPage;

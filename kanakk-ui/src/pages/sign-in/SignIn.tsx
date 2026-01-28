import Input from "../../components/ui/input/Input";

const SignIn = () => {

    const handleChange = (value: string) => {
        console.log(value)
    }

    return (
        <section>
            <form>
                <Input type="text" label="Username" placeholder="johndoe" onChange={handleChange} />
                <Input type="text" label="Password" placeholder="johndoe" onChange={handleChange} />
            </form>
        </section>
    )
}
export default SignIn;
import { FormGroup } from "../FormGroup/FormGroup"



export const LoginForm = () => {
    return (
        <>
            <div>
                <form>
                    <h1>Login</h1>
                    <FormGroup label="name" htmlFor="name">
                        <input type="text" id="name" name="name"></input>
                    </FormGroup>
                    <FormGroup label="email" htmlFor="name">
                        <input type="text" id="name" name="name"></input>
                    </FormGroup>
                    <FormGroup label="name" htmlFor="name">
                        <input type="text" id="name" name="name"></input>
                    </FormGroup>
                </form>
            </div>
        </>
    )
}
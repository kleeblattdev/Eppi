import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"


const SignUp = () =>{
    const formSchema ={
        name:{
            label: 'Name',
            validation:{
                required: { value: true, message: 'Name is required.' },
                minLength: { value: 2, message: 'Name must have at least 2 characters.' },
            }
        },
        email:{
            label: 'Email',
            validation:{
                required: { value: true, message: 'Email is required.' },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: 'Invalid email address.',
                }
            }
        },
        password:{
            label:'Password',
            required: { value: true, message: 'Password is required.' },
            minLength: { value: 8, message: 'Password must be at least 8 characters.' },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[^a-zA-Z\d]).{8,}$/,
              message:
                'Password must contain at least 8 characters, 1 uppercase letter, at least 2 numbers, and 1 special character.',
            }
        }
    }

    const {toast} = useToast();

    return(
        <main>
            <form action="">
                <fieldset>
                    <label htmlFor="name">
                        <input type="text" placeholder="Name" required/>
                    </label>
                    <label htmlFor="email">
                        <input type="email" name="email" id="email" placeholder="Email" required/>
                    </label>
                    <label htmlFor="password">
                        <input type="password" name="password" id="password" placeholder="Password" required/>
                    </label>
                    <Button>Sign Up</Button>
                </fieldset>
            </form>
        </main>
    )
}

export default SignUp;
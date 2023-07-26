//hook import
import { useState } from "react";

//ui-component import
import { Button } from "@/components/ui/button"

/**
 * A Sign Up Component 
**/

const SignUp = () =>{
    interface FormSchema {
        label: string;
        type: "text" | "email" | "password";
        validation: {
          required: {
            value: boolean;
            message: string;
          };
          minLength?: {
            value: number;
            message: string;
          };
          pattern?: {
            value: RegExp;
            message: string;
          };
        };
      }

    const formSchema: FormSchema[] = [
        {
          label: 'Name',
          type: 'text',
          validation: {
            required: {
              value: true,
              message: 'Name is required.',
            },
          },
        },
        {
          label: 'Email',
          type: 'email',
          validation: {
            required: {
              value: true,
              message: 'Email is required.',
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: 'Invalid email address.',
            },
          },
        },
        {
          label: 'Password',
          type: 'password',
          validation: {
            required: {
              value: true,
              message: 'Password is required.',
            },
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters.',
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[^a-zA-Z\d]).{8,}$/,
              message:
                'Password must contain at least 8 characters, 1 uppercase letter, at least 2 numbers, and 1 special character.',
            },
          },
        },
      ];

      //state to store form data
      const [formData, setFormData] = useState('')
    
      //input change handler
      const handleChange = (event: { target: { value: any; }; }) => {
        const input = event.target.value
        setFormData(input)
      }

      //function to validate form data
      const validateFormData = () =>{
        //check if field is required but empty
        //check minimum length
        //check pattern validation
      }

      //form submit handler
      const submitHandler = () =>{
        //handle validation error and proceed with form submission
      }

    return(
        <main>
            <form onSubmit={submitHandler}>
                <fieldset>
                    {formSchema.map((form)=>{
                        return(
                            <label htmlFor={form.type} key={form.label}>
                                {form.label}
                            <input 
                            type={form.type}
                            placeholder={form.label}
                            id={form.label}
                            required={form.validation?.required.value}
                            onChange={handleChange}
                            />
                            </label>
                        )
                    })}
                    <Button type="submit">Sign Up</Button>
                </fieldset>
            </form>
        </main>
    )
}

export default SignUp;
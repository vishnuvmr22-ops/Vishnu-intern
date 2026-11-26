import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { z } from "zod";

const registerSchema = z.object({
    name: z.string().min(3, "Name must have minimum of 3 letters"),
    email: z.string().email("Enter valid email"),
    password: z.string().min(8, "password must contain at least 8 characters")
});

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,//to preserve other fields
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = registerSchema.safeParse(formData);
        if (result.success) {
            alert("Validation success✅");
            console.log(formData);
        } else {
            alert("❌" + result.error.issues[0].message);
        }
    };
    return (
        <div>
            <h1>Register form</h1>
            <form onSubmit={handleSubmit}>
                <Label htmlFor="name">Name:</Label>
                <Input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Enter your name" />
                <br />
                <Label htmlFor="email">Email:</Label>
                <Input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Enter your email" />
                <br />
                <Label htmlFor="password">Password:</Label>
                <Input type="text" name="password" onChange={handleChange} value={formData.password} placeholder="Enter password" />
                <br />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
export default Register
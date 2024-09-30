import { Button } from "@mantine/core";
import { useState } from "react";
import { validateForm } from "./Validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import toast from "react-hot-toast";

const Contact = () => {
    const form = {
        name: "",
        email: "",
        phone: "",
        message: "",
    };

    const [formData, setFormData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);

    const handleChange = (id: string, value: string) => {
        setFormData({ ...formData, [id]: value });
        setFormError({ ...formError, [id]: validateForm(id, value) });
    };
    const handleSubmit=async()=>{
        let valid=true;
        let newFormError:{[key:string]:string}={};
        for(let key in formData){
            const error=validateForm(key, formData[key]);
            if(error.length>0){
                newFormError[key]=error;
                valid=false;
            }
        }
        setFormError(newFormError);
        if(valid){
            setFormData(form);
            toast.success('Submitted Successfully!', {duration:4000});
            await addDoc(collection(db, "Portfolio"), formData);
        }
        else{
            toast.error('Some error occurred!', {duration:4000})
        }
    }

    return (
        <div className="relative" id="Contact">
            <h1>Contact</h1>
            <div className="floating-container">
                <input
                    type="text"
                    id="name"
                    className="floating-input"
                    placeholder=" "
                    value={formData.name}
                    onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
                <label htmlFor="name" className="floating-label">Name</label>
                {formError.name && <span className="error">{formError.name}</span>}
            </div>
            <div className="floating-container">
                <input
                    type="email"
                    id="email"
                    className="floating-input"
                    placeholder=" "
                    value={formData.email}
                    onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
                <label htmlFor="email" className="floating-label">Email</label>
                {formError.email && <span className="error">{formError.email}</span>}
            </div>
            <div className="floating-container">
                <input
                    type="number"
                    id="phone"
                    className="floating-input"
                    placeholder=" "
                    value={formData.phone}
                    onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
                <label htmlFor="phone" className="floating-label">Phone Number</label>
                {formError.phone && <span className="error">{formError.phone}</span>}
            </div>
            <div className="floating-container message">
                <input
                    type="text"
                    id="message"
                    className="floating-input"
                    placeholder=" "
                    value={formData.message}
                    onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
                <label htmlFor="message" className="floating-label">Message</label>
                {formError.message && <span className="error">{formError.message}</span>}
            </div>
            <Button className="ContactButton" onClick={handleSubmit} variant="filled" size="lg" radius="lg">Send</Button>
        </div>
    );
}

export default Contact;

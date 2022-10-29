import TextArea from '../Contact/TextArea'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import Container from '../layout/Container'
import emailjs from '@emailjs/browser'

import {useState} from 'react'

import styles from './Contact.module.css'



function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function sendEmail(e) {
        e.preventDefault();

        if(name === "" && email === "" && message === ""){
            alert("Preencha todos os campos")
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        
        emailjs.send("service_5p8kjxr","template_imve1qs", templateParams,"NPxVcW-R6rDZhIT3G")
        .then((resp)=>{
            console.log("EMAIL ENVIADO", resp.status, resp.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (err)=> {
            console.log("ERRO", err)
        })
    }


    return (
        
         <div className={styles.title}>
            <Container >
                <h1>Entre em contato conosco</h1>
                <form className={styles.text} onSubmit={sendEmail}>
                    <Input
                    type="text"
                    text="Nome"
                    name="name"
                    placeholder="Digite seu nome"
                    handleOnChange={(e) => setName(e.target.value)}
                    value = {name}
                    
                    />
                    <Input
                    type="text"
                    text="E-mail"
                    name="E-mail"
                    placeholder="Digite seu e-mail"
                    handleOnChange={(e) => setEmail(e.target.value)}
                    value = {email}
                    />
                    <TextArea 
                    type="text" 
                    placeholder="Como podemos ajudar você ?"
                    text="Digite sua mensagem: "
                    handleOnChange={(e) => setMessage(e.target.value)}
                    value = {message}
                    />
                    <SubmitButton text="Enviar"/>
                </form>
            </Container>
        </div>
        
    )
}

export default Contact
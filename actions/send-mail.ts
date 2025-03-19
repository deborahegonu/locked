'use server'

import { render } from '@react-email/components';
//import * as z from "zod"
import nodemailer from 'nodemailer'
//import { OTPSchema } from '@/schemas'
import { EmailOTP } from '@/templates/mail/EmailOTP';

const transporter = nodemailer.createTransport({
    host: 'mail.vividentinvestinc.com',
    port: 465,
    secure: true,
    auth: {
        user: 'test@vividentinvestinc.com',
        pass: 'viv@2024?',
    }
})



transporter.verify(function(error, success) {
    if (error) {
          console.log('Connection error:', error);
    } else {
          console.log('Server is ready to take our messages');
          console.log(success)
    }
});

export const emailUser = async () => {
    const mailOptions = {
        from: 'noreply@locked.com',
        to: 'debthebuilderx@gmail.com',
        subject: 'TEST MAIL',
        text: 'This is a test'
    }
    
    transporter.sendMail(mailOptions, function(error, response) {
        if(error) {
            console.log('Error:', error)
        } else {
            console.log('Email sent:', response)
        }
    })
    
    
}


export const sendOTP = async (email: string, otp: string) => {
    
    const emailHTML = await render(EmailOTP({ pin: otp }), { pretty: true });

    const mailOptions = {
        from: 'noreply@locked.com',
        to: email,
        subject: 'One-Time Password',
        html: emailHTML
    }

    transporter.sendMail(mailOptions, function(error, response) {
        if(error) {
            console.log('Error:', error)
        } else {
            console.log('Email sent:', response)
        }
    })
    
}



// export const sendMail = async (data: z.infer<typeof OTPSchema>) => {
//     try{
//         const validatedData = OTPSchema.parse(data);

//         if (!validatedData) {
//             return { error: 'Invalid input data'}
//         }

//         const { email, password } = validatedData;

//         const hashedPassword = await bcrypt.hash(password, 12);

//         const userExists = await prisma.user.findFirst({
//             where: {
//                 email: email
//             }
//         })

//         if(userExists) {
//             return { error: 'User already exists.'}
//         }

//         const lowerCaseEmail = email.toLowerCase();

//         const newUser = await prisma.user.create({
//             data: {
//                 email: lowerCaseEmail,
//                 password: hashedPassword
//             }
//         })

//         console.log(newUser)
//         return { success: 'User created successfully!'}

//     } catch (error) {
//         console.error('Error', error)
//         return { error: 'An error occurred. Try again later!'}
//     }
// }
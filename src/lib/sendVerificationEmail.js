import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASS,
  },
});

const sendVerificationEmail = async (toEmail, fullName, token) => {
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `HSBC <${process.env.AUTH_EMAIL}>`, // sender address
      to: toEmail, // list of receivers
      subject: "Email verification for HSBC", // Subject line
      text: `Hello ${fullName}, here is the verification link for your HSBC customer account. Please click the link to verify your email. Link ${process.env.NEXTAUTH_URL}api/authenticate/activate/${token}`, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  main().catch(console.error);
};

export default sendVerificationEmail;

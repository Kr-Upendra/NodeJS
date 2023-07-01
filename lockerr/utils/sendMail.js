import nodemailer from "nodemailer";

class Email {
  constructor(user, url) {
    this.to = user.email;
    this.name = user.username;
    this.url = url;
    this.from = `Upendra Kumar <${process.env.EMAIL_FROM}>`;
  }

  newCreateTransport() {
    if (process.env.NODE_ENV === "production") {
      return 1;
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(message, subject) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      message,
    };

    await this.newCreateTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send(
      "Welcome to our family.",
      "Welcome to the lockyourself family."
    );
  }
}

export default Email;

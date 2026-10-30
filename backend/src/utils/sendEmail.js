// Placeholder for Resend integration
const sendEmail = async (options) => {
    // You will connect Resend here!
    // options will contain: options.email, options.subject, options.message
    
    console.log('\n--- 📧 EMAIL SERVICE MOCK ---');
    console.log(`To: ${options.email}`);
    console.log(`Subject: ${options.subject}`);
    console.log(`Message:\n${options.message}`);
    console.log('-----------------------------\n');
    
    // Example Resend logic for you to easily uncomment later:
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'you@yourdomain.com', // Change this to your verified domain
      to: options.email,
      subject: options.subject,
      html: options.message
    });
    */
};

module.exports = sendEmail;

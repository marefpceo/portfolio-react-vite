import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <section>
      <title>Contact | Lamar Stevens</title>
      <meta
        name='description'
        content='Hire Lamar, an experienced freelance web developer in Kings County California. Contact me to discuss your website needs. '
      />
      <h1
        className='my-4 py-8 text-3xl sm:text-4xl md:text-5xl text-center text-nature-altLight 
        text-shadow-xs text-shadow-nature-light'
      >
        Contact
      </h1>
      <ContactForm />
    </section>
  );
}

export default Contact;

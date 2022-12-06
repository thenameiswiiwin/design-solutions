import Button from './Button';

const Contact = () => {
  return (
    <section className="container">
      <div className="space-y-6 md:space-y-[26px] rounded-xl bg-black px-6 py-49 text-center md:px-114 md:py-14">
        <h2>Book a call with me</h2>
        <p>
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </p>
        <Button styles="btn-secondary" />
      </div>
    </section>
  );
};

export default Contact;

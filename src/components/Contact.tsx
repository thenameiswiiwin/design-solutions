import Button from './Button';

const Contact = () => {
  return (
    <section className="container">
      <div className="md:px-114 space-y-6 rounded-xl bg-black px-6 py-49 text-center md:space-y-[26px] md:py-14 xl:grid xl:grid-cols-2 xl:place-items-center xl:px-75 xl:text-start">
        <div className="space-y-6 md:space-y-[26px]">
          <h2>Book a call with me</h2>
          <p>
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <Button styles="btn-secondary" />
      </div>
    </section>
  );
};

export default Contact;

import CallToAction from "../components/CallToAction";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <CallToAction />
            <Testimonials />
            <ContactForm />
        </>
    )
}

export default Home;
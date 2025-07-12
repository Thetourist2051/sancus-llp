import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactFormComponenet: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSuccess("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSuccess(null);

    try {
      // Replace with actual API endpoint or EmailJS/Formspree logic
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setSuccess("Your message has been sent successfully!");
    } catch (err) {
      setSuccess("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`spacing-class alternate-gradient ${styles["contact-section"]}`}
      id="contact"
    >
      <div className="container">
        <h2 className={styles["section-title"]} data-aos="fade-up">
          Get In <span className="theme-text">Touch</span>
        </h2>
        <p
          className={styles["section-subtitle"]}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Ready to discuss your legal needs? Contact us today for a confidential
          consultation with our experienced legal team.
        </p>
        <div className="row">
          <div className="col-md-6 ps-md-0 pe-md-3 px-2 mb-md-0  mb-3" data-aos="fade-right">
            <div className={styles["info-box"]}>
              <h4>Contact Information</h4>
              <p>
                With strategically located offices, we cater to a wide
                clientele. Reach out to us through any of the following methods.
              </p>

              <div
                className={styles["info-item"]}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className={styles["info-icon"]}>
                  <Icon
                    icon="mdi:location-multiple-outline"
                    height={24}
                    width={24}
                    color={"var(--text-light)"}
                  />
                </div>
                <div>
                  <strong>Delhi Office</strong>
                  <p>
                    34, Babar Lane, Bengali Market, Todermal Road Area,
                    <br />
                    Mandi House, New Delhi – 110001
                  </p>
                </div>
              </div>

              <div
                className={styles["info-item"]}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className={styles["info-icon"]}>
                  <Icon
                    icon="mdi:location-multiple-outline"
                    height={24}
                    width={24}
                    color={"var(--text-light)"}
                  />
                </div>

                <div>
                  <strong>Patna Office</strong>
                  <p>
                    A-32, Giriraj Apartments,
                    <br />
                    Vivekananda Marg, Patna – 800001
                  </p>
                </div>
              </div>

              <div
                className={styles["info-item"]}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className={styles["info-icon"]}>
                  <Icon
                    icon="mdi:phone"
                    height={24}
                    width={24}
                    color={"var(--text-light)"}
                  />
                </div>
                <div>
                  <strong>Contact</strong>
                  <p>
                    <a href="tel:+919971903768">+91-9971903768</a>,{" "}
                    <a href="tel:+918789421428">+91-8789421428</a>
                  </p>
                </div>
              </div>

              <div
                className={styles["info-item"]}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className={styles["info-icon"]}>
                  <Icon
                    icon="mdi:email-outline"
                    height={24}
                    width={24}
                    color={"var(--text-light)"}
                  />
                </div>
                <div>
                  <strong>Email</strong>
                  <p>
                    <a href="mailto:sancuslegalllp@gmail.com">
                      sancuslegalllp@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="col-md-6 ps-md-3 pe-md-0 px-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <form className={styles["form-box"]} onSubmit={handleSubmit}>
              <h4>Send us a Message</h4>
              <div className="row">
                <div
                  className="col-md-6 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Full Name *"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div
                  className="col-md-6 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="350"
                >
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email Address *"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div
                  className="col-md-6 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    placeholder="Phone Number"
                    onChange={handleChange}
                  />
                </div>

                <div
                  className="col-md-6 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="450"
                >
                  <label htmlFor="service">Select a Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option>White Collar Crimes</option>
                    <option>Civil & Criminal Litigation</option>
                    <option>Commercial Disputes</option>
                    <option>Taxation Matters</option>
                    <option>IPR & Media Law</option>
                  </select>
                </div>

                <div
                  className="col-12 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    placeholder="Tell us about your legal needs..."
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {success && (
                <p
                  style={{ color: "var(--theme-color)", fontSize: "0.95rem" }}
                  data-aos="fade-up"
                >
                  {success}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                data-aos="fade-up"
                data-aos-delay="550"
              >
                <Icon icon="mdi:send" className="me-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormComponenet;

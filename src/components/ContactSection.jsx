import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

export const ContactSection = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    // ✅ Your Web3Forms Access Key
    formData.append("access_key", "60e59e04-135d-4e01-bef4-b455d41e074c");

    // ✅ Email Subject
    formData.append("subject", "New Portfolio Contact Message");

    // ✅ Send to your email
    formData.append("from_name", "Portfolio Contact Form");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setOpen(true);
        e.target.reset();
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }

    setIsSubmitting(false);
  };

  return (
    <Toast.Provider swipeDirection="right">
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:mukeshpatnaik46@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      mukeshpatnaik46@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:+919876543210"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9876543210
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="font-medium mb-4">Connect With Me</h4>

                <div className="flex space-x-4">
                  <a href="#" className="p-2 rounded-full border hover:bg-primary/10">
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a href="#" className="p-2 rounded-full border hover:bg-primary/10">
                    <Twitter className="w-5 h-5" />
                  </a>

                  <a href="#" className="p-2 rounded-full border hover:bg-primary/10">
                    <Instagram className="w-5 h-5" />
                  </a>

                  <a href="#" className="p-2 rounded-full border hover:bg-primary/10">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="bg-card p-8 rounded-lg shadow-xs">
              <h3 className="text-2xl font-semibold mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Hi, I'd love to hear from you!"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}

                  <Send size={16} />
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* TOAST */}
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-md shadow-lg"
      >
        <Toast.Title className="font-semibold">
          Message Sent ✅
        </Toast.Title>

        <Toast.Description>
          Thank you! I’ll get back to you soon.
        </Toast.Description>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-0 right-0 p-6 w-80 max-w-full" />
    </Toast.Provider>
  );
};

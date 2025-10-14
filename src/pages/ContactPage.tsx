import { Button } from "@/components/common/Button";
import { IconButton } from "@/components/common/IconButton";
import { ToastNotification } from "@/components/common/ToastNotification";
import { ContactCard } from "@/components/specific/ContactCard";
import { contactCardItems, contactIconItems } from "@/utils/contactCardItems";
import { SendIcon } from "lucide-react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

type TApiResponse = {
  success?: boolean;
  message?: string;
  errors?: { path: string; msg: string }[];
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState<boolean | null>(null);
  const [toastType, setToastType] = useState<boolean | undefined>(undefined); // true: success, false: error

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);

      const result: TApiResponse = await response.json();

      if (!response.ok) {
        // Kalau backend ngirim { success: false, message: "..." }
        // maka otomatis error code 500, error code dibawah itu dijadikan error server
        if (result.success === false) {
          throw new Error(result.message);
        }

        // Kalau backend ngirim errors array
        if (result.errors) {
          result.errors.forEach((err) => {
            setError(err.path, {
              type: "server",
              message: err.msg,
            });
          });
        }

        return;
      }
      // console.log(result);
      // return;
      setStatus(result.message || "Message sent successfully");
      setShowToast(true);
      setToastType(result.success);
      // reset();
    } catch (error) {
      setStatus((error as Error)?.message || "Something went wrong");
      setShowToast(true);
    }
  };

  const closeToast = () => {
    setShowToast(null);
  };

  return (
    <main className="min-h-screen bg-light dark:bg-black">
      {showToast && (
        <ToastNotification
          type={toastType}
          message={status}
          onClose={closeToast}
        />
      )}
      <section
        id="contact"
        className="mx-auto flex flex-col py-20 h-fit justify-center items-center max-w-7xl bg-white dark:bg-dark dark:border-x dark:border-x-border-dark"
      >
        <div className="px-4 sm:px-6 lg:px-12 text-center mb-10">
          <Fade cascade damping={0.1} triggerOnce>
            <h1 className="text-h1 space-y-5">Contact</h1>

            <p className="text-sm md:text-xl text-description dark:text-inverse">
              I’m open to both full-time roles and freelance projects.
            </p>
            <p className="text-sm md:text-xl text-description dark:text-inverse">
              Feel free to reach out if you have any questions or opportunities!
            </p>
          </Fade>
        </div>
        <div className="px-4 sm:px-6 lg:px-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <Fade delay={500} cascade damping={0.1} triggerOnce>
              <h2 className="text-h2 text-center mb-8">
                Let's discuss your Project
              </h2>

              <div className="space-y-6">
                {contactCardItems.map((item, index) => (
                  <ContactCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    detail={item.detail}
                  />
                ))}
              </div>
              <div className="flex justify-start space-x-4 mt-6">
                {contactIconItems.map((item, index) => (
                  <IconButton key={index} icon={item.icon} to={item.link} />
                ))}
              </div>
            </Fade>
          </div>

          <Fade delay={1000} cascade damping={0.1} triggerOnce>
            <div className="bg-gradient-to-br from-inverse via-light to-inverse dark:bg-none dark:border dark:border-border-dark rounded-lg shadow-lg p-8">
              <h2 className="text-center text-h2 mb-6">Get In Touch</h2>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      placeholder="Your e-mail"
                      className="w-full bg-transparent border border-border-dark rounded-lg px-4 py-3 text-primary dark:text-secondary placeholder-description focus:outline-none dark:focus:border-light transition"
                      autoFocus
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.email.message?.toString() ||
                          "Email is required"}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      {...register("subject", { required: true })}
                      placeholder="Subject"
                      className="w-full bg-transparent border border-border-dark rounded-lg px-4 py-3 text-primary dark:text-secondary placeholder-description focus:outline-none dark:focus:border-light transition"
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.subject.message?.toString() ||
                          "Subject is required"}
                      </p>
                    )}
                  </div>
                  <div className="mb-6">
                    <textarea
                      {...register("message", { required: true })}
                      placeholder="Message"
                      rows={5}
                      className="w-full bg-transparent border border-border-dark rounded-lg px-4 py-3 text-primary dark:text-secondary placeholder-description dark:placeholder-inverse focus:outline-none dark:focus:border-light transition resize-none"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.message.message?.toString() ||
                          "Message is required"}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    {isSubmitting ? (
                      <Button disabled className="w-full">
                        Sending...
                      </Button>
                    ) : (
                      <Button
                        icon={SendIcon}
                        iconPosition="right"
                        className="w-full"
                      >
                        Send
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

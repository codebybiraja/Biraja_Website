
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Mail, Phone, Loader2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 89174 30074",
      color: "text-blue-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "birajaroutraywork@gmail.com",
      color: "text-red-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Location",
      value: "Odisha, India",
      color: "text-green-600",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Prepare template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString()
    };

    try {
      // Initialize EmailJS with your public key
      emailjs.init("VFVYxDMmnasMzfc4F");
      
      // Send the email using emailjs
      const result = await emailjs.send(
        "service_r1ao59q", 
        "template_8gy35c9", 
        templateParams
      );

      if (result.status === 200) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to send message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-kv-navy">Contact Information</h3>
            <p className="text-kv-gray mb-8">
              Feel free to reach out to me for academic collaborations, project discussions, 
              or any other queries. I'm always open to connecting with fellow students and mentors.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`p-3 rounded-full bg-gray-100 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm text-kv-gray">{item.title}</h4>
                    <p className="font-medium text-kv-navy">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-kv-navy">Send Me a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-kv-gray">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Name please..." 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-kv-gray">
                      Your Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Email please..." 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-kv-gray">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can I help you?" 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-kv-gray">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-kv-blue hover:bg-kv-navy"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

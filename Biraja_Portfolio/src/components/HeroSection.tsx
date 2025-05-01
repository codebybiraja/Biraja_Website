
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-[90vh] pt-16 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in">
            <h2 className="text-kv-teal font-semibold mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-kv-navy mb-4">
              Biraja Prasad Routray
            </h1>
            <h3 className="text-xl md:text-2xl text-kv-gray font-medium mb-6">
              Class 11 Science Student @ Kendriya Vidyalaya
            </h3>
            <p className="text-kv-gray max-w-lg mb-8">
              Passionate about science, technology, and mathematics. Aspiring to build
              a future in engineering and innovation through dedicated learning and
              practical applications.
            </p>
            <div className="flex gap-4">
              <Button className="bg-kv-blue hover:bg-kv-navy text-white">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" className="text-kv-blue border-kv-blue hover:bg-blue-50">
                <a href="#achievements">My Achievements</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-kv-teal/20 p-2">
                <div className="w-full h-full rounded-full bg-white overflow-hidden border-4 border-white shadow-lg">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src="biraj.jpg" 
                      alt="Student profile photo" 
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl bg-gray-200 text-gray-500">BR</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full shadow-md p-3">
                <div className="bg-kv-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                  KV
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import { Card, CardContent } from "@/components/ui/card";
import { Book, User, Users } from "lucide-react";

const AboutSection = () => {
  const personalInfo = [
    { label: "Name", value: "Biraja Prasad Routray" },
    { label: "Age", value: "16 years" },
    { label: "Class", value: "11th (Science Stream)" },
    { label: "School", value: "Kendriya Vidyalaya" },
    { label: "Location", value: "Odisha, India" },
    { label: "Email", value: "birajaroutraywork@gmail.com" },
  ];

  const interestItems = [
    {
      icon: <Book className="w-6 h-6" />,
      title: "Academic Interests",
      items: ["Physics", "Computer Science", "Mathematics", "Chemistry"],
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Personal Interests",
      items: ["Reading fantasy novel", "Watching anime", "Photography", "Coding"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Extracurricular",
      items: ["Coding club", "GCDP BBSR"],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-kv-navy">Who I Am</h3>
            <p className="text-kv-gray mb-6">
              I'm a dedicated student with a passion for learning and exploring new concepts in science and technology.
              Currently in Class 11 at Kendriya Vidyalaya, I'm focusing on the Science stream with aspirations to pursue
              higher education in engineering or computer science.
            </p>
            <p className="text-kv-gray mb-6">
              My academic journey is driven by curiosity and a desire to understand how things work. I enjoy solving
              complex problems and applying theoretical knowledge to practical situations. Outside of academics, I
              participate actively in various school clubs and competitions to develop a well-rounded personality.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-sm text-kv-gray">{item.label}:</span>
                  <span className="font-medium text-kv-navy">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {interestItems.map((item, index) => (
              <Card key={index} className="hover-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-kv-teal">{item.icon}</div>
                    <h4 className="text-lg font-semibold text-kv-navy">{item.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.items.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-kv-gray rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

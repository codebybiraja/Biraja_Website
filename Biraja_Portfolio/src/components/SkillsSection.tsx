
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  const academicSkills = [
    { name: "Physics", level: 85 },
    { name: "Mathematics", level: 90 },
    { name: "Chemistry", level: 80 },
    { name: "Computer Science", level: 85 },
    { name: "English", level: 80 },
  ];

  const technicalSkills = [
    { name: "HTML/CSS", level: 70 },
    { name: "JavaScript", level: 60 },
    { name: "Python", level: 75 },
  ];

  const softSkills = [
    "Public Speaking",
    "Time Management",
    "Critical Thinking",
    "Communication",
    "Adaptability",
    "Quick Understanding",
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover-card dark:border-gold/30 dark:bg-dark-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-kv-navy dark:text-gold">Academic Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {academicSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-2 rounded-lg bg-muted dark:bg-dark-secondary text-center text-foreground dark:text-gold/80"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover-card dark:border-gold/30 dark:bg-dark-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-kv-navy dark:text-gold">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {technicalSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-2 rounded-lg bg-muted dark:bg-dark-secondary text-center text-foreground dark:text-gold/80"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover-card md:col-span-2 lg:col-span-1 dark:border-gold/30 dark:bg-dark-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-kv-navy dark:text-gold">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className={cn(
                      "px-3 py-2 rounded-full text-white text-sm",
                      index % 3 === 0 && "bg-kv-blue dark:bg-gold/80",
                      index % 3 === 1 && "bg-kv-teal dark:bg-gold/60",
                      index % 3 === 2 && "bg-kv-navy dark:bg-gold/40"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

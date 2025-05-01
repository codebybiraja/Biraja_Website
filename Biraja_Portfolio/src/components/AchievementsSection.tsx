
import { Card, CardContent } from "@/components/ui/card";
import { Award, Book, Code, FileText, Star, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "In-School Science Quiz ",
      description: "Secured 3rd position at in-school science quiz competition in class 9",
      year: "2023",
      color: "bg-blue-100 text-kv-blue",
    },
    // {
    //   icon: <Code className="w-10 h-10" />,
    //   title: "",
    //   description: "",
    //   year: "",
    //   color: "bg-green-100 text-green-700",
    // },
    {
      icon: <Book className="w-10 h-10" />,
      title: "Mathematics Talent Search",
      description: "Selected among top 5% students in a local Mathematics Talent Search Examination.",
      year: "2022",
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Debate Competition",
      description: "Secured 4th prize in a inter-school hindi debate competition",
      year: "2023",
      color: "bg-amber-100 text-amber-700",
    },
    // {
    //   icon: <FileText className="w-10 h-10" />,
    //   title: "Essay Writing",
    //   description: "First prize in national level essay writing competition on 'Future of Technology'.",
    //   year: "2022",
    //   color: "bg-red-100 text-red-700",
    // },
    {
      icon: <Star className="w-10 h-10" />,
      title: "School Representative",
      description: "Selected as Science Club representative for the school.",
      year: "2023",
      color: "bg-teal-100 text-kv-teal",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">Achievements</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover-card border-t-4 border-t-kv-teal">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={cn("p-3 rounded-full", achievement.color)}>
                    {achievement.icon}
                  </div>
                  <span className="text-sm bg-gray-200 text-kv-gray px-2 py-1 rounded">
                    {achievement.year}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-kv-navy">{achievement.title}</h3>
                <p className="text-kv-gray text-sm">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

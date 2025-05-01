
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const educationTimeline = [
    {
      year: "2023 - Present",
      title: "Class 11 - Science Stream",
      institution: "Kendriya Vidyalaya",
      description:
        "Currently studying Physics, Chemistry, Mathematics, Computer Science, and English. Maintaining an excellent academic record with focus on practical applications.",
    },
    {
      year: "2022 - 2023",
      title: "Class 10 - CBSE Board",
      institution: "Kendriya Vidyalaya",
      description:
        "Completed Class 10 with 90% marks. Received appreciation for outstanding performance in Mathematics and Science subjects.",
    },
    {
      year: "2020 - 2022",
      title: "Class 8-9",
      institution: "Kendriya Vidyalaya",
      description:
        "Foundational years with focus on core subjects. Participated in various inter-school competitions and science exhibitions.",
    },
    {
      year: "2015 - 2020",
      title: "Primary Education",
      institution: "Kendriya Vidyalaya",
      description:
        "Built strong fundamentals across all subjects. Recognized for consistent academic excellence and participation in co-curricular activities.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">My Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {educationTimeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <Card className="hover-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-kv-navy">{item.title}</h3>
                      <span className="text-sm bg-kv-blue/10 text-kv-blue px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-kv-teal font-medium mb-3">{item.institution}</p>
                    <p className="text-kv-gray">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

import React from 'react';
import { Card } from '@/components/ui/card';

const skillCategories = {
  "Frontend Development": [
    { name: 'HTML/CSS', icon: '🌐', color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', icon: '🟨', color: 'from-yellow-500 to-blue-400' },
    { name: 'React.js', icon: '⚛️', color: 'from-blue-500 to-cyan-400' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-teal-500 to-blue-500' },
    { name: 'TypeScript', icon: '🔷', color: 'from-green-600 to-red-500' }     
  ],
  "Backend Development": [
    { name: 'Java', icon: '☕', color: 'from-orange-600 to-red-600' },
    { name: 'Spring Boot', icon: '🍃', color: 'from-blue-600 to-blue-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-600 to-blue-500' },
    { name: 'PHP', icon: '❄️', color: 'from-purple-600 to-blue-600' }
  ],
  "Database & Storage": [
    { name: 'MySQL', icon: '🐬', color: 'from-blue-600 to-orange-500' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-red-500' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-blue-600' }
  ],
  "Cloud & DevOps": [
    { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-500' },
    { name: 'Jenkins', icon: '🧛', color: 'from-green-600 to-blue-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-green-500' },
    { name: 'Kubernetes', icon: '⚙️', color: 'from-blue-600 to-purple-600' }
  ],
  "Development Tools": [
    { name: 'Git & GitHub', icon: '🐱', color: 'from-gray-700 to-gray-600' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-600 to-blue-500' },
    { name: 'Postman', icon: '📮', color: 'from-orange-500 to-red-500' },
    //{ name: 'Figma', icon: '🎨', color: 'from-purple-500 to-pink-500' }
  ]
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Skills & Technologies
        </h2>
        <div className="grid gap-8 max-w-7xl mx-auto">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <Card key={category} className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center`}>
                  <span className="text-2xl">
                    {category.includes('Frontend') ? '🎨' : 
                     category.includes('Backend') ? '⚙️' :
                     category.includes('Database') ? '🗃️' :
                     category.includes('Cloud') ? '☁️' : '🛠️'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gradient-accent">
                  {category}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="group p-6 rounded-xl bg-muted/10 hover:bg-muted/20 border border-muted/20 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${(categoryIndex * 200) + (index * 100)}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                        <div className="text-sm text-muted-foreground">
                          Professional
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
import React from 'react';
import { BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white/80">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <BookOpen className="w-6 h-6 text-amber-800 mr-3" />
          <h2 className="text-lg font-medium text-amber-900">About us</h2>
        </div>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras porttitor hendrerit quam, vitae pretium magna dictum eget diam. In quidem facilisis urna, eget vestiblum purus sollicitudin ac. Morbi vel rutrum ex. Pellentesque eget est sit amet dui volutpat vulputate.
        </p>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          Proin rhoncus suscipit eros, eu blandit nisl gravida sit amet. Quisque nec turpis eu metus vulputate varius. Cras in est metus. Fusce at diam sed nisi condimentum tempus. Aenean vitae tempor ex. Nam quis arcu non ligula tincidunt scelerisque sed eu ex. Sed rhoncus quis nisi at luctus. Donec eu dui a sem volutpat sollicitudin.
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          Praesent et nisl purus. Curabitur at tempus nisl, non tristique ipsum. Sed ultrices sagittis posuere. Curabitur tincidunt, enim quis dignissim faucibus, augue erat porttitor diam, ut tristique magna felis ac libero. Ut imperdiet efficitur est, ut luctus tellus tristique non. Suspendisse id eleifend risus, ut porta dui.
        </p>
      </div>
    </section>
  );
};

export default About;
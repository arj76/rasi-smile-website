
import React from "react";

export interface BlogPost {
  title: string;
  date: string;
  category: string;
  image: string;
  content: React.ReactNode;
}

export const blogPostsData: Record<string, BlogPost> = {
  "5-essential-tips-for-maintaining-healthy-teeth": {
    title: "5 Essential Tips for Maintaining Healthy Teeth",
    date: "March 15, 2025",
    category: "Oral Care Tips",
    image: "/lovable-uploads/5badb23f-5035-400c-b1f8-3aaffcd605b4.png",
    content: (
      <div className="space-y-8 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            1. Brush Twice Daily and Brush Properly
          </h2>
          <p className="mb-4">
            Brushing your teeth at least twice a day is fundamental. But it&apos;s not just about frequency—it&apos;s about technique too.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Use a soft-bristled toothbrush and fluoride toothpaste.</li>
            <li>Hold the brush at a 45-degree angle to your gums.</li>
            <li>Use short, gentle strokes to clean all surfaces of your teeth.</li>
            <li>Don&apos;t forget to brush your tongue to remove bacteria and freshen breath.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            2. Floss Daily to Remove Hidden Plaque
          </h2>
          <p className="mb-4">
            Flossing is essential for removing food particles and plaque from areas your toothbrush can&apos;t reach.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Use about 18 inches of floss and wind most of it around your middle fingers.</li>
            <li>Gently slide the floss between teeth and curve it into a C-shape.</li>
            <li>Don&apos;t forget the back of your last teeth.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            3. Limit Sugary and Acidic Foods
          </h2>
          <p className="mb-4">
            Sugars and acids are your teeth&apos;s worst enemies. They feed harmful bacteria and erode enamel.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Cut down on candies, soda, fruit juices, and processed snacks.</li>
            <li>Rinse your mouth or drink water after eating acidic foods.</li>
            <li>Chew sugar-free gum to stimulate saliva, which helps neutralize acids.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            4. Visit Your Dentist Regularly
          </h2>
          <p className="mb-4">
            Professional cleanings and check-ups are key to preventing serious dental issues.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Schedule a dental visit every six months.</li>
            <li>Get professional advice on your oral health routine.</li>
            <li>Early detection of issues like cavities or gum disease saves money and pain in the long run.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            5. Don&apos;t Ignore Your Gums
          </h2>
          <p className="mb-4">
            Healthy gums are just as important as healthy teeth.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Look out for signs like bleeding, swelling, or receding gums.</li>
            <li>Use an antimicrobial mouthwash to reduce bacteria.</li>
            <li>Maintain a healthy diet rich in vitamins and minerals to support gum health.</li>
          </ul>
        </section>

        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Conclusion
          </h2>
          <p>
            Oral health is a lifelong commitment. By incorporating these five simple yet essential habits into your daily routine, you can enjoy strong teeth, fresh breath, and a confident smile. Remember, a healthy mouth reflects a healthy body—start taking care of your teeth today!
          </p>
        </section>
      </div>
    )
  },
  "debunking-common-dental-myths": {
    title: "Debunking Common Dental Myths",
    date: "April 10, 2025",
    category: "Dental Myths",
    image: "/lovable-uploads/b60f1856-1a5b-441c-9317-cc3ec6690378.png",
    content: (
      <div className="space-y-8 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Common Dental Myths Exposed
          </h2>
          <p className="mb-4">
            There are many misconceptions about dental health that can actually harm your oral care routine. Let&apos;s separate fact from fiction.
          </p>
        </section>
        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
          <p>This content is managed by a dedicated blog post component. Visit our dental myths article for the complete content.</p>
        </section>
      </div>
    )
  },
  "importance-of-regular-dental-checkups": {
    title: "The Importance of Regular Dental Checkups",
    date: "March 22, 2025",
    category: "Preventive Care",
    image: "/lovable-uploads/62e85c5b-b4a1-4801-afc2-ffb8310b30dc.png",
    content: (
      <div className="space-y-8 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Why Regular Checkups Matter
          </h2>
          <p className="mb-4">
            Regular dental checkups are essential for maintaining optimal oral health and preventing serious dental issues.
          </p>
        </section>
        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
          <p>This content is managed by a dedicated blog post component. Visit our dental checkups article for the complete content.</p>
        </section>
      </div>
    )
  },
  "modern-dental-technology-whats-new": {
    title: "Modern Dental Technology: What's New?",
    date: "May 6, 2025",
    category: "Technology",
    image: "/lovable-uploads/dceedb36-277f-4319-ba96-4288fbbf07eb.png",
    content: (
      <div className="space-y-8 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Latest Dental Technology
          </h2>
          <p className="mb-4">
            Discover the cutting-edge technology that&apos;s revolutionizing dental care and making treatments more comfortable than ever.
          </p>
        </section>
        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
          <p>This content is managed by a dedicated blog post component. Visit our modern technology article for the complete content.</p>
        </section>
      </div>
    )
  }
};

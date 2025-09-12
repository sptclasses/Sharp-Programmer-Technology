import Image from "next/image";

export default function AboutSection() {
  const stats = [
    { value: "500+", label: "Students Graduated" },
    { value: "10+", label: "Years Experience" },
    { value: "15+", label: "Expert Instructors" },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Us</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">Empowering Education Through Excellence</h3>
            <p className="text-lg mb-6 text-gray-600 leading-relaxed">
              We are a government-certified institution dedicated to providing high-quality education and comprehensive
              library facilities. Our mission is to foster learning and development through innovative teaching methods and
              state-of-the-art resources.
            </p>
            <p className="text-lg mb-8 text-gray-600 leading-relaxed">
              With years of experience in education, we have helped thousands of students achieve their academic and
              professional goals through our carefully designed courses and extensive library resources.
            </p>
            <div className="flex gap-8 justify-center md:justify-start">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-2xl font-bold text-purple-600 mb-2">{stat.value}</h4>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Image
              src="/images/1710743175phptumVs9.jpeg"
              alt="About Us"
              width={600}
              height={400}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

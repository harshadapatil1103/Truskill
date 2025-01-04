import React from 'react';

const AboutTruskill = () => {
  return (
    <section className="bg-[#FFFFFF] px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-[32px] text-gray-900 mb-8 font-poppins font-semibold">
            About Truskill Technology
          </h1>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Our highly tech-enabled system offers comprehensive student 
              assistance, allowing us to understand individual strengths and 
              weaknesses. Our experienced mentors and career advisors collaborate
            </p>
            <p>to create customized strategies for maximum success.</p>
            <p>
              Our unique, one-of-a-kind model has been tested and proven to 
              improve students' cognitive index up to three times in PI 
              Assessments,
            </p>
            <p>making it a unique and effective solution for skill development.</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute right-0 top-8 w-[85%] h-[90%] bg-[#e0f7f1] -z-10"></div>
          <div className="space-y-8">
            <img 
              src="/images/about/about_us_1.jpeg" 
              alt="Modern office interior"
              className="w-full object-cover rounded-md shadow-md"
            />
            {/* <img 
              // src="/images/about/about_us_2.jpeg" 
              alt="People working on laptops"
              className="w-[85%] ml-auto object-cover rounded-md shadow-md"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTruskill;
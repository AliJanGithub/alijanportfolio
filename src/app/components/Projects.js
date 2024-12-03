import React from 'react';
import profilePic from '../alijannnn.PNG'; // Update with your image path
import pic2 from '../zeta.PNG';
import proj3 from '../proj3.jpeg';
import proj4 from '../proj4.jpeg';
import proj5 from '../softlyfy.jpeg';
import Image from 'next/image';

const projectData = [
  {
    title: 'Green Book',
    description: 'To Highlight the environmental issues',
    imageUrl: profilePic, // Replace with your project image URL
    link: 'https://greenbook-zeta.vercel.app/', // Replace with your project link
  },
  {
    title: 'Expense Tracker',
    description: 'To track the expenses made in life.',
    imageUrl: pic2, // Replace with your project image URL
    link: 'https://notesapp-7bqq.vercel.app/', // Replace with your project link
  },
  {
    title: 'Online Newspaper',
    description: 'This is an online newspaper',
    imageUrl: proj3, // Replace with your project image URL
    link: 'https://newspaperonline.vercel.app/', // Replace with your project link
  },
  {
    title: 'Online Text Editor',
    description: 'Online text editor',
    imageUrl: proj4, // Replace with your project image URL
    link: 'https://utils-b55s4p0ar-ali-jameels-projects.vercel.app/', // Replace with your project link
  },
  {
    title: 'Softlyfy',
    description: 'Web agency website',
    imageUrl: proj5, // Replace with your project image URL
    link: '#', // Replace with your project link
  },
  // {
  //   title: 'GreenBook',
  //   description: 'Go and Enjoy the GreenBook experience',
  //   imageUrl: profilePic, // Replace with your project image URL
  //   link: 'https://greenbook-zeta.vercel.app/', // Replace with your project link
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="image-wrapper">
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                className="project-image" 
                width={300} 
                height={230} 
                layout="responsive" 
                blurDataURL="data:image/png;base64,..." // Replace with your Base64 data
                placeholder="blur"
              />
            </div>
            <h3 style={{ marginBottom: 3,marginTop:10 }}>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>

      <style jsx>{`
        .projects-section {
          padding: 80px 20px;
          color: white;
          background-color: rgba(0, 0, 0, 0.8);
          text-align: center;
        }

        h2 {
          margin-bottom: 40px;
          font-size: 2.5rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 50px;
          max-width: 1200px;
          margin: 40px auto;
        }

        .project-card {
background: rgb(35,20,52);
background: -moz-linear-gradient(90deg, rgba(35,20,52,1) 19%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 80%);
background: -webkit-linear-gradient(90deg, rgba(35,20,52,1) 19%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 80%);
background: linear-gradient(90deg, rgba(35,20,52,1) 19%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 80%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#231434",endColorstr="#000000",GradientType=1);          border-radius: 30px;
          padding: 10px;
          text-align: left;
          transition: transform 0.3s;
          position: relative;
          border: 4px solid rgba(0, 255, 255, 0.6);
          box-shadow: 0 15px 30px rgba(0, 255, 255, 0.5),
              0 8px 20px rgba(0, 0, 0, 0.8);
          overflow: hidden;
          margin-top: 12px;
        }

        .project-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.9);
        }

        .image-wrapper {
          height: 200px; /* Set a fixed height */
          overflow: hidden; /* Hide any overflow */
          border-radius: 20px; /* Border radius applied here */
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensures the image covers the container */
        }

        .project-link {
          display: inline-block;
          margin-top: 10px;
          padding: 10px 15px;
          color: white;
background: rgb(14,127,223);
background: -moz-linear-gradient(90deg, rgba(14,127,223,1) 19%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 80%);
background: -webkit-linear-gradient(90deg, rgba(14,127,223,1) 19%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 80%);
background: linear-gradient(90deg, rgba(14,127,223,1) 19%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 80%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0e7fdf",endColorstr="#000000",GradientType=1);          border-radius: 12px;
          text-decoration: none;
          transition: background 0.3s;
        }

        .project-link:hover {
          background: #005580;
        }
      `}</style>
    </section>
  );
}

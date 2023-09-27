import React from 'react';
import { useGetResumeQuery } from '../api/resumeApi';
import { mockResumeData } from '../api/mockData';

const Resume = () => {
  const { data: resume, isLoading, isError } = useGetResumeQuery();

  const useMockData = true;
  console.log('Resume Data:', resume);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching resume data.</div>;
  }

  if (!resume && !useMockData) {
    return <div>Resume data not available.</div>;
  }

  const displayResume = useMockData ? mockResumeData : resume;

  return (
    <div>
      <h1>{displayResume.name}</h1>
      <p>{displayResume.summary}</p>

      <h2>Experience</h2>
      <ul>
        {displayResume.experience.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.date}</p>
          </li>
        ))}
      </ul>

      <h2>Education</h2>
      <ul>
        {displayResume.education.map((edu) => (
          <li key={edu.id}>
            <h3>{edu.degree}</h3>
            <p>{edu.school}</p>
            <p>{edu.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;

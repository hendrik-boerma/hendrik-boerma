import React, { createContext, useState, useEffect } from 'react';
import client from './sanityClient'

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [header, setHeader] = useState('');
    const [about, setAbout] = useState('');
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [certificates, setCertificates] = useState([])
    const [studies, setStudies] = useState([])
    const [work, setWork] = useState([])
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const queryAbout = '*[_type == "aboutText"][0]'
            const queryHeader = `*[_type == "header"][0] {
                title,
                subtitle}`
            const querySkills = '*[_type == "skills"][0]'
            const queryCertificates = `*[_type == "certificates"] {
                name,
                link
            }`
            const queryProjects = `*[_type == "projects"] | order(order asc) {
                name,
                subtitle,
                tags,
                description,
                link,
                linktext}`
            const queryStudies = `*[_type == "studies"] | order(order asc) {
                studiename,
                institution,
                startDate,
                endDate}`
            const queryWork = `*[_type == "work"] | order(order asc) {
                role,
                company,
                startDate,
                endDate}`

                try {
                    const [aboutResponse, headerResponse, skillsResponse, certificateResponse, projectsResponse, studiesResponse, workResponse] = await Promise.all([
                        client.fetch(queryAbout),
                        client.fetch(queryHeader),
                        client.fetch(querySkills),
                        client.fetch(queryCertificates),
                        client.fetch(queryProjects),
                        client.fetch(queryStudies),
                        client.fetch(queryWork)
                      ]);
              
                      setHeader(headerResponse);
                      setAbout(aboutResponse.content);
                      setSkills(skillsResponse.skills);
                      setCertificates(certificateResponse)
                      setProjects(projectsResponse)
                      setStudies(studiesResponse)
                      setWork(workResponse)
                      setError(false)
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setError(true)
                }
            };
        fetchData()
      }, []);

      if (error) {
        return (
            <div className="flex flex-col items-center justify-center text-center gap-8 min-h-screen">
                <h1 className="text-2xl font-bold text-textcolor md:text-6xl p-4">Content helaas niet geladen...</h1>
                <button onClick={() => window.location.reload()} className="bg-backgroundcolor2 text-textcolor p-4 rounded hover:bg-primary hover:text-secondary">
                    Content opnieuw laden
                </button>
            </div>
        );
    }

    return (
        <DataContext.Provider value={{ header, about, projects, certificates, skills, studies, work}}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
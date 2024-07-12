import React, { createContext, useState, useEffect } from 'react';
import client from './sanityClient'

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [about, setAbout] = useState('');
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [certificates, setCertificates] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const queryAbout = '*[_type == "aboutText"][0]'
            const queryTitle = '*[_type == "title"][0]'
            const querySubtitle = '*[_type == "subTitle"][0]'
            const querySkills = '*[_type == "skills"][0]'
            const queryCertificates = `*[_type == "certificates"] {
                name,
                link
            }`
            const queryProjects = `*[_type == "projects"] {
                name,
                subtitle,
                tags,
                description,
                link,
                linktext}`

                try {
                    const [aboutResponse, titleResponse, subtitleResponse, skillsResponse, certificateResponse, projectsResponse] = await Promise.all([
                        client.fetch(queryAbout),
                        client.fetch(queryTitle),
                        client.fetch(querySubtitle),
                        client.fetch(querySkills),
                        client.fetch(queryCertificates),
                        client.fetch(queryProjects)
                      ]);
              
                      setTitle(titleResponse.content);
                      setSubtitle(subtitleResponse.content);
                      setAbout(aboutResponse.content);
                      setSkills(skillsResponse.skills);
                      setCertificates(certificateResponse)
                      setProjects(projectsResponse)
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setTitle('Hendrik Boerma');
                    setSubtitle('Front-end developer, designer & tester');
                    setAbout('Ik ben Hendrik Boerma: tester, ontwerper en ontwikkelaar met een sterke focus op front-end. Mijn creativiteit, technische kennis en passie voor UX maken mij een veelzijdige IT-professional. Mijn vaardigheden uiten zich in het grondig testen van digitale producten tot het bedenken, ontwerpen en bouwen van gebruiksvriendelijke interfaces. Ik ben kritisch op de werking van het product en pas graag mijn kennis van UX toe. Met mijn technische vaardigheden creëer ik digitale oplossingen die zowel visueel aantrekkelijk als gebruiksvriendelijk zijn.')
                }
            };
        fetchData()
      }, []);

    return (
        <DataContext.Provider value={{ title, about, subtitle, projects, certificates, skills}}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
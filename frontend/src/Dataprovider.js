import React, { createContext, useState, useEffect } from 'react';
import client from './sanityClient'

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [about, setAbout] = useState('');
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const queryAbout = '*[_type == "aboutText"][0]{content}'
            const queryTitle = '*[_type == "title"][0]{content}'
            const querySubtitle = '*[_type == "subTitle"][0]{content}'
            const queryProjects = `*[_type == "projects"] {
                name,
                subtitle,
                tags,
                description,
                link,
                linktext}`

                try {
                    const [aboutResponse, titleResponse, subtitleResponse, projectsResponse] = await Promise.all([
                        client.fetch(queryAbout),
                        client.fetch(queryTitle),
                        client.fetch(querySubtitle),
                        client.fetch(queryProjects)
                      ]);
              
                      setTitle(titleResponse.content);
                      setSubtitle(subtitleResponse.content);
                      setAbout(aboutResponse.content);
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
        <DataContext.Provider value={{ title, about, subtitle, projects }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
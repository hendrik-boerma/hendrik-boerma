import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [about, setAbout] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all([
                    fetch(`${apiUrl}title`),
                    fetch(`${apiUrl}subtitle`),
                    fetch(`${apiUrl}about-me-text`)
                ]);

                const data = await Promise.all(
                    responses.map(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                );

                setTitle(data[0].data.attributes.title);
                setSubtitle(data[1].data.attributes.subtitle);
                setAbout(data[2].data.attributes.About_text);
            } catch (error) {
                console.error('Error fetching data:', error);
                setTitle('Hendrik Boerma');
                setSubtitle('Front-end developer, designer & tester');
                setAbout('De content kan helaas niet geladen worden. Probeer het later opnieuw.')
            }
        };

        fetchData();
    }, [apiUrl]);

    return (
        <DataContext.Provider value={{ title, about, subtitle }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
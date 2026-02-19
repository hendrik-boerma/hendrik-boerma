import React, { createContext, useState, useEffect } from 'react';
import client from './sanityClient';
import './index.css';
import profile from './Images/Profile.webp';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const querys = {
        queryAbout: '*[_type == "aboutText"][0]',
        queryHeader: `*[_type == "header"][0] {
                title,
                subtitle}`,
        querySkills: '*[_type == "skills"][0]',
        queryCertificates: `*[_type == "certificates"] {
                _id,
                name,
                link
            }`,
        queryProjects: `*[_type == "projects"] | order(order asc) {
                _id,
                name,
                subtitle,
                tags,
                description,
                image{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                link,
                linktext}`,
        queryStudies: `*[_type == "studies"] | order(order asc) {
                _id,
                studiename,
                institution,
                description,
                startDate,
                endDate}`,
        queryWork: `*[_type == "work"] | order(order asc) {
                _id,
                role,
                company,
                description,
                startDate,
                endDate}`
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [aboutResponse, headerResponse, skillsResponse, certificateResponse, projectsResponse, studiesResponse, workResponse] = await Promise.all([
                    client.fetch(querys.queryAbout),
                    client.fetch(querys.queryHeader),
                    client.fetch(querys.querySkills),
                    client.fetch(querys.queryCertificates),
                    client.fetch(querys.queryProjects),
                    client.fetch(querys.queryStudies),
                    client.fetch(querys.queryWork)
                ]);

                setData({
                    about: aboutResponse,
                    header: headerResponse,
                    skills: skillsResponse,
                    certificates: certificateResponse,
                    projects: projectsResponse,
                    studies: studiesResponse,
                    work: workResponse
                });

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
                setError(true);
            }
        };
        fetchData();
    }, []);

    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imageUrls = [profile];
        let loadedImages = 0;

        const handleImageLoad = () => {
            loadedImages += 1;
            if (loadedImages === imageUrls.length) {
                setImagesLoaded(true);
            }
        };

        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
            img.onload = handleImageLoad;
        });

    }, []);

    if (loading || !imagesLoaded) {
        document.body.classList.add('w-full');
        document.body.classList.add('no-max-width');
        return (
            <div className="flex flex-col items-center justify-start text-center min-h-screen w-full p-0 m-0">
                <div className=" w-full h-2 bg-backgroundcolor2 overflow-hidden animate-pulse">
                    <div className=" h-full bg-primary animate-fill w-full"></div>
                </div>
            </div>
        );
    }

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

    document.body.classList.remove('no-max-width');
    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };

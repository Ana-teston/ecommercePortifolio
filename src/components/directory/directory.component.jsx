import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
    {
        id: 1,
        title: 'tradicionais',
        imageUrl: 'https://images.unsplash.com/photo-1588616279830-ef7fa0299348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        route: 'shop/tradicionais',
    },
    {
        id: 2,
        title: 'especiais',
        imageUrl: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3871&q=80',
        route: 'shop/especiais',
    },
    {
        id: 3,
        title: 'integrais',
        imageUrl: 'https://images.unsplash.com/photo-1582502108738-680073fd694e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80',
        route: 'shop/integrais',
    },
    {
        id: 4,
        title: 'doces',
        imageUrl: 'https://images.unsplash.com/photo-1657756117226-0b9cdb57a05d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80',
        route: 'shop/doces',
    },
    {
        id: 5,
        title: 'muito +++',
        imageUrl: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        route: 'shop/muito +++',
    },
];

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
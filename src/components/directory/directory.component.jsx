import './directory.styles.scss';
import DirectoryItem from "../directory-item/directory-item.component";

const categories = [
    {
        id: 1,
        title: 'Especiais',
        imageUrl: 'https://images.unsplash.com/photo-1567752588693-ad10a647c5a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        route: 'shop/Especiais'
    },
    {
        id: 2,
        title: 'Tradicionais',
        imageUrl: 'https://images.unsplash.com/photo-1579697096985-41fe1430e5df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80',
        route: 'shop/Tradicionais'
    },
    {
        id: 3,
        title: 'Integrais',
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80',
        route: 'shop/Integrais'
    },
    {
        id: 4,
        title: 'Doces',
        imageUrl: 'https://images.unsplash.com/photo-1547043184-599cd7e6acb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3076&q=80',
        route: 'shop/Doces'
    },
    {
        id: 5,
        title: 'Muito +++',
        imageUrl: 'https://images.unsplash.com/photo-1645679057638-e435c5347798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3190&q=80',
        route: 'shop/Muito +++'
    }
]


const Directory = () => {
    return (
        <div className='directory-container'>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Directory;
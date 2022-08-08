import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";


function Home() {
    const categories = [
        {
            id: 1,
            title: 'Especiais',
            subtitle: 'Comprar',
            imageUrl: 'https://images.unsplash.com/photo-1567752588693-ad10a647c5a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        },
        {
            id: 2,
            title: 'Baguetes',
            subtitle: 'Comprar',
            imageUrl: 'https://images.unsplash.com/photo-1579697096985-41fe1430e5df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80',
        },
        {
            id: 3,
            title: 'Integrais',
            subtitle: 'Comprar',
            imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80',
        },
        {
            id: 4,
            title: 'Doces',
            subtitle: 'Comprar',
            imageUrl: 'https://images.unsplash.com/photo-1547043184-599cd7e6acb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3076&q=80',

        },
        {
            id: 5,
            title: 'Pates',
            subtitle: 'Comprar',
            imageUrl: 'https://images.unsplash.com/photo-1645679057638-e435c5347798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3190&q=80',
        }
    ]

    return (
        <div>
            <Directory categories={categories}/>
            <Outlet />
        </div>
    );
}

export default Home;

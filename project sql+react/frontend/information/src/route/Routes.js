import MainContent from "../Components/MainContent/MainContent";
import Location from "../Components/Location/Location";
import NotFound from "../Components/NotFound/NotFound";
import Information from "../Components/Information/Information";
import Favourite from "../Components/Favourite/Favourite";
import Search from "../Components/Search/Search";




 
export const routes = [
    {
    id:1,
    path: '/',
    element: (<Location/>)
    },

    {
    id:2,
    path: '/people/:id1',
    element: (<MainContent/>)
    },  
    {
    id:3,
    path: '/people/:id1/:id2',
    element: (<Information />)
    },
    {
    id: 4,
    path: '/favourite',
    element: (<Favourite/>)
    },  
    {
    id: 6,
    path: '*',
    element: (<NotFound/>)
    },
]


export const link = [
    {
        id:1,
        to:'/',
        value:'Home',
    },
    {
        id:2,
        to:'/people/1',
        value:'People',
    },
   

   

     
]




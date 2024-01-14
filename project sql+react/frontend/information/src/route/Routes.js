import MainContent from "../Components/MainContent/MainContent";
import Location from "../Components/Location/Location";
import NotFound from "../Components/NotFound/NotFound";



export const routes = [
    {
    id:1,
    path: '/',
    element: (<Location/>)
    },

    {
    id:2,
    path: '/people',
    element: (<MainContent/>)
    },
    
    {
    id:3,
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
        to:'/people/?id=1',
        value:'People',
    }
]
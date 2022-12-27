import { useCookies } from 'react-cookie'

export const Cookies = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['blogs']);
    

    return { setCookie, removeCookie };
}
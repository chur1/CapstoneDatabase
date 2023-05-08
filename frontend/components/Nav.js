import Link from 'next/link';
import { NavStyles, NavItems } from '../styles/NavStyle';

export default function Nav(){
    return(
        <NavStyles>
            <Link href={`/`}>
                <img src="https://auadfs.american.edu/adfs/portal/images/aulogocrest.png" alt="" />
            </Link>
            <NavItems>
                <Link class= "hover-underline-animation" href={`/`}>Projects</Link>
                <Link class= "hover-underline-animation" href={`/travel-members`}>Students</Link>
                {/* <div>Login</div> */}
            </NavItems>
        </NavStyles>
        // hello
    );
}
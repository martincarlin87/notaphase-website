import { useRouter } from 'next/router';
import Link from 'next/link';

export { NavLink };


function NavLink({ href, exact, children, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ' active';
    }

    return (
        <Link href={href} className={props.className}>
            {children}
        </Link>
    );
}

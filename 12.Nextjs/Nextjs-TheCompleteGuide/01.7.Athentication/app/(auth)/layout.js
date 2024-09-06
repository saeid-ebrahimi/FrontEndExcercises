import { logout } from '@/actions/auth-actions';
import '../globals.css';

export const metadata = {
    title: 'Next Auth',
    description: 'Next.js Authentication',
};

export default function AuthRootLayout({ children })
{
    return (
        <html lang="en">
            <body>
                <header id='auth-header'>
                    <p>Welcome Back Bro</p>
                    <form action={logout}>
                        <button>
                            Logout
                        </button>
                    </form>
                </header>
                {children}
            </body>
        </html>
    );
}

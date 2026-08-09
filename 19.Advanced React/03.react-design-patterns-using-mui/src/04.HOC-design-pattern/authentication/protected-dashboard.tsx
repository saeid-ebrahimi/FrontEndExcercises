import { Button, Container, Typography } from "@mui/material";
import { UserDashboard } from "./user-dashboard";

// using Hooks are most common way to implement Authentication check
function withProtectedRoute<P extends object>(WrappedComponent: React.ComponentType<P>) {
    return function ProtectedRoute(props: P) {
        const isAuthenticated = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
        if (!isAuthenticated) {
            return <Container sx={{ padding: '40px', textAlign: 'center' }}>
                <Typography variant="h4" component="h2">
                    Access Denied
                </Typography>
                <Typography variant="body1" component="p" sx={{ marginTop: '20px' }}>
                    You must be logged in to view your profile dashboard.
                </Typography>
                <Button LinkComponent={"a"} href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>
                    Click here to log in
                </Button>
            </Container>
        }
        return <WrappedComponent {...props} />;
    }

}

export const ProtectedDashboard = withProtectedRoute(UserDashboard);
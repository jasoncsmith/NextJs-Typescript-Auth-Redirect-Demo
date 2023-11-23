import { CircularProgress } from '@mui/material';

const Loader = () => (
    <div style={{ textAlign: 'center', height: '100vh' }}>
        <CircularProgress sx={{ mt: '150px' }} />
    </div>
);

export default Loader;

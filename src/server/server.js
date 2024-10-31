import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes.js';


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', bookRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
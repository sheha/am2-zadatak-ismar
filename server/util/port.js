import { port } from './argv';

export default parseInt(port || process.env.PORT || '3000', 10);

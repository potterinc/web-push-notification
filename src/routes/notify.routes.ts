import express, {Router} from 'express';
import Notification from '../services/push.services';

const pushNotification: Router = express();
const notify = new Notification('b6bb9f25-7ebe-4e94-a7a5-e25b2f24fe34');

// pushNotification.post('', notify.push)
//
// notify.createUser('harryp30@gmail.com')
notify.push('This is a test push to segments');
export default pushNotification;
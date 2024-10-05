import { uploadPhoto } from './utils';
import { createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((responses) => {
    responses.forEach((response) => {
      console.log(response.body.firstName, response.body.lastName);
    });
  }).catch((error) => {
    console.log('Signup system offline');
  });
}

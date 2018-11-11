// @flow
import faker from 'faker';

type UserType = {
  key: number,
  uuid: number,
  username: string,
  bio: string,
  avatar: string,
  job: string,
  company: string,
  phone: string,
  email: string,
};

const FAKE_DATA_NB = 15;
const FAKE_REQUEST_TIME = 1720;

function fetchUsers(): Promise<Array<UserType>> {
  return new Promise(resolve => {
    const timer = setTimeout(() => {
      resolve([...Array(FAKE_DATA_NB)].map<*>((item: *, index: number): UserType => ({
        key: index,
        uuid: faker.random.uuid(),
        username: faker.name.findName(),
        bio: faker.lorem.paragraphs(),
        avatar: faker.image.avatar(),
        job: faker.name.jobTitle(),
        company: faker.company.companyName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
      })));
      timer && clearTimeout(timer);
    }, FAKE_REQUEST_TIME);
  });
}

export default fetchUsers;

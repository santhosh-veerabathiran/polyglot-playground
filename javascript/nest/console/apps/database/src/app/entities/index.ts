import { DatabaseRepository, Users } from '@workspace/constants';

export const entities = [Users];

export const Repositories = {
    UR: DatabaseRepository.getName(Users),
};

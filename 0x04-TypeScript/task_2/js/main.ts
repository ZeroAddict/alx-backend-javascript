import { Teacher } from '../../task_1/js/main.ts';

interface Directors extends Teacher {
  numberOfReports: number;
}

class Director implements Directors {
  private _firstName: string;
  private _lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  numberOfReports: number;

  constructor(config: Directors) {
    this._firstName = config.firstName;
    this._lastName = config.lastName;
    this.fullTimeEmployee = config.fullTimeEmployee;
    this.location = config.location;
    this.numberOfReports = config.numberOfReports;
  }

  getFirstName(): string {
    return this._firstName;
  }

  getLastName(): string {
    return this._lastName;
  }
}


const director1: Director = new Director({
  firstName: 'John',
  lastName: 'Drugal',
  location: 'Lisbon',
  fullTimeEmployee: true,
  numberOfReports: 17,
});

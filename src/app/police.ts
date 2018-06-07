import {Person} from './person';

export class Police extends Person {
  public badgeNumber: number;

  constructor(fname: string, lname: string, badgeNumber: number) {
    super(fname, lname);
    this.badgeNumber = badgeNumber;
  }

  getBadgeNo(): number {
    return this.badgeNumber;
  }

}

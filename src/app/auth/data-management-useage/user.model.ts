// import { Ingredient } from '../shared/ingredient.model';
export class User {
  public fname: string;
  public lname: string;
  public studentId: number;
  public course: string [];

  constructor(fname: string, lname: string, studentId: number, course: string []) {
    this.fname = fname;
    this.lname = lname;
    this.studentId = studentId;
    this.course = course;
  }

  getFullName(): string {
    const fullName = this.fname + ' ' + this.lname;

    return fullName;
  }

  getLastNameAndId() {
    const lnameId = this.lname + ' ' + this.studentId;

    return lnameId;
  }
}

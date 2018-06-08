export class Teacher {
  public fname: string;
  public lname: string;
  public teacherId: number;
  public course: string [];

  constructor(fname: string, lname: string, teacherId: number, course: string []) {
    this.fname = fname;
    this.lname = lname;
    this.teacherId = teacherId;
    this.course = course;

  }

  getFullName(): string {
    const fullName = this.fname + ' ' + this.lname;

    return fullName;
  }

  getLastNameAndId() {
    const lnameId = this.lname + ' ' + this.teacherId;

    return lnameId;
  }

}

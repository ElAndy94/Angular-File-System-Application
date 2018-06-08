export class Student {
  public fname: string;
  public lname: string;
  public studentId: number;

  constructor(fname: string, lname: string, studentId: number) {
    this.fname = fname;
    this.lname = lname;
    this.studentId = studentId;
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

export class Person {
  public fname: string;
  public lname: string;

  constructor(fname: string, lname: string) {
    this.fname = fname;
    this.lname = lname;
  }

  getFullName(): string {
    const fullName = this.fname + ' ' + this.lname;

    return fullName;
  }
}

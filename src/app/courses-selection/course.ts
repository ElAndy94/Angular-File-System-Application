export class Course {
  public cname: string;
  public cdescription: string;
  public cduration: number;
  public cId: number;

  constructor(cname: string, cdescription: string, cduration: number, cId: number) {
    this.cname = cname;
    this.cdescription = cdescription;
    this.cduration = cduration;
    this.cId = cId;

  }

  getAllInfo() {
    const allInfo = this.cname + ' ' + this.cdescription + ' ' + 'Duration:  ' + this.cduration + 'days ' + ' ' + 'CourseID: ' + this.cId;

    return allInfo;
  }

}


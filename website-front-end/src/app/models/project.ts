
export class Project {


    constructor(
        public id?: number,
        public title?: string,
        public linkName?: string,
        public displayImage?: string,
        public dateCreated?: string,
        public lastModified?: string,
        public content?: string,
      ) {
          if (this.title == null) this.title = "";
          if (this.linkName == null) this.linkName = "";
          if (this.content == null) this.content = "";
        }

}
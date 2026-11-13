export namespace Utils {
  export const foo = "bar";
}

export class User {
  constructor(private readonly name: string) {
    console.log(this.name);
  }
}

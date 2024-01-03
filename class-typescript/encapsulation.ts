//Encapsulation is a way to restrict the direct access to some components of an object, so users cannot access state values for all of the variables of a particular object.
//access modifiers: public, private, protected, readonly
// public: can be accesable from anywhere
// private: only accessable within the calss
// restricted: only accessable within the callas and from subclass or childclass
// readonly: can not be modified.
class UserDetails {
  protected name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  protected display(): void {
    console.log(`My name is ${this.age} and my age is ${this.age}`);
  }
}

const userObj = new UserDetails("Nahid Hossain", 27);
//userObj.name = "Imran Hossian"; //can not access protected member
//userObj.display(); //can not access protected method

class StudentDetails extends UserDetails {
  private studentId: number;
  constructor(name: string, age: number, studentId: number) {
    super(name, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `My name is ${this.age} and my age is ${this.age} and ID is ${this.studentId}`
    );
  }

  setStudent(id: number): void {
    this.studentId = id;
  }
  getStudent(): number {
    return this.studentId;
  }
}

let studentObj = new StudentDetails("Nikki hasan", 27, 2016260136);
// studentObj.display();
studentObj.setStudent(2016260136);
console.log("Student Id is:", studentObj.getStudent());

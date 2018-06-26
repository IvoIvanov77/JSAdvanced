/**
 * Created by Ivaylo on 5/27/2018.
 */

function solve() {

    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString(){
            return `${this.constructor.name} ` +
            `(name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }

        toString(){
            return super.toString().slice(0, -1) +
                    `, subject: ${this.subject})`
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }

        toString(){
            return super.toString().slice(0, -1) +
                `, course: ${this.course})`
        }
    }

    return{
        Person,
        Teacher,
        Student
    }
}

let classes = solve();

let p = new classes.Person('ivo', 'ivo@abv.bg');
console.log(p.toString())

let s = new classes.Student('pepi', 'p@a.bg', 'javaScript')
console.log(s.toString())
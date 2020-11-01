export let a = {
  name: "",
  protocol: "https",
  maxStudenCount: 10,
  isOnline: true,
  students: ["Julia", "Serg", "John"],
  classRoom:{
    teacher:{
      name: "Kate",
      age: 18,
    }
  }
}

let aCopy = {...a};
 aCopy.students = [...a.students];
 aCopy.classRoom = {...a.classRoom};
 aCopy.classRoom.teacher = {...a.classRoom.teacher}
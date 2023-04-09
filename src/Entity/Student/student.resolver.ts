import {StudentModel} from "./Model/student.model";
import {StudentService} from "./student.service";
import {StudentDto} from "./Dto/student.dto";

const studentService: StudentService = new StudentService();
export const StudentResolver = {
  students: async (): Promise<Array<StudentDto>> => {
    const studentModels: Array<StudentModel> = await studentService.getStudents();
    return studentModels.map((studentModel) => StudentDto.Load(studentModel));
  },

  student: async ({id}: { id: number }): Promise<StudentDto> => {
    const studentModel: StudentModel = await studentService.getStudent(+id);
    return StudentDto.Load(studentModel);
  },
  nextLessons: async ({id}: { id: number }): Promise<StudentDto> => {
    const studentModel: StudentModel = await studentService.getStudent(+id);
    console.log(studentModel);
    return StudentDto.Load(studentModel);
  },
  addStudent: async ({student}: { student: StudentDto }): Promise<StudentDto> => {
    const studentModel: StudentModel = await studentService.create(student);
    return StudentDto.Load(studentModel);
  },

  updateStudent: async ({student}: { student: StudentDto }): Promise<StudentDto> => {
    const studentModel: StudentModel = await studentService.update(student);
    return StudentDto.Load(studentModel);
  },
  delete: async ({id}: { id: number }): Promise<boolean> => {
    const studentModel: StudentModel = await studentService.delete(+id);
    return studentModel.std_id > 0;
  },
  average: async ({id}: { id: number }): Promise<StudentDto> => {
    const res = await studentService.average(+id);
    res.studentModel.average = res.avg._avg.exm_grade.toFixed(2);
    return StudentDto.Load(res.studentModel);
  }


}
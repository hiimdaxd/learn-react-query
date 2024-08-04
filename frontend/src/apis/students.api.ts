import { StudentList } from 'types/students.type'
import http from 'utils/http'

export const getStudents = (page: number | string, limit: number | string) => {
  return http.get<StudentList>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })
}

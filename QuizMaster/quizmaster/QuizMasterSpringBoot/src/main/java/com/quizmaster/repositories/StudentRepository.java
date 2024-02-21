package com.quizmaster.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.quizmaster.entities.Student;


@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	

	@Query("select s from Student s where uid.uid = :uid ")
	public Student getStudentByUid(int uid);
}

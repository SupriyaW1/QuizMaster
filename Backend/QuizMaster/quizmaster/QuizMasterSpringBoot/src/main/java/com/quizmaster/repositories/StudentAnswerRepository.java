package com.quizmaster.repositories;

import com.quizmaster.entities.Category;
import com.quizmaster.entities.Student;
import com.quizmaster.entities.StudentAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface StudentAnswerRepository extends JpaRepository<StudentAnswer, Integer> {

    // Method to find all student answers by exam ID
	
	 
	List<StudentAnswer> findByExamIdAndSidAndCatId(int examId, Student sid, Category catId);
	




}

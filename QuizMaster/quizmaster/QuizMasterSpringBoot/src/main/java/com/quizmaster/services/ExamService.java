package com.quizmaster.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Exam;
import com.quizmaster.entities.Role;
import com.quizmaster.repositories.ExamRepository;

@Service
public class ExamService {
	
	@Autowired 
	ExamRepository erepo;

	public Exam saveExam(Exam exam) {
		
		return erepo.save(exam);
	} 
	
	public Exam getExam(int exam_id)
	{
		return erepo.findById(exam_id).get();
	}
	

}

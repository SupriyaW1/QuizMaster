package com.quizmaster.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Exam;
import com.quizmaster.repositories.ExamRepository;

@Service
public class ExamService {

	@Autowired
	ExamRepository examRepo;
	public Exam saveExam(Exam exam) {
		return examRepo.save(exam);
	}
	public Exam findByEaxamid(int exam_id) {
		return examRepo.findById(exam_id).get();
	}

}

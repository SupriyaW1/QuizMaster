package com.quizmaster.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.repositories.StudentAnswerRepository;

@Service
public class StudentAnswerService {
	
	@Autowired
	StudentAnswerRepository sarepo;

}

package com.quizmaster.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.repositories.ExamRepository;

@Service
public class ExamService {
	
	@Autowired 
	ExamRepository erepo; 

}

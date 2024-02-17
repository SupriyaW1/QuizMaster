package com.quizmaster.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Question;
import com.quizmaster.repositories.QuestionRepository;

@Service
public class QuestionService {
	
	@Autowired
	QuestionRepository qrepo;
	
	public Question saveQuestion(Question q) {
		
		return qrepo.save(q);
		
	}
	
	public List<Question> getQuestions() {
		return qrepo.findAll();
	}

}

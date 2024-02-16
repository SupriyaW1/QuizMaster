package com.quizmaster.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Question;
import com.quizmaster.repositories.QuestionRepository;

@Service
public class QuestionService {
	@Autowired
	QuestionRepository queRepo;

	public Question addQuetion(Question quetion) {
		return queRepo.save(quetion);
	}

	public List<Question> getQuestions() {
		return queRepo.findAll();
	}
}

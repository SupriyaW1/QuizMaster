package com.quizmaster.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Category;
import com.quizmaster.entities.Question;
import com.quizmaster.entities.Subject;
import com.quizmaster.repositories.CategoryRepository;
import com.quizmaster.repositories.QuestionRepository;
import com.quizmaster.repositories.SubjectRepositroy;

@Service
public class QuestionService {
	
	@Autowired
	QuestionRepository qrepo;
	
	@Autowired
	CategoryRepository crepo;
	
	@Autowired
	SubjectRepositroy srepo;
	
	public Question saveQuestion(Question q) {
		
		return qrepo.save(q);
		
	}
	
	public List<Question> getQuestions() {
		return qrepo.findAll();
	}
	
	public List<Question> findBySubIdAndCatid(int cat_id, int subject_id) {
		Category cat = crepo.findById(cat_id).get();
		Subject subject = srepo.findById(subject_id).get();
		return qrepo.findBySubIdAndCatid(cat, subject);
	}

	public Question findByqid(int qid) {
		
		return qrepo.findById(qid).get();
	}
	
	
}
